/* ==========================================================
   AnyChat 营销站点交互
   1) 多语言:切换 / 记忆 / 属性替换(依赖 i18n.js)
   2) 导航:滚动阴影 + 移动端汉堡菜单
   3) 滚动入场动画(IntersectionObserver)
   4) 下载卡片占位提示(配置真实链接后自动外链)
   5) 联系表单:前端校验 + 提交反馈
   ========================================================== */
(function () {
  'use strict';

  const I18N = window.ANYCHAT_I18N || {};
  const LANGS = window.ANYCHAT_LANGS || [];
  const STORAGE_KEY = 'anychat.lang';
  // 系统语言未命中任何适配语言时的兜底语言:英语。
  const DEFAULT_LANG = 'en';

  /* ---------------- 多语言 ---------------- */
  let currentLang = DEFAULT_LANG;

  function t(key) {
    // 页面级元信息(<title> / description)放在 I18N.meta 命名空间下。
    if (key.indexOf('meta.') === 0) {
      const m = I18N.meta && (I18N.meta[currentLang] || I18N.meta[DEFAULT_LANG]);
      const sub = key.slice(5);
      if (m && m[sub] !== undefined) return m[sub];
    }
    const dict = I18N[currentLang] || I18N[DEFAULT_LANG] || {};
    const fallback = I18N[DEFAULT_LANG] || {};
    if (Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
    return fallback[key] !== undefined ? fallback[key] : key;
  }

  /// 把单个语言标签(如 zh-TW / es-419 / en-GB)映射到本站支持的语言。
  /// 繁体地区(TW / HK / MO)与 Hant 子标记走繁体,其余中文走简体;
  /// 命中不了任何适配语言时返回 null,由调用方回落到英语。
  function matchLang(tag) {
    const v = (tag || '').toLowerCase().replace('_', '-');
    if (!v) return null;
    if (v.indexOf('zh') === 0) {
      const traditional = ['tw', 'hk', 'mo', 'hant'].some((m) => v.indexOf(m) > -1);
      return traditional ? 'zh-TW' : 'zh-CN';
    }
    if (v.indexOf('es') === 0) return 'es';
    if (v.indexOf('en') === 0) return 'en';
    return null;
  }

  function detectLang() {
    // 优先级:URL ?lang=xx > 本地存储(用户手动选择过) > 系统语言 > 英语
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (fromUrl && I18N[fromUrl]) return fromUrl;

    let saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (_) {
      /* 隐私模式下 localStorage 可能不可用 */
    }
    if (saved && I18N[saved]) return saved;

    // navigator.languages 是系统的语言偏好顺序(多数浏览器可用),
    // 逐个尝试取第一个能适配的语言;不可用时退回 navigator.language。
    const prefs =
      (navigator.languages && navigator.languages.length ? navigator.languages : null) ||
      (navigator.language ? [navigator.language] : []);
    for (const tag of prefs) {
      const hit = matchLang(tag);
      if (hit && I18N[hit]) return hit;
    }
    return DEFAULT_LANG;
  }

  function applyI18n(lang) {
    if (!I18N[lang]) lang = DEFAULT_LANG;
    currentLang = lang;

    // 文本
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    // 属性:data-i18n-attr="attr|key" 或 "attr1|key1;attr2|key2"
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.getAttribute('data-i18n-attr').split(';').forEach((pair) => {
        const parts = pair.split('|');
        if (parts.length !== 2) return;
        el.setAttribute(parts[0].trim(), t(parts[1].trim()));
      });
    });

    // <title> 与 description
    const meta = I18N.meta && I18N.meta[lang] ? I18N.meta[lang] : I18N.meta[DEFAULT_LANG];
    if (meta) {
      if (meta.title) document.title = meta.title;
      const desc = document.querySelector('meta[name="description"]');
      if (desc && meta.desc) desc.setAttribute('content', meta.desc);
    }

    document.documentElement.lang = (LANGS.find((l) => l.code === lang) || { html: lang }).html;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      /* 忽略 */
    }
  }

  function initLangPicker() {
    const select = document.getElementById('langSelect');
    if (!select) return;
    select.innerHTML = LANGS.map(
      (l) => '<option value="' + l.code + '">' + l.label + '</option>'
    ).join('');
    select.value = currentLang;
    select.addEventListener('change', () => applyI18n(select.value));
  }

  applyI18n(detectLang());
  initLangPicker();

  /* ---------------- 导航 ---------------- */
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* ---------------- 滚动入场 ---------------- */
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          setTimeout(() => el.classList.add('in'), Math.min(i * 60, 300));
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealItems.forEach((el) => io.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add('in'));
  }

  /* ---------------- 下载卡片 ---------------- */
  // 配置真实下载地址后(填入 href),卡片自动变为外链;未配置时给出提示。
  const dlLinks = { web: '#', android: '#', ios: '#', desktop: '#' };
  document.querySelectorAll('[data-dl]').forEach((card) => {
    const href = dlLinks[card.getAttribute('data-dl')];
    if (href && href !== '#') {
      card.setAttribute('href', href);
      card.setAttribute('target', '_blank');
      card.setAttribute('rel', 'noopener');
      return;
    }
    card.addEventListener('click', (e) => {
      e.preventDefault();
      window.alert(t('dl.notset'));
    });
  });

  /* ---------------- 联系表单 ---------------- */
  const form = document.getElementById('contactForm');
  const tip = document.getElementById('formTip');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const plan = (data.get('plan') || '').toString().trim();

      if (!name || !email || !plan) {
        tip.textContent = t('cta.tip.invalid');
        return;
      }
      const isMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
      const isTelegram = /^@?[A-Za-z0-9_]{4,32}$/.test(email);
      if (!isMail && !isTelegram) {
        tip.textContent = t('cta.tip.mail');
        return;
      }
      // TODO: 接入后端 / 表单服务后改为真实提交。
      tip.textContent = t('cta.tip.ok').replace('{name}', name).replace('{plan}', plan);
      form.reset();
    });
  }
})();
