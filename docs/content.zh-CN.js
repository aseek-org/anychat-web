/* AnyChat 文档 — 简体中文内容（HTML 片段） */
window.DOC_ZH_CN = {
  overview: `
<h1>文档中心</h1>
<p class="lead">AnyChat 文档按<strong>产品大版本</strong>组织，当前大版本为 <strong>V1</strong>。请选择文档类型：
<strong>帮助文档</strong>、<strong>开发文档</strong>或 <strong>API 接口文档</strong>。</p>

<h2 id="versions">版本</h2>
<table class="doc-table">
  <tr><th>版本</th><th>状态</th><th>文档</th></tr>
  <tr>
    <td><strong>V1</strong></td>
    <td>当前版本</td>
    <td><a href="#/v1/help">帮助文档</a> · <a href="#/v1/dev">开发文档</a> · <a href="#/v1/api">API 接口文档</a></td>
  </tr>
</table>
<div class="doc-note">后续大版本会在此新增章节，历史版本文档持续保留，方便你按正在运行的版本查阅。</div>

<h2 id="which">我该看哪一篇？</h2>
<table class="doc-table">
  <tr><th>如果你的角色是…</th><th>请阅读</th></tr>
  <tr><td>使用应用（聊天、通话、群组、栏目）</td><td><a href="#/v1/help">V1 · 帮助文档</a></td></tr>
  <tr><td>部署服务端与各端客户端</td><td><a href="#/v1/dev">V1 · 开发文档</a></td></tr>
  <tr><td>对接 REST 接口或实时 Hub</td><td><a href="#/v1/api">V1 · API 接口文档</a></td></tr>
</table>

<h2 id="plans">各套餐功能范围</h2>
<p>产品是同一套代码，套餐决定启用哪些能力以及交付形式。</p>
<table class="doc-table">
  <tr><th></th><th>免费版</th><th>专业版</th><th>企业版</th></tr>
  <tr><td>Web 客户端</td><td>✓</td><td>✓</td><td>✓</td></tr>
  <tr><td>Android / iOS 客户端</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>桌面客户端</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>语音 / 视频通话</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>功能扩展（小程序容器 / 插件）</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>管理后台</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>交付形式</td><td>编译版</td><td>编译版</td><td>完整源码</td></tr>
  <tr><td>二次开发</td><td>—</td><td>—</td><td>✓</td></tr>
</table>
<div class="doc-note">所有套餐都部署在<strong>你自己的服务器</strong>上：消息、文件与用户数据只存在你自己的 PostgreSQL 数据库中。</div>
`,

  'v1.help': `
<h1>V1 — 帮助文档</h1>
<p class="lead">面向最终用户的 AnyChat V1 使用说明：账号、好友、消息、通话、群组、栏目、小程序与管理后台。
你的套餐未包含的功能见 <a href="#availability">§8 各套餐可用范围</a>。</p>

<h2 id="start">1. 快速开始</h2>
<table class="doc-table">
  <tr><th>平台</th><th>获取方式</th></tr>
  <tr><td>Web</td><td>打开管理员提供的网址，无需安装</td></tr>
  <tr><td>Android</td><td>在下载页获取 APK；安装时允许「来自此来源的应用」</td></tr>
  <tr><td>iOS</td><td>通过 TestFlight 或已签名 IPA 安装</td></tr>
  <tr><td>Windows / macOS</td><td>运行桌面安装包</td></tr>
</table>
<ol>
  <li>打开应用点击<strong>注册</strong>：填写用户名、昵称与密码。</li>
  <li>注册成功后自动登录，无需邮箱验证。</li>
  <li>若登录页没有服务器地址输入框，说明地址已由配置链接预置。</li>
</ol>
<div class="doc-note">Android 包按 CPU 架构拆分（推荐 <code>arm64-v8a</code>）。若更换过签名 key，请先卸载旧版本。</div>

<h2 id="config">2. 服务器地址与配置链接</h2>
<p>既可在登录页「设置」手动填写地址，也可用「扫一扫」（登录页或发现页）扫描配置链接：</p>
<pre><code>fairchat://config?api=https://chat.example.com&amp;name=AnyChat&amp;logo=https://…/logo.png&amp;download=https://…/download/</code></pre>
<table class="doc-table">
  <tr><th>参数</th><th>含义</th></tr>
  <tr><td><code>api</code></td><td>服务器地址；设置后隐藏地址输入框</td></tr>
  <tr><td><code>name</code></td><td>应用内显示的品牌名</td></tr>
  <tr><td><code>logo</code></td><td>Logo 图片地址（<code>http(s)://</code>）</td></tr>
  <tr><td><code>download</code></td><td>下载页地址（绝对地址）</td></tr>
</table>
<p>配置保存在本机，下次启动自动沿用。</p>

<h2 id="friends">3. 好友与通讯录</h2>
<ul>
  <li><strong>搜索添加</strong>：通讯录 → 添加好友 → 输入用户名或昵称 → 发送请求。</li>
  <li><strong>二维码</strong>：打开「我的二维码」被扫，或在「扫一扫」中扫对方。</li>
  <li><strong>好友请求</strong>：收到的请求在通讯录入口显示数量角标，可「接受」或「忽略」。</li>
  <li><strong>删除好友</strong>：长按联系人 → 删除好友。</li>
</ul>

<h2 id="chat">4. 消息</h2>
<ul>
  <li><strong>文字</strong>：输入发送，对方收到顶部横幅与提示音。</li>
  <li><strong>图片</strong>：附件 → 图片，内联预览。</li>
  <li><strong>文件</strong>：附件 → 文件，对方收到下载链接。</li>
  <li><strong>语音</strong>：按住麦克风录制，松手发送。</li>
  <li><strong>引用回复</strong>：长按消息 → 回复。</li>
  <li><strong>撤回</strong>：长按自己的消息 → 撤回。</li>
  <li><strong>历史消息</strong>：向上滚动加载更早内容。</li>
</ul>

<h2 id="groups">5. 群组</h2>
<p>通讯录 → 创建群 → 选择成员。群消息、图片与文件的使用方式与私聊一致，群主可在群资料中添加或移除成员。</p>

<h2 id="calls">6. 语音与视频通话</h2>
<ul>
  <li><strong>发起</strong>：聊天页点击电话图标（语音）或摄像图标（视频）。</li>
  <li><strong>接听</strong>：来电页弹出并循环响铃，直到接听、拒接或对方挂断。</li>
  <li><strong>权限</strong>：首次通话需授予麦克风（视频还需摄像头）权限。</li>
  <li><strong>结束</strong>：点击红色挂断按钮；按系统返回键也会结束通话，铃声随之停止。</li>
</ul>
<p>通话为点对点连接。严格 NAT 环境需要部署 TURN 服务（见开发文档）。</p>

<h2 id="discover">7. 发现页、小程序与管理后台</h2>
<ul>
  <li><strong>发现页</strong>：按栏目组织的内容流，由管理后台配置。</li>
  <li><strong>小程序</strong>：业务 H5 页面在内置容器中打开，通过 JS Bridge 与客户端交互。</li>
  <li><strong>管理后台</strong>：用户、角色权限、审计日志、功能开关、栏目与服务账号。</li>
</ul>

<h2 id="availability">8. 各套餐可用范围</h2>
<table class="doc-table">
  <tr><th>功能</th><th>免费版</th><th>专业版</th><th>企业版</th></tr>
  <tr><td>Web 客户端</td><td>✓</td><td>✓</td><td>✓</td></tr>
  <tr><td>Android / iOS / 桌面客户端</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>聊天、图片、文件、语音</td><td>✓</td><td>✓</td><td>✓</td></tr>
  <tr><td>语音 / 视频通话</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>小程序与功能扩展</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>管理后台与栏目</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>品牌化定制</td><td>—</td><td>—</td><td>✓</td></tr>
</table>

<h2 id="settings">9. 设置</h2>
<ul>
  <li>主题：浅色 / 深色 / 跟随系统，并支持皮肤配色。</li>
  <li>语言：简体中文、繁體中文、English、Español。</li>
  <li>服务器地址覆盖与配置链接导入。</li>
  <li>检查更新（Android 侧载包支持应用内升级）。</li>
</ul>

<h2 id="faq">10. 常见问题</h2>
<p><strong>无法登录。</strong>检查服务器地址（登录页 → 设置），地址错误或不可达是最常见原因。</p>
<p><strong>没有提示音。</strong>浏览器在用户交互前禁止播放声音，点击页面任意位置后即可。</p>
<p><strong>通话接通但没有声音。</strong>检查麦克风权限，并联系管理员确认 TURN 服务可达。</p>
<p><strong>提示「服务器不支持通话功能」。</strong>服务端版本过旧，请升级 ChatServer。</p>
<p><strong>扫码打不开摄像头。</strong>Web 端需 HTTPS 或 <code>localhost</code>，HTTP 环境请改为粘贴配置链接。</p>
<p><strong>联系人一直显示离线。</strong>在线状态通过 WebSocket 推送，连接断开期间状态会滞后。</p>
`,

  'v1.dev': `
<h1>V1 — 开发文档</h1>
<p class="lead">AnyChat V1 的部署、构建、集成与（企业版）源码定制说明。接口细节见
<a href="#/v1/api">API 接口文档</a>。</p>

<h2 id="arch">1. 架构</h2>
<pre><code>客户端（Flutter：Web / Android / iOS / Windows / macOS）
   │  HTTPS  REST /api/...
   │  WSS    SignalR /hubs/chat
   ▼
ASP.NET Core 10（REST + SignalR Hub + 静态文件 /files/...）
   │  EF Core
   ▼
PostgreSQL

管理后台（Flutter）──► ChatServer（/api/admin）</code></pre>

<h2 id="ports">2. 端口</h2>
<table class="doc-table">
  <tr><th>组件</th><th>端口</th><th>协议</th></tr>
  <tr><td>ChatServer（REST + SignalR + /files）</td><td>5298</td><td>HTTP/HTTPS、WebSocket</td></tr>
  <tr><td>PostgreSQL</td><td>5432</td><td>TCP</td></tr>
  <tr><td>TURN / STUN（通话）</td><td>3478、5349 及中继端口段</td><td>UDP/TCP</td></tr>
</table>

<h2 id="req">3. 环境要求</h2>
<ul>
  <li>.NET 10 运行时（仅源码构建时需要 SDK）</li>
  <li>PostgreSQL 14+</li>
  <li>Nginx 或任意静态托管（用于 Web 客户端）</li>
  <li>源码构建客户端时需要 Flutter 3.x</li>
</ul>

<h2 id="install">4. 启动整套服务</h2>
<pre><code># 数据库
cd server &amp;&amp; docker compose up -d

# 聊天服务端
cd ChatServer &amp;&amp; dotnet publish -c Release -o out &amp;&amp; cd out &amp;&amp; dotnet ChatServer.dll
</code></pre>
<p>建议用 systemd 或容器托管，并设置 <code>ASPNETCORE_ENVIRONMENT=Production</code>。</p>

<h2 id="config">5. 配置</h2>
<table class="doc-table">
  <tr><th>配置键</th><th>环境变量</th><th>用途</th></tr>
  <tr><td><code>ConnectionStrings:Default</code></td><td><code>ConnectionStrings__Default</code></td><td>PostgreSQL</td></tr>
  <tr><td><code>Jwt:Key</code></td><td><code>Jwt__Key</code></td><td>令牌签名，≥32 字符</td></tr>
  <tr><td><code>Cors:Origins</code></td><td><code>Cors__Origins</code></td><td>允许的 Web 来源（不支持通配）</td></tr>
  <tr><td><code>SeedAdmin:Password</code></td><td><code>SeedAdmin__Password</code></td><td>初始管理员密码</td></tr>
  <tr><td><code>Urls</code></td><td><code>Urls</code></td><td>如 <code>http://0.0.0.0:5298</code></td></tr>
</table>
<div class="doc-note">非 Development 环境下，密钥缺失或仍是占位值会<strong>启动即失败</strong>，这是刻意的安全设计。</div>
<p>健康检查：<code>curl {base}/health</code> 返回 <code>Healthy</code>（同时检查进程与数据库）。</p>

<h2 id="nginx">6. Nginx 反向代理</h2>
<pre><code>server {
  listen 443 ssl;
  server_name chat.example.com;

  location / { root /var/www/anychat-web; try_files $uri /index.html; }

  location /api/   { proxy_pass http://127.0.0.1:5298; }
  location /files/ { proxy_pass http://127.0.0.1:5298; }

  location /hubs/ {
    proxy_pass http://127.0.0.1:5298;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_read_timeout 3600s;
  }

  client_max_body_size 100m;   # 文件上传大小
}</code></pre>

<h2 id="webrtc">7. 通话：STUN / TURN</h2>
<p>多数网络使用公共 STUN 即可；对称 NAT 或企业防火墙环境请部署 coturn，并在管理后台功能设置中填写 ICE 配置：</p>
<pre><code>{
  "iceServers": [
    { "urls": ["stun:stun.l.google.com:19302"] },
    { "urls": ["turn:turn.example.com:3478"],
      "username": "anychat",
      "credential": "secret" }
  ]
}</code></pre>

<h2 id="clients">8. 构建客户端</h2>
<pre><code># Web
flutter build web --dart-define=API_BASE=https://chat.example.com \\
                  --dart-define=DOWNLOAD_URL=https://example.com/download/

# Android（按 ABI 分包）
flutter build apk --split-per-abi --dart-define=API_BASE=https://chat.example.com

# iOS / 桌面端同理（需对应工具链与证书）</code></pre>

<h2 id="updates">9. 更新分发</h2>
<p>在下载页托管 <code>version.json</code> 与 APK，Android 客户端启动时检查，<code>versionCode</code> 变大则提示更新。</p>
<pre><code>{
  "versionCode": 1788653049,
  "versionName": "0.1.35",
  "force": false,
  "changelog": "修复若干问题",
  "apk": {
    "arm64-v8a": "chat-arm64-v8a.apk",
    "armeabi-v7a": "chat-armeabi-v7a.apk",
    "x86_64": "chat-x86_64.apk"
  }
}</code></pre>

<h2 id="source">10. 源码结构（企业版）</h2>
<pre><code>server/
└─ ChatServer/     # 单一服务：REST API + SignalR Hub + 管理端 API（Controllers / Hubs / Services / Admin / Data）
client/
├─ flutter_chat/   # 用户端（Flutter，全平台）
└─ flutter_admin/  # 管理端应用

client/flutter_chat/lib/
├─ main.dart       # ProviderScope、Hub 订阅、更新检查
├─ router.dart     # go_router 路由
├─ config/         # AppConfig（dart-define）、constants（Hub 名称）
├─ data/           # api_client.dart（Dio）、signalr_client.dart
├─ models/         # DTO
├─ providers/      # Riverpod：auth、chat、call、conversations、notifications…
├─ pages/          # 页面
├─ widgets/        # 通用组件
└─ services/       # webrtc、sound、app update…</code></pre>

<h2 id="extend">11. 扩展开发（企业版）</h2>
<ul>
  <li><strong>REST 接口</strong>：在 <code>Controllers/</code> 新增控制器并注册服务，涉及存储时新增 EF 迁移。</li>
  <li><strong>实时能力</strong>：扩展 <code>ChatHub.cs</code>，并保持方法名与客户端 <code>lib/config/constants.dart</code> 一致。</li>
  <li><strong>页面</strong>：在 <code>pages/</code> 新增，并在 <code>router.dart</code> 注册路由。</li>
  <li><strong>小程序</strong>：托管 H5 页面，用内置容器打开，通过 JS Bridge 调用 toast 与导航。</li>
</ul>
<pre><code>dotnet ef migrations add AddFeatureX
dotnet ef database update</code></pre>

<h2 id="whitelabel">12. 品牌化定制</h2>
<table class="doc-table">
  <tr><th>项目</th><th>方式</th></tr>
  <tr><td>应用名</td><td><code>app_name</code> 或配置链接 <code>name</code></td></tr>
  <tr><td>Logo 与主题</td><td>配置链接 <code>logo</code>；<code>theme.dart</code>、<code>app_colors.dart</code></td></tr>
  <tr><td>服务器地址</td><td><code>--dart-define=API_BASE=…</code> 或配置链接 <code>api</code></td></tr>
  <tr><td>包名 / Bundle ID</td><td>Android <code>applicationId</code>、iOS <code>PRODUCT_BUNDLE_IDENTIFIER</code></td></tr>
  <tr><td>下载与更新</td><td><code>--dart-define=DOWNLOAD_URL=…</code> + 托管 <code>version.json</code></td></tr>
</table>

<h2 id="ops">13. 运维</h2>
<ul>
  <li>健康检查：每个服务 <code>GET /health</code>（同时检查数据库）。</li>
  <li>备份：每日 <code>pg_dump</code> + 备份 <code>/files</code> 上传目录。</li>
  <li>迁移：生产建议使用 <code>dotnet ef migrations add</code> + <code>database update</code>，而非 <code>EnsureCreated</code>。</li>
  <li>日志：关注 Hub 反复重连与 TURN 分配失败。</li>
</ul>

<h2 id="trouble">14. 故障排查</h2>
<ul>
  <li><code>/health</code> 不健康 → 数据库不可达或连接串错误。</li>
  <li>浏览器报 CORS 错误 → 把站点来源加入 <code>Cors:Origins</code>。</li>
  <li>消息收不到 → 代理未放行 WebSocket 升级（见 <code>/hubs/</code> 配置）。</li>
  <li>启动即退出 → <code>Jwt:Key</code> 缺失或仍是占位值。</li>
  <li>NAT 环境通话失败 → TURN 未配置或端口未放行。</li>
</ul>
`,

  'v1.api': `
<h1>V1 — API 接口文档</h1>
<p class="lead">AnyChat V1 服务端完整接口契约：REST 接口、SignalR Hub、数据结构与错误码。
下文用 <code>{base}</code> 表示服务器地址（如 <code>https://chat.example.com</code>）。</p>

<h2 id="conventions">1. 通用约定</h2>
<ul>
  <li><strong>鉴权</strong>：除注册与登录外，所有接口都需带 <code>Authorization: Bearer &lt;token&gt;</code>。</li>
  <li><strong>内容类型</strong>：<code>application/json</code>；文件上传用 <code>multipart/form-data</code>。</li>
  <li><strong>时间</strong>：UTC ISO-8601（如 <code>2026-09-08T12:34:56Z</code>）。</li>
  <li><strong>枚举</strong>：以字符串序列化 —— <code>Private</code>/<code>Group</code>、<code>Text</code>/<code>Image</code>/<code>File</code>/<code>Voice</code>、<code>Voice</code>/<code>Video</code>。</li>
  <li><strong>错误</strong>：Hub 调用失败抛出带错误码前缀的 <code>HubException</code>（见第 13 节）。</li>
</ul>

<h2 id="auth">2. 认证接口</h2>
<table class="doc-table">
  <tr><th>方法</th><th>路径</th><th>鉴权</th><th>请求 → 响应</th></tr>
  <tr><td>POST</td><td><code>/api/auth/register</code></td><td>—</td><td><code>{userName, password, nickName}</code> → <code>{token, user}</code></td></tr>
  <tr><td>POST</td><td><code>/api/auth/login</code></td><td>—</td><td><code>{userName, password}</code> → <code>{token, user}</code></td></tr>
  <tr><td>POST</td><td><code>/api/auth/change-password</code></td><td>✓</td><td>修改当前用户密码</td></tr>
</table>
<pre><code>curl -X POST {base}/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"userName":"alice","password":"123456"}'

# → {"token":"eyJhbGciOi...","user":{"id":"...","userName":"alice",...}}</code></pre>

<h2 id="users">3. 用户接口</h2>
<table class="doc-table">
  <tr><th>方法</th><th>路径</th><th>说明</th></tr>
  <tr><td>GET</td><td><code>/api/users/me</code></td><td>当前登录用户</td></tr>
  <tr><td>GET</td><td><code>/api/users/search?q=</code></td><td>按用户名 / 昵称搜索（排除自己）</td></tr>
  <tr><td>GET</td><td><code>/api/users/online</code></td><td>在线用户 ID</td></tr>
  <tr><td>GET</td><td><code>/api/users/me/card</code></td><td>我的名片（二维码内容）</td></tr>
  <tr><td>GET</td><td><code>/api/users/{id}/profile</code></td><td>用户公开资料</td></tr>
  <tr><td>GET</td><td><code>/api/users/service-list</code></td><td>服务账号列表</td></tr>
</table>

<h2 id="friends">4. 好友接口</h2>
<table class="doc-table">
  <tr><th>方法</th><th>路径</th><th>说明</th></tr>
  <tr><td>POST</td><td><code>/api/friends/request</code></td><td>请求体 <code>"&lt;friendId&gt;"</code>，发送好友请求</td></tr>
  <tr><td>GET</td><td><code>/api/friends/requests</code></td><td>我收到的待处理请求</td></tr>
  <tr><td>POST</td><td><code>/api/friends/accept</code></td><td>请求体 <code>"&lt;friendId&gt;"</code>，接受请求</td></tr>
  <tr><td>GET</td><td><code>/api/friends</code></td><td>我的好友列表</td></tr>
  <tr><td>DELETE</td><td><code>/api/friends/{friendId}</code></td><td>删除好友</td></tr>
</table>

<h2 id="groups">5. 群组接口</h2>
<table class="doc-table">
  <tr><th>方法</th><th>路径</th><th>说明</th></tr>
  <tr><td>POST</td><td><code>/api/groups</code></td><td><code>{name, memberIds}</code>，建群（自己为 Owner）</td></tr>
  <tr><td>GET</td><td><code>/api/groups</code></td><td>我所在的群列表</td></tr>
  <tr><td>GET</td><td><code>/api/groups/{id}</code></td><td>群详情</td></tr>
</table>

<h2 id="messages">6. 消息接口</h2>
<table class="doc-table">
  <tr><th>方法</th><th>路径</th><th>说明</th></tr>
  <tr><td>POST</td><td><code>/api/messages/private</code></td><td>通过 REST 发送私聊（备用通道）</td></tr>
  <tr><td>GET</td><td><code>/api/messages/private/{friendId}?before=ISO&amp;count=30</code></td><td>私聊历史（按时间升序）</td></tr>
  <tr><td>GET</td><td><code>/api/messages/group/{groupId}?before=ISO&amp;count=30</code></td><td>群聊历史</td></tr>
  <tr><td>POST</td><td><code>/api/messages/hide/{messageId}</code></td><td>对自己隐藏某条消息</td></tr>
  <tr><td>POST</td><td><code>/api/messages/clear-all</code></td><td>清空我的消息</td></tr>
</table>

<h2 id="conversations">7. 会话接口</h2>
<p><code>GET /api/conversations</code>：返回好友与群，各带最后一条消息、未读数、在线状态与时间，按时间倒序。</p>

<h2 id="files">8. 文件接口</h2>
<pre><code>curl -X POST {base}/api/files/upload \\
  -H "Authorization: Bearer &lt;token&gt;" \\
  -F "file=@photo.png"

# → {"url":"/files/xxx.png","contentType":"image/png","size":12345}</code></pre>
<div class="doc-note">媒体消息两步走：先上传拿到 <code>url</code>，再通过 Hub 以
<code>type="Image"|"File"|"Voice"</code> 且 <code>mediaUrl=&lt;url&gt;</code> 发送；文本用
<code>type="Text"</code> 且 <code>mediaUrl=null</code>。</div>

<h2 id="discover">9. 发现页与功能配置</h2>
<table class="doc-table">
  <tr><th>方法</th><th>路径</th><th>说明</th></tr>
  <tr><td>GET</td><td><code>/api/discover</code></td><td>发现页栏目与内容</td></tr>
  <tr><td>GET</td><td><code>/api/discover/pinned</code></td><td>置顶内容</td></tr>
  <tr><td>GET</td><td><code>/api/discover/pinned-meta</code></td><td>置顶内容元信息</td></tr>
  <tr><td>GET</td><td><code>/api/features</code></td><td>功能开关与运行配置（含 WebRTC ICE）</td></tr>
</table>

<h2 id="hub">10. SignalR Hub</h2>
<p>连接地址 <code>{base}/hubs/chat</code>，JWT 通过 <code>access_token</code> 查询参数传递。
连接成功后，服务端自动把该连接加入当前用户所在会话的 SignalR 分组。</p>

<h3 id="hub-methods">10.1 客户端 → 服务端</h3>
<table class="doc-table">
  <tr><th>方法</th><th>参数</th><th>说明</th></tr>
  <tr><td><code>SendPrivateMessage</code></td><td><code>(toUserId, content, type?, mediaUrl?)</code></td><td>发私聊，双方须为好友</td></tr>
  <tr><td><code>SendGroupMessage</code></td><td><code>(groupId, content, type?, mediaUrl?)</code></td><td>发群消息，须为群成员</td></tr>
  <tr><td><code>RecallMessage</code></td><td><code>(messageId)</code></td><td>撤回自己的消息</td></tr>
  <tr><td><code>SendTyping</code></td><td><code>(toUserId, isTyping)</code></td><td>正在输入状态</td></tr>
  <tr><td><code>JoinGroup</code> / <code>LeaveGroup</code></td><td><code>(groupId)</code></td><td>加入 / 退出群频道</td></tr>
  <tr><td><code>CallUser</code></td><td><code>(toUserId, type)</code></td><td>发起通话，返回 <code>sessionId</code></td></tr>
  <tr><td><code>AcceptCall</code> / <code>RejectCall</code> / <code>EndCall</code></td><td><code>(sessionId)</code></td><td>通话控制</td></tr>
  <tr><td><code>SendOffer</code> / <code>SendAnswer</code></td><td><code>(sessionId, sdp)</code></td><td>WebRTC SDP 交换</td></tr>
  <tr><td><code>SendIceCandidate</code></td><td><code>(sessionId, candidate)</code></td><td>ICE 候选（JSON 字符串）</td></tr>
</table>

<h3 id="hub-events">10.2 服务端 → 客户端</h3>
<table class="doc-table">
  <tr><th>事件</th><th>载荷</th><th>说明</th></tr>
  <tr><td><code>ReceiveMessage</code></td><td><code>MessageDto</code></td><td>新消息（私聊同时回推发送者）</td></tr>
  <tr><td><code>MessageRecalled</code></td><td><code>MessageDto</code></td><td>消息被撤回</td></tr>
  <tr><td><code>OnTyping</code></td><td><code>userId</code></td><td>对方正在输入</td></tr>
  <tr><td><code>UserOnline</code> / <code>UserOffline</code></td><td><code>userId</code></td><td>在线状态变化</td></tr>
  <tr><td><code>ReceiveFriendRequest</code></td><td><code>FriendRequestDto</code></td><td>收到好友请求</td></tr>
  <tr><td><code>IncomingCall</code></td><td><code>IncomingCallDto</code></td><td>来电</td></tr>
  <tr><td><code>CallAccepted</code></td><td><code>CallAcceptedDto</code></td><td>对方已接听</td></tr>
  <tr><td><code>CallEnded</code></td><td><code>CallEndedDto</code></td><td>通话结束（带原因）</td></tr>
  <tr><td><code>ReceiveOffer</code> / <code>ReceiveAnswer</code></td><td><code>CallSdpDto</code></td><td>SDP 交换</td></tr>
  <tr><td><code>ReceiveIceCandidate</code></td><td><code>CallIceCandidateDto</code></td><td>ICE 候选</td></tr>
</table>

<h2 id="dto">11. 数据结构</h2>
<pre><code>UserDto            { id, userName, nickName, avatarUrl, isOnline, lastSeenAt }
MessageDto         { id, conversationId, senderId, senderName, senderAvatar,
                     chatType: "Private"|"Group", content,
                     type: "Text"|"Image"|"File"|"Voice", mediaUrl, createdAt,
                     recalled, replyToId?, replyPreview?, replyType?, replySenderName? }
FriendRequestDto   { id, userId, userName, nickName, avatarUrl, createdAt }
GroupDto           { id, name, avatarUrl, memberCount, createdAt }
ContactDto         { id, name, avatarUrl, isOnline, lastMessage, lastMessageAt, isGroup }
AuthResult         { token, user: UserDto }
FileUploadResult   { url, contentType, size }
IncomingCallDto    { sessionId, callerId, callerName, callerAvatar, type: "Voice"|"Video" }
CallAcceptedDto    { sessionId, callerId, calleeId, type }
CallEndedDto       { sessionId, reason }
CallSdpDto         { sessionId, sdp }
CallIceCandidateDto{ sessionId, candidate }</code></pre>
<p><code>CallEndReason</code>：<code>Declined</code> · <code>Busy</code> · <code>Timeout</code> · <code>HangUp</code> · <code>Offline</code> · <code>Error</code>。</p>
<p><strong>会话 ID</strong>（可本地推算）：私聊 <code>p_{用户A}_{用户B}</code>（两个 ID 按字符串升序拼接）；群聊 <code>g_{群ID}</code>。</p>

<h2 id="flows">12. 典型调用流程</h2>
<pre><code># 发消息
1. POST /api/auth/login                  → token
2. 连接 /hubs/chat?access_token=token
3. invoke("SendPrivateMessage", toUserId, "hi", "Text", null)
4. on("ReceiveMessage")                  → MessageDto

# 发图片
1. POST /api/files/upload (multipart)    → { url }
2. invoke("SendPrivateMessage", toUserId, "", "Image", url)

# 通话信令
主叫: invoke("CallUser", toUserId, "Video") → sessionId
被叫: on("IncomingCall") → invoke("AcceptCall", sessionId)
主叫: on("CallAccepted") → createOffer → invoke("SendOffer", sessionId, sdp)
被叫: on("ReceiveOffer") → setRemote → createAnswer → invoke("SendAnswer", …)
双方: 通过 SendIceCandidate / ReceiveIceCandidate 交换 ICE
任一: invoke("EndCall", sessionId) → on("CallEnded")</code></pre>

<h2 id="errors">13. 错误码</h2>
<table class="doc-table">
  <tr><th>错误码</th><th>含义</th><th>处理建议</th></tr>
  <tr><td><code>E_FRIEND_REQUIRED</code></td><td>双方还不是好友</td><td>提示先添加好友</td></tr>
  <tr><td><code>E_TARGET_NOT_FOUND</code></td><td>用户或群不存在</td><td>刷新联系人 / 群列表</td></tr>
  <tr><td><code>E_BAD_TARGET</code></td><td>ID 格式错误</td><td>检查 ID 格式</td></tr>
  <tr><td><code>E_EMPTY</code></td><td>空消息</td><td>禁止发送空内容</td></tr>
  <tr><td><code>E_SERVER</code></td><td>服务端异常</td><td>重试并查看服务端日志</td></tr>
</table>
<p>REST 使用标准 HTTP 状态码；Hub 失败以 <code>HubException</code> 抛出，消息以错误码开头，后跟 <code>: </code> 与可读文本。</p>
`,
};
