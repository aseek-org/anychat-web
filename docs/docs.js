/* ==========================================================
   AnyChat 文档中心
   1) 多语言(与主站同策略:URL ?lang= > 记忆 > 系统语言 > 英语)
   2) 侧边栏:概览 + 三个版本 × 帮助 / 开发,支持搜索过滤
   3) 路由:hash #/<plan>/<type>,默认 #/overview
   4) 正文增强:代码块(语言标签 + 复制)、标题锚点、面包屑、上下篇
   5) 阅读体验:右侧目录高亮(scrollspy)、进度条、返回顶部、移动端抽屉
   ========================================================== */
(function () {
  'use strict';

  const I18N = window.ANYCHAT_I18N || {};
  const LANGS = window.ANYCHAT_LANGS || [];
  const STORAGE_KEY = 'anychat.lang';
  const DEFAULT_LANG = 'en';

  const CONTENT = {
    'zh-CN': window.DOC_ZH_CN || {},
    'zh-TW': window.DOC_ZH_TW || {},
    en: window.DOC_EN || {},
    es: window.DOC_ES || {},
  };

  // 文档按「产品大版本」组织,新增大版本时在此追加一项即可。
  const VERSIONS = [{ id: 'v1', nameKey: 'doc.v1' }];
  const TYPES = [
    { id: 'help', nameKey: 'doc.help' },
    { id: 'dev', nameKey: 'doc.dev' },
    { id: 'api', nameKey: 'doc.api' },
  ];
  const ORDER = ['overview', 'v1.help', 'v1.dev', 'v1.api'];

  let currentLang = DEFAULT_LANG;

  /* ---------------- 多语言 ---------------- */
  function t(key) {
    if (key.indexOf('meta.') === 0) {
      const m = I18N.meta && (I18N.meta[currentLang] || I18N.meta[DEFAULT_LANG]);
      const sub = key.slice(5);
      if (m && m[sub] !== undefined) return m[sub];
    }
    const dict = I18N[currentLang] || I18N[DEFAULT_LANG] || {};
    if (Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
    const fallback = I18N[DEFAULT_LANG] || {};
    return fallback[key] !== undefined ? fallback[key] : key;
  }

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
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (fromUrl && I18N[fromUrl]) return fromUrl;

    let saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (_) {
      /* 隐私模式下不可用 */
    }
    if (saved && I18N[saved]) return saved;

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

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.getAttribute('data-i18n-attr').split(';').forEach((pair) => {
        const parts = pair.split('|');
        if (parts.length !== 2) return;
        el.setAttribute(parts[0].trim(), t(parts[1].trim()));
      });
    });

    document.documentElement.lang = (LANGS.find((l) => l.code === lang) || { html: lang }).html;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      /* 忽略 */
    }
  }

  /* ---------------- 路由与标题 ---------------- */
  function currentRoute() {
    const parts = (location.hash || '').replace(/^#\/?/, '').split('/').filter(Boolean);
    if (!parts.length || parts[0] === 'overview') return 'overview';
    const version = VERSIONS.some((v) => v.id === parts[0]) ? parts[0] : 'v1';
    const type = TYPES.some((ty) => ty.id === parts[1]) ? parts[1] : 'help';
    return version + '.' + type;
  }

  function routeHash(route) {
    return route === 'overview' ? '#/overview' : '#/' + route.replace('.', '/');
  }

  function routeTitle(route) {
    if (route === 'overview') return t('doc.docs');
    const version = VERSIONS.find((v) => v.id === route.split('.')[0]);
    const type = TYPES.find((ty) => ty.id === route.split('.')[1]);
    return (version ? t(version.nameKey) : '') + ' · ' + (type ? t(type.nameKey) : '');
  }

  function routePlanName(route) {
    const version = VERSIONS.find((v) => v.id === route.split('.')[0]);
    return version ? t(version.nameKey) : '';
  }

  /* ---------------- 侧边栏 ---------------- */
  function renderMenu() {
    const menu = document.getElementById('docsMenu');
    if (!menu) return;

    let html =
      '<a class="docs-link" href="#/overview" data-route="overview" data-search="' +
      t('doc.docs') +
      '">' +
      t('doc.docs') +
      '</a>';

    VERSIONS.forEach((version) => {
      html += '<div class="docs-group" data-version="' + version.id + '">';
      html += '<span class="docs-group-title">' + t(version.nameKey) + '</span>';
      TYPES.forEach((type) => {
        const route = version.id + '.' + type.id;
        const text = t(version.nameKey) + ' ' + t(type.nameKey);
        html +=
          '<a class="docs-link" href="#/' +
          version.id +
          '/' +
          type.id +
          '" data-route="' +
          route +
          '" data-search="' +
          text +
          '">' +
          t(type.nameKey) +
          '</a>';
      });
      html += '</div>';
    });

    menu.innerHTML = html;
  }

  /* ---------------- 正文增强 ---------------- */
  function detectCodeLang(text) {
    if (/^\s*server\s*\{|location\s+\/|proxy_pass/m.test(text)) return 'nginx';
    if (/^\s*[\{\[]|"iceServers"|"versionCode"/m.test(text)) return 'json';
    if (/flutter |dotnet |docker |git clone|^\s*cd /m.test(text)) return 'bash';
    if (/<[a-z][\s\S]*>/i.test(text)) return 'html';
    if (/ASP.NET|│|▼/.test(text)) return 'text';
    return 'text';
  }

  function wrapCodeBlocks() {
    const body = document.getElementById('docBody');
    if (!body) return;

    body.querySelectorAll('pre').forEach((pre) => {
      if (pre.parentElement && pre.parentElement.classList.contains('code-block')) return;

      const code = pre.querySelector('code');
      const text = (code || pre).textContent || '';
      const lang = detectCodeLang(text);

      const wrap = document.createElement('div');
      wrap.className = 'code-block';

      const bar = document.createElement('div');
      bar.className = 'code-bar';
      bar.innerHTML = '<span class="code-lang">' + lang + '</span>';

      const btn = document.createElement('button');
      btn.className = 'code-copy';
      btn.type = 'button';
      btn.textContent = t('doc.copy');
      btn.addEventListener('click', () => {
        copyText(text, btn);
      });
      bar.appendChild(btn);

      pre.parentNode.insertBefore(wrap, pre);
      wrap.appendChild(bar);
      wrap.appendChild(pre);
    });
  }

  function copyText(text, btn) {
    const done = () => {
      const old = btn.textContent;
      btn.textContent = t('doc.copied');
      btn.classList.add('done');
      setTimeout(() => {
        btn.textContent = old;
        btn.classList.remove('done');
      }, 1600);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
      return;
    }
    fallbackCopy(text, done);
  }

  function fallbackCopy(text, done) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      done();
    } catch (_) {
      /* 复制失败时静默 */
    }
  }

  function addAnchors() {
    const body = document.getElementById('docBody');
    if (!body) return;
    body.querySelectorAll('h2[id], h3[id]').forEach((h) => {
      if (h.querySelector('.anchor')) return;
      const a = document.createElement('a');
      a.className = 'anchor';
      a.href = '#' + h.id;
      a.textContent = '#';
      h.appendChild(a);
    });
  }

  function renderCrumb() {
    const el = document.getElementById('docCrumb');
    if (!el) return;
    const route = currentRoute();
    const parts = [
      '<a href="../index.html">AnyChat</a>',
      '<span class="sep">/</span>',
      '<a href="#/overview">' + t('doc.docs') + '</a>',
    ];
    if (route !== 'overview') {
      parts.push('<span class="sep">/</span>');
      parts.push('<span>' + routePlanName(route) + '</span>');
      parts.push('<span class="sep">/</span>');
      parts.push('<span class="cur">' + routeTitle(route).split('· ')[1] + '</span>');
    }
    el.innerHTML = parts.join(' ');
  }

  function renderPager() {
    const el = document.getElementById('docPager');
    if (!el) return;
    const route = currentRoute();
    const i = ORDER.indexOf(route);
    const prev = i > 0 ? ORDER[i - 1] : null;
    const next = i >= 0 && i < ORDER.length - 1 ? ORDER[i + 1] : null;

    let html = '';
    if (prev) {
      html +=
        '<a class="prev" href="' + routeHash(prev) + '">' +
        '<span class="dir">← ' + t('doc.prev') + '</span>' +
        '<span class="ttl">' + routeTitle(prev) + '</span></a>';
    } else {
      html += '<span class="spacer"></span>';
    }
    if (next) {
      html +=
        '<a class="next" href="' + routeHash(next) + '">' +
        '<span class="dir">' + t('doc.next') + ' →</span>' +
        '<span class="ttl">' + routeTitle(next) + '</span></a>';
    }
    el.innerHTML = html;
  }

  /* ---------------- 目录与滚动 ---------------- */
  function buildToc() {
    const body = document.getElementById('docBody');
    const toc = document.getElementById('docToc');
    if (!body || !toc) return;
    const heads = body.querySelectorAll('h2[id]');
    if (!heads.length) {
      toc.innerHTML = '';
      return;
    }
    let html = '';
    heads.forEach((h) => {
      html += '<a class="docs-toc-link" href="#' + h.id + '">' + h.textContent.replace('#', '') + '</a>';
    });
    toc.innerHTML = html;
  }

  let spyHeads = [];
  function setupTocSpy() {
    const body = document.getElementById('docBody');
    spyHeads = body ? Array.prototype.slice.call(body.querySelectorAll('h2[id]')) : [];
    onScroll();
  }

  function onScroll() {
    // 阅读进度
    const bar = document.getElementById('docProgress');
    if (bar) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? (window.scrollY / h) * 100 : 0;
      bar.style.width = Math.min(100, Math.max(0, p)) + '%';
    }
    // 返回顶部
    const top = document.getElementById('toTop');
    if (top) top.classList.toggle('show', window.scrollY > 420);

    // 目录高亮:取最后一个已滚过顶部的标题
    const links = document.querySelectorAll('.docs-toc-link');
    if (!links.length || !spyHeads.length) return;
    let idx = 0;
    for (let i = 0; i < spyHeads.length; i++) {
      if (spyHeads[i].getBoundingClientRect().top <= 140) idx = i;
      else break;
    }
    links.forEach((a, i) => a.classList.toggle('active', i === idx));
  }

  /* ---------------- 渲染 ---------------- */
  function renderDoc() {
    const route = currentRoute();
    const body = document.getElementById('docBody');
    if (!body) return;

    const dict = CONTENT[currentLang] || {};
    const fallback = CONTENT[DEFAULT_LANG] || {};
    const html = dict[route] !== undefined ? dict[route] : fallback[route];

    body.innerHTML = html !== undefined ? html : '<p>' + t('doc.select') + '</p>';

    document.querySelectorAll('.docs-link').forEach((a) => {
      a.classList.toggle('active', a.getAttribute('data-route') === route);
    });

    wrapCodeBlocks();
    addAnchors();
    buildToc();
    renderCrumb();
    renderPager();
    setupTocSpy();
    window.scrollTo({ top: 0, behavior: 'auto' });
    onScroll();
  }

  /* ---------------- 搜索 ---------------- */
  function setupSearch() {
    const input = document.getElementById('docSearch');
    if (!input) return;
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      document.querySelectorAll('.docs-group').forEach((group) => {
        let visible = 0;
        group.querySelectorAll('.docs-link').forEach((a) => {
          const hit = !q || (a.getAttribute('data-search') || '').toLowerCase().indexOf(q) > -1;
          a.classList.toggle('hidden', !hit);
          if (hit) visible++;
        });
        // 搜索时隐藏无命中的分组标题
        group.style.display = q && visible === 0 ? 'none' : '';
      });
    });
  }

  /* ---------------- 移动端抽屉 ---------------- */
  function setupDrawer() {
    const btn = document.getElementById('docsMenuToggle');
    const side = document.getElementById('docsSide');
    if (!btn || !side) return;
    btn.addEventListener('click', () => side.classList.toggle('open'));
    side.addEventListener('click', (e) => {
      if (e.target.closest('a')) side.classList.remove('open');
    });
  }

  /* ---------------- 初始化 ---------------- */
  applyI18n(detectLang());

  const select = document.getElementById('langSelect');
  if (select) {
    select.innerHTML = LANGS.map(
      (l) => '<option value="' + l.code + '">' + l.label + '</option>'
    ).join('');
    select.value = currentLang;
    select.addEventListener('change', () => {
      applyI18n(select.value);
      renderMenu();
      renderDoc();
    });
  }

  const toTop = document.getElementById('toTop');
  if (toTop) {
    toTop.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: 'smooth' })
    );
  }

  // 只有 #/<plan>/<type> 形式的路由才切换文档;
  // 标题锚点(#nginx 等)交给浏览器原生滚动,不重新渲染。
  window.addEventListener('hashchange', () => {
    const h = location.hash || '';
    if (h && h.indexOf('#/') !== 0) return;
    renderDoc();
  });
  window.addEventListener('scroll', onScroll, { passive: true });

  renderMenu();
  renderDoc();
  setupSearch();
  setupDrawer();

  if (!location.hash) location.hash = '#/overview';
})();
