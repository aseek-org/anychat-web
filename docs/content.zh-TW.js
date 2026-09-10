/* AnyChat 文件 — 繁體中文內容（HTML 片段） */
window.DOC_ZH_TW = {
  overview: `
<h1>文件中心</h1>
<p class="lead">AnyChat 文件依<strong>產品大版本</strong>組織，目前大版本為 <strong>V1</strong>。請選擇文件類型：
<strong>幫助文件</strong>、<strong>開發文件</strong>或 <strong>API 介面文件</strong>。</p>

<h2 id="versions">版本</h2>
<table class="doc-table">
  <tr><th>版本</th><th>狀態</th><th>文件</th></tr>
  <tr>
    <td><strong>V1</strong></td>
    <td>目前版本</td>
    <td><a href="#/v1/help">幫助文件</a> · <a href="#/v1/dev">開發文件</a> · <a href="#/v1/api">API 介面文件</a></td>
  </tr>
</table>
<div class="doc-note">後續大版本會於此新增章節，歷史版本文件持續保留，方便依實際運行的版本查閱。</div>

<h2 id="which">我該看哪一篇？</h2>
<table class="doc-table">
  <tr><th>如果你的角色是…</th><th>請閱讀</th></tr>
  <tr><td>使用應用程式（聊天、通話、群組、欄目）</td><td><a href="#/v1/help">V1 · 幫助文件</a></td></tr>
  <tr><td>部署伺服端與各端用戶端</td><td><a href="#/v1/dev">V1 · 開發文件</a></td></tr>
  <tr><td>對接 REST 介面或即時 Hub</td><td><a href="#/v1/api">V1 · API 介面文件</a></td></tr>
</table>

<h2 id="plans">各方案功能範圍</h2>
<p>產品是同一套程式碼，方案決定啟用哪些能力以及交付形式。</p>
<table class="doc-table">
  <tr><th></th><th>免費版</th><th>專業版</th><th>企業版</th></tr>
  <tr><td>Web 用戶端</td><td>✓</td><td>✓</td><td>✓</td></tr>
  <tr><td>Android / iOS 用戶端</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>桌面用戶端</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>語音 / 視訊通話</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>功能擴充（小程式容器 / 外掛）</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>管理後臺</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>交付形式</td><td>編譯版</td><td>編譯版</td><td>完整原始碼</td></tr>
  <tr><td>二次開發</td><td>—</td><td>—</td><td>✓</td></tr>
</table>
<div class="doc-note">所有方案都部署在<strong>你自己的伺服器</strong>上：訊息、檔案與使用者資料只存在你自己的 PostgreSQL 資料庫中。</div>
`,

  'v1.help': `
<h1>V1 — 幫助文件</h1>
<p class="lead">面向終端使用者的 AnyChat V1 使用說明：帳號、好友、訊息、通話、群組、欄目、小程式與管理後臺。
你的方案未包含的功能見 <a href="#availability">§8 各方案可用範圍</a>。</p>

<h2 id="start">1. 快速開始</h2>
<table class="doc-table">
  <tr><th>平臺</th><th>取得方式</th></tr>
  <tr><td>Web</td><td>開啟管理員提供的網址，無需安裝</td></tr>
  <tr><td>Android</td><td>在下載頁取得 APK；安裝時允許「來自此來源的應用程式」</td></tr>
  <tr><td>iOS</td><td>透過 TestFlight 或已簽章 IPA 安裝</td></tr>
  <tr><td>Windows / macOS</td><td>執行桌面安裝檔</td></tr>
</table>
<ol>
  <li>開啟應用程式點選<strong>註冊</strong>：填寫使用者名稱、暱稱與密碼。</li>
  <li>註冊成功後自動登入，無需信箱驗證。</li>
  <li>若登入頁沒有伺服器位址輸入框，表示位址已由設定連結預先寫入。</li>
</ol>
<div class="doc-note">Android 套件依 CPU 架構拆分（建議 <code>arm64-v8a</code>）。若更換過簽章 key，請先移除舊版本。</div>

<h2 id="config">2. 伺服器位址與設定連結</h2>
<p>可在登入頁「設定」手動填寫位址，也可用「掃一掃」（登入頁或發現頁）掃描設定連結：</p>
<pre><code>fairchat://config?api=https://chat.example.com&amp;name=AnyChat&amp;logo=https://…/logo.png&amp;download=https://…/download/</code></pre>
<table class="doc-table">
  <tr><th>參數</th><th>含義</th></tr>
  <tr><td><code>api</code></td><td>伺服器位址；設定後隱藏位址輸入框</td></tr>
  <tr><td><code>name</code></td><td>應用程式內顯示的品牌名</td></tr>
  <tr><td><code>logo</code></td><td>Logo 圖片位址（<code>http(s)://</code>）</td></tr>
  <tr><td><code>download</code></td><td>下載頁位址（絕對位址）</td></tr>
</table>
<p>設定保存於本機，下次啟動自動沿用。</p>

<h2 id="friends">3. 好友與通訊錄</h2>
<ul>
  <li><strong>搜尋加入</strong>：通訊錄 → 加入好友 → 輸入使用者名稱或暱稱 → 送出邀請。</li>
  <li><strong>條碼</strong>：開啟「我的條碼」被掃，或在「掃一掃」中掃對方。</li>
  <li><strong>好友邀請</strong>：收到的邀請在通訊錄入口顯示數量角標，可「接受」或「忽略」。</li>
  <li><strong>刪除好友</strong>：長按聯絡人 → 刪除好友。</li>
</ul>

<h2 id="chat">4. 訊息</h2>
<ul>
  <li><strong>文字</strong>：輸入送出，對方收到頂部橫幅與提示音。</li>
  <li><strong>圖片</strong>：附件 → 圖片，內嵌預覽。</li>
  <li><strong>檔案</strong>：附件 → 檔案，對方收到下載連結。</li>
  <li><strong>語音</strong>：按住麥克風錄製，放開送出。</li>
  <li><strong>引用回覆</strong>：長按訊息 → 回覆。</li>
  <li><strong>收回</strong>：長按自己的訊息 → 收回。</li>
  <li><strong>歷史訊息</strong>：向上捲動載入更早內容。</li>
</ul>

<h2 id="groups">5. 群組</h2>
<p>通訊錄 → 建立群組 → 選擇成員。群組訊息、圖片與檔案的使用方式與私聊一致，群主可在群組資料中新增或移除成員。</p>

<h2 id="calls">6. 語音與視訊通話</h2>
<ul>
  <li><strong>撥打</strong>：聊天頁點選電話圖示（語音）或攝影機圖示（視訊）。</li>
  <li><strong>接聽</strong>：來電頁彈出並循環響鈴，直到接聽、拒接或對方掛斷。</li>
  <li><strong>權限</strong>：首次通話需授予麥克風（視訊還需相機）權限。</li>
  <li><strong>結束</strong>：點選紅色掛斷鈕；按系統返回鍵也會結束通話，鈴聲隨之停止。</li>
</ul>
<p>通話為點對點連線。嚴格 NAT 環境需要部署 TURN 服務（見開發文件）。</p>

<h2 id="discover">7. 發現頁、小程式與管理後臺</h2>
<ul>
  <li><strong>發現頁</strong>：依欄目組織的內容流，由管理後臺設定。</li>
  <li><strong>小程式</strong>：業務 H5 頁面在內建容器中開啟，透過 JS Bridge 與用戶端互動。</li>
  <li><strong>管理後臺</strong>：使用者、角色權限、稽核紀錄、功能開關、欄目與服務帳號。</li>
</ul>

<h2 id="availability">8. 各方案可用範圍</h2>
<table class="doc-table">
  <tr><th>功能</th><th>免費版</th><th>專業版</th><th>企業版</th></tr>
  <tr><td>Web 用戶端</td><td>✓</td><td>✓</td><td>✓</td></tr>
  <tr><td>Android / iOS / 桌面用戶端</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>聊天、圖片、檔案、語音</td><td>✓</td><td>✓</td><td>✓</td></tr>
  <tr><td>語音 / 視訊通話</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>小程式與功能擴充</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>管理後臺與欄目</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>品牌化客製</td><td>—</td><td>—</td><td>✓</td></tr>
</table>

<h2 id="settings">9. 設定</h2>
<ul>
  <li>主題：淺色 / 深色 / 跟隨系統，並支援皮膚配色。</li>
  <li>語言：简体中文、繁體中文、English、Español。</li>
  <li>伺服器位址覆寫與設定連結匯入。</li>
  <li>檢查更新（Android 側載套件支援應用程式內升級）。</li>
</ul>

<h2 id="faq">10. 常見問題</h2>
<p><strong>無法登入。</strong>檢查伺服器位址（登入頁 → 設定），位址錯誤或無法連線是最常見原因。</p>
<p><strong>沒有提示音。</strong>瀏覽器在使用者互動前禁止播放聲音，點選頁面任意位置後即可。</p>
<p><strong>通話接通但沒有聲音。</strong>檢查麥克風權限，並聯絡管理員確認 TURN 服務可連線。</p>
<p><strong>提示「伺服器不支援通話功能」。</strong>伺服端版本過舊，請升級 ChatServer。</p>
<p><strong>掃碼打不開相機。</strong>Web 端需 HTTPS 或 <code>localhost</code>，HTTP 環境請改為貼上設定連結。</p>
<p><strong>聯絡人一直顯示離線。</strong>線上狀態透過 WebSocket 推送，連線中斷期間狀態會延遲。</p>
`,

  'v1.dev': `
<h1>V1 — 開發文件</h1>
<p class="lead">AnyChat V1 的部署、建置、整合與（企業版）原始碼客製說明。介面細節見
<a href="#/v1/api">API 介面文件</a>。</p>

<h2 id="arch">1. 架構</h2>
<pre><code>用戶端（Flutter：Web / Android / iOS / Windows / macOS）
   │  HTTPS  REST /api/...
   │  WSS    SignalR /hubs/chat
   ▼
ASP.NET Core 10（REST + SignalR Hub + 靜態檔案 /files/...）
   │  EF Core
   ▼
PostgreSQL

管理後臺（Flutter）──► ChatServer（/api/admin）</code></pre>

<h2 id="ports">2. 連接埠</h2>
<table class="doc-table">
  <tr><th>元件</th><th>連接埠</th><th>協定</th></tr>
  <tr><td>ChatServer（REST + SignalR + /files）</td><td>5298</td><td>HTTP/HTTPS、WebSocket</td></tr>
  <tr><td>PostgreSQL</td><td>5432</td><td>TCP</td></tr>
  <tr><td>TURN / STUN（通話）</td><td>3478、5349 及中繼連接埠區間</td><td>UDP/TCP</td></tr>
</table>

<h2 id="req">3. 環境需求</h2>
<ul>
  <li>.NET 10 執行階段（僅原始碼建置時需要 SDK）</li>
  <li>PostgreSQL 14+</li>
  <li>Nginx 或任意靜態託管（用於 Web 用戶端）</li>
  <li>原始碼建置用戶端時需要 Flutter 3.x</li>
</ul>

<h2 id="install">4. 啟動整套服務</h2>
<pre><code># 資料庫
cd server &amp;&amp; docker compose up -d

# 聊天伺服端
cd ChatServer &amp;&amp; dotnet publish -c Release -o out &amp;&amp; cd out &amp;&amp; dotnet ChatServer.dll
</code></pre>
<p>建議用 systemd 或容器託管，並設定 <code>ASPNETCORE_ENVIRONMENT=Production</code>。</p>

<h2 id="config">5. 設定</h2>
<table class="doc-table">
  <tr><th>設定鍵</th><th>環境變數</th><th>用途</th></tr>
  <tr><td><code>ConnectionStrings:Default</code></td><td><code>ConnectionStrings__Default</code></td><td>PostgreSQL</td></tr>
  <tr><td><code>Jwt:Key</code></td><td><code>Jwt__Key</code></td><td>權杖簽章，≥32 字元</td></tr>
  <tr><td><code>Cors:Origins</code></td><td><code>Cors__Origins</code></td><td>允許的 Web 來源（不支援通配）</td></tr>
  <tr><td><code>SeedAdmin:Password</code></td><td><code>SeedAdmin__Password</code></td><td>初始管理員密碼</td></tr>
  <tr><td><code>Urls</code></td><td><code>Urls</code></td><td>如 <code>http://0.0.0.0:5298</code></td></tr>
</table>
<div class="doc-note">非 Development 環境下，金鑰缺失或仍是佔位值會<strong>啟動即失敗</strong>，這是刻意的安全設計。</div>
<p>健康檢查：<code>curl {base}/health</code> 回傳 <code>Healthy</code>（同時檢查處理程序與資料庫）。</p>

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

  client_max_body_size 100m;   # 檔案上傳大小
}</code></pre>

<h2 id="webrtc">7. 通話：STUN / TURN</h2>
<p>多數網路使用公共 STUN 即可；對稱 NAT 或企業防火牆環境請部署 coturn，並在管理後臺功能設定中填寫 ICE 設定：</p>
<pre><code>{
  "iceServers": [
    { "urls": ["stun:stun.l.google.com:19302"] },
    { "urls": ["turn:turn.example.com:3478"],
      "username": "anychat",
      "credential": "secret" }
  ]
}</code></pre>

<h2 id="clients">8. 建置用戶端</h2>
<pre><code># Web
flutter build web --dart-define=API_BASE=https://chat.example.com \\
                  --dart-define=DOWNLOAD_URL=https://example.com/download/

# Android（依 ABI 分包）
flutter build apk --split-per-abi --dart-define=API_BASE=https://chat.example.com

# iOS / 桌面端同理（需對應工具鏈與憑證）</code></pre>

<h2 id="updates">9. 更新分發</h2>
<p>在下載頁託管 <code>version.json</code> 與 APK，Android 用戶端啟動時檢查，<code>versionCode</code> 變大則提示更新。</p>
<pre><code>{
  "versionCode": 1788653049,
  "versionName": "0.1.35",
  "force": false,
  "changelog": "修正若干問題",
  "apk": {
    "arm64-v8a": "chat-arm64-v8a.apk",
    "armeabi-v7a": "chat-armeabi-v7a.apk",
    "x86_64": "chat-x86_64.apk"
  }
}</code></pre>

<h2 id="source">10. 原始碼結構（企業版）</h2>
<pre><code>server/
└─ ChatServer/     # 單一服務：REST API + SignalR Hub + 管理端 API（Controllers / Hubs / Services / Admin / Data）
client/
├─ flutter_chat/   # 使用者端（Flutter，全平臺）
└─ flutter_admin/  # 管理端應用程式

client/flutter_chat/lib/
├─ main.dart       # ProviderScope、Hub 訂閱、更新檢查
├─ router.dart     # go_router 路由
├─ config/         # AppConfig（dart-define）、constants（Hub 名稱）
├─ data/           # api_client.dart（Dio）、signalr_client.dart
├─ models/         # DTO
├─ providers/      # Riverpod：auth、chat、call、conversations、notifications…
├─ pages/          # 頁面
├─ widgets/        # 通用元件
└─ services/       # webrtc、sound、app update…</code></pre>

<h2 id="extend">11. 擴充開發（企業版）</h2>
<ul>
  <li><strong>REST 介面</strong>：在 <code>Controllers/</code> 新增控制器並註冊服務，涉及儲存時新增 EF 遷移。</li>
  <li><strong>即時能力</strong>：擴充 <code>ChatHub.cs</code>，並維持方法名稱與用戶端 <code>lib/config/constants.dart</code> 一致。</li>
  <li><strong>頁面</strong>：在 <code>pages/</code> 新增，並在 <code>router.dart</code> 註冊路由。</li>
  <li><strong>小程式</strong>：託管 H5 頁面，用內建容器開啟，透過 JS Bridge 呼叫 toast 與導航。</li>
</ul>
<pre><code>dotnet ef migrations add AddFeatureX
dotnet ef database update</code></pre>

<h2 id="whitelabel">12. 品牌化客製</h2>
<table class="doc-table">
  <tr><th>項目</th><th>方式</th></tr>
  <tr><td>應用程式名稱</td><td><code>app_name</code> 或設定連結 <code>name</code></td></tr>
  <tr><td>Logo 與主題</td><td>設定連結 <code>logo</code>；<code>theme.dart</code>、<code>app_colors.dart</code></td></tr>
  <tr><td>伺服器位址</td><td><code>--dart-define=API_BASE=…</code> 或設定連結 <code>api</code></td></tr>
  <tr><td>套件名 / Bundle ID</td><td>Android <code>applicationId</code>、iOS <code>PRODUCT_BUNDLE_IDENTIFIER</code></td></tr>
  <tr><td>下載與更新</td><td><code>--dart-define=DOWNLOAD_URL=…</code> + 託管 <code>version.json</code></td></tr>
</table>

<h2 id="ops">13. 維運</h2>
<ul>
  <li>健康檢查：每個服務 <code>GET /health</code>（同時檢查資料庫）。</li>
  <li>備份：每日 <code>pg_dump</code> + 備份 <code>/files</code> 上傳目錄。</li>
  <li>遷移：正式環境建議使用 <code>dotnet ef migrations add</code> + <code>database update</code>，而非 <code>EnsureCreated</code>。</li>
  <li>紀錄：留意 Hub 反覆重連與 TURN 配置失敗。</li>
</ul>

<h2 id="trouble">14. 故障排除</h2>
<ul>
  <li><code>/health</code> 不健康 → 資料庫無法連線或連線字串錯誤。</li>
  <li>瀏覽器回報 CORS 錯誤 → 把站台來源加入 <code>Cors:Origins</code>。</li>
  <li>訊息收不到 → 代理未放行 WebSocket 升級（見 <code>/hubs/</code> 設定）。</li>
  <li>啟動即結束 → <code>Jwt:Key</code> 缺失或仍是佔位值。</li>
  <li>NAT 環境通話失敗 → TURN 未設定或連接埠未放行。</li>
</ul>
`,

  'v1.api': `
<h1>V1 — API 介面文件</h1>
<p class="lead">AnyChat V1 伺服端完整介面契約：REST 介面、SignalR Hub、資料結構與錯誤碼。
下文以 <code>{base}</code> 表示伺服器位址（如 <code>https://chat.example.com</code>）。</p>

<h2 id="conventions">1. 通用約定</h2>
<ul>
  <li><strong>鑑權</strong>：除註冊與登入外，所有介面都需帶 <code>Authorization: Bearer &lt;token&gt;</code>。</li>
  <li><strong>內容型別</strong>：<code>application/json</code>；檔案上傳用 <code>multipart/form-data</code>。</li>
  <li><strong>時間</strong>：UTC ISO-8601（如 <code>2026-09-08T12:34:56Z</code>）。</li>
  <li><strong>列舉</strong>：以字串序列化 —— <code>Private</code>/<code>Group</code>、<code>Text</code>/<code>Image</code>/<code>File</code>/<code>Voice</code>、<code>Voice</code>/<code>Video</code>。</li>
  <li><strong>錯誤</strong>：Hub 呼叫失敗會擲出帶錯誤碼前綴的 <code>HubException</code>（見第 13 節）。</li>
</ul>

<h2 id="auth">2. 認證介面</h2>
<table class="doc-table">
  <tr><th>方法</th><th>路徑</th><th>鑑權</th><th>請求 → 回應</th></tr>
  <tr><td>POST</td><td><code>/api/auth/register</code></td><td>—</td><td><code>{userName, password, nickName}</code> → <code>{token, user}</code></td></tr>
  <tr><td>POST</td><td><code>/api/auth/login</code></td><td>—</td><td><code>{userName, password}</code> → <code>{token, user}</code></td></tr>
  <tr><td>POST</td><td><code>/api/auth/change-password</code></td><td>✓</td><td>修改目前使用者密碼</td></tr>
</table>
<pre><code>curl -X POST {base}/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"userName":"alice","password":"123456"}'

# → {"token":"eyJhbGciOi...","user":{"id":"...","userName":"alice",...}}</code></pre>

<h2 id="users">3. 使用者介面</h2>
<table class="doc-table">
  <tr><th>方法</th><th>路徑</th><th>說明</th></tr>
  <tr><td>GET</td><td><code>/api/users/me</code></td><td>目前登入使用者</td></tr>
  <tr><td>GET</td><td><code>/api/users/search?q=</code></td><td>依使用者名稱 / 暱稱搜尋（排除自己）</td></tr>
  <tr><td>GET</td><td><code>/api/users/online</code></td><td>線上使用者 ID</td></tr>
  <tr><td>GET</td><td><code>/api/users/me/card</code></td><td>我的名片（條碼內容）</td></tr>
  <tr><td>GET</td><td><code>/api/users/{id}/profile</code></td><td>使用者公開資料</td></tr>
  <tr><td>GET</td><td><code>/api/users/service-list</code></td><td>服務帳號清單</td></tr>
</table>

<h2 id="friends">4. 好友介面</h2>
<table class="doc-table">
  <tr><th>方法</th><th>路徑</th><th>說明</th></tr>
  <tr><td>POST</td><td><code>/api/friends/request</code></td><td>請求體 <code>"&lt;friendId&gt;"</code>，送出好友邀請</td></tr>
  <tr><td>GET</td><td><code>/api/friends/requests</code></td><td>我收到的待處理邀請</td></tr>
  <tr><td>POST</td><td><code>/api/friends/accept</code></td><td>請求體 <code>"&lt;friendId&gt;"</code>，接受邀請</td></tr>
  <tr><td>GET</td><td><code>/api/friends</code></td><td>我的好友清單</td></tr>
  <tr><td>DELETE</td><td><code>/api/friends/{friendId}</code></td><td>刪除好友</td></tr>
</table>

<h2 id="groups">5. 群組介面</h2>
<table class="doc-table">
  <tr><th>方法</th><th>路徑</th><th>說明</th></tr>
  <tr><td>POST</td><td><code>/api/groups</code></td><td><code>{name, memberIds}</code>，建立群組（自己為 Owner）</td></tr>
  <tr><td>GET</td><td><code>/api/groups</code></td><td>我所在的群組清單</td></tr>
  <tr><td>GET</td><td><code>/api/groups/{id}</code></td><td>群組詳情</td></tr>
</table>

<h2 id="messages">6. 訊息介面</h2>
<table class="doc-table">
  <tr><th>方法</th><th>路徑</th><th>說明</th></tr>
  <tr><td>POST</td><td><code>/api/messages/private</code></td><td>透過 REST 送出私聊（備用通道）</td></tr>
  <tr><td>GET</td><td><code>/api/messages/private/{friendId}?before=ISO&amp;count=30</code></td><td>私聊歷史（依時間升序）</td></tr>
  <tr><td>GET</td><td><code>/api/messages/group/{groupId}?before=ISO&amp;count=30</code></td><td>群聊歷史</td></tr>
  <tr><td>POST</td><td><code>/api/messages/hide/{messageId}</code></td><td>對自己隱藏某則訊息</td></tr>
  <tr><td>POST</td><td><code>/api/messages/clear-all</code></td><td>清空我的訊息</td></tr>
</table>

<h2 id="conversations">7. 會話介面</h2>
<p><code>GET /api/conversations</code>：回傳好友與群組，各帶最後一則訊息、未讀數、線上狀態與時間，依時間倒序。</p>

<h2 id="files">8. 檔案介面</h2>
<pre><code>curl -X POST {base}/api/files/upload \\
  -H "Authorization: Bearer &lt;token&gt;" \\
  -F "file=@photo.png"

# → {"url":"/files/xxx.png","contentType":"image/png","size":12345}</code></pre>
<div class="doc-note">多媒體訊息兩步驟：先上傳取得 <code>url</code>，再透過 Hub 以
<code>type="Image"|"File"|"Voice"</code> 且 <code>mediaUrl=&lt;url&gt;</code> 送出；文字用
<code>type="Text"</code> 且 <code>mediaUrl=null</code>。</div>

<h2 id="discover">9. 發現頁與功能設定</h2>
<table class="doc-table">
  <tr><th>方法</th><th>路徑</th><th>說明</th></tr>
  <tr><td>GET</td><td><code>/api/discover</code></td><td>發現頁欄目與內容</td></tr>
  <tr><td>GET</td><td><code>/api/discover/pinned</code></td><td>置頂內容</td></tr>
  <tr><td>GET</td><td><code>/api/discover/pinned-meta</code></td><td>置頂內容詮釋資料</td></tr>
  <tr><td>GET</td><td><code>/api/features</code></td><td>功能開關與執行期設定（含 WebRTC ICE）</td></tr>
</table>

<h2 id="hub">10. SignalR Hub</h2>
<p>連線位址 <code>{base}/hubs/chat</code>，JWT 透過 <code>access_token</code> 查詢參數傳遞。
連線成功後，伺服端自動把該連線加入目前使用者所在會話的 SignalR 分組。</p>

<h3 id="hub-methods">10.1 用戶端 → 伺服端</h3>
<table class="doc-table">
  <tr><th>方法</th><th>參數</th><th>說明</th></tr>
  <tr><td><code>SendPrivateMessage</code></td><td><code>(toUserId, content, type?, mediaUrl?)</code></td><td>送出私聊，雙方須為好友</td></tr>
  <tr><td><code>SendGroupMessage</code></td><td><code>(groupId, content, type?, mediaUrl?)</code></td><td>送出群組訊息，須為成員</td></tr>
  <tr><td><code>RecallMessage</code></td><td><code>(messageId)</code></td><td>收回自己的訊息</td></tr>
  <tr><td><code>SendTyping</code></td><td><code>(toUserId, isTyping)</code></td><td>正在輸入狀態</td></tr>
  <tr><td><code>JoinGroup</code> / <code>LeaveGroup</code></td><td><code>(groupId)</code></td><td>加入 / 退出群組頻道</td></tr>
  <tr><td><code>CallUser</code></td><td><code>(toUserId, type)</code></td><td>發起通話，回傳 <code>sessionId</code></td></tr>
  <tr><td><code>AcceptCall</code> / <code>RejectCall</code> / <code>EndCall</code></td><td><code>(sessionId)</code></td><td>通話控制</td></tr>
  <tr><td><code>SendOffer</code> / <code>SendAnswer</code></td><td><code>(sessionId, sdp)</code></td><td>WebRTC SDP 交換</td></tr>
  <tr><td><code>SendIceCandidate</code></td><td><code>(sessionId, candidate)</code></td><td>ICE 候選（JSON 字串）</td></tr>
</table>

<h3 id="hub-events">10.2 伺服端 → 用戶端</h3>
<table class="doc-table">
  <tr><th>事件</th><th>承載</th><th>說明</th></tr>
  <tr><td><code>ReceiveMessage</code></td><td><code>MessageDto</code></td><td>新訊息（私聊同時回推發送者）</td></tr>
  <tr><td><code>MessageRecalled</code></td><td><code>MessageDto</code></td><td>訊息被收回</td></tr>
  <tr><td><code>OnTyping</code></td><td><code>userId</code></td><td>對方正在輸入</td></tr>
  <tr><td><code>UserOnline</code> / <code>UserOffline</code></td><td><code>userId</code></td><td>線上狀態變化</td></tr>
  <tr><td><code>ReceiveFriendRequest</code></td><td><code>FriendRequestDto</code></td><td>收到好友邀請</td></tr>
  <tr><td><code>IncomingCall</code></td><td><code>IncomingCallDto</code></td><td>來電</td></tr>
  <tr><td><code>CallAccepted</code></td><td><code>CallAcceptedDto</code></td><td>對方已接聽</td></tr>
  <tr><td><code>CallEnded</code></td><td><code>CallEndedDto</code></td><td>通話結束（含原因）</td></tr>
  <tr><td><code>ReceiveOffer</code> / <code>ReceiveAnswer</code></td><td><code>CallSdpDto</code></td><td>SDP 交換</td></tr>
  <tr><td><code>ReceiveIceCandidate</code></td><td><code>CallIceCandidateDto</code></td><td>ICE 候選</td></tr>
</table>

<h2 id="dto">11. 資料結構</h2>
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
<p><strong>會話 ID</strong>（可於本機推算）：私聊 <code>p_{使用者A}_{使用者B}</code>（兩個 ID 依字串升序拼接）；群聊 <code>g_{群組ID}</code>。</p>

<h2 id="flows">12. 典型呼叫流程</h2>
<pre><code># 送出訊息
1. POST /api/auth/login                  → token
2. 連線 /hubs/chat?access_token=token
3. invoke("SendPrivateMessage", toUserId, "hi", "Text", null)
4. on("ReceiveMessage")                  → MessageDto

# 送出圖片
1. POST /api/files/upload (multipart)    → { url }
2. invoke("SendPrivateMessage", toUserId, "", "Image", url)

# 通話信令
主叫: invoke("CallUser", toUserId, "Video") → sessionId
被叫: on("IncomingCall") → invoke("AcceptCall", sessionId)
主叫: on("CallAccepted") → createOffer → invoke("SendOffer", sessionId, sdp)
被叫: on("ReceiveOffer") → setRemote → createAnswer → invoke("SendAnswer", …)
雙方: 透過 SendIceCandidate / ReceiveIceCandidate 交換 ICE
任一: invoke("EndCall", sessionId) → on("CallEnded")</code></pre>

<h2 id="errors">13. 錯誤碼</h2>
<table class="doc-table">
  <tr><th>錯誤碼</th><th>含義</th><th>處理建議</th></tr>
  <tr><td><code>E_FRIEND_REQUIRED</code></td><td>雙方還不是好友</td><td>提示先加入好友</td></tr>
  <tr><td><code>E_TARGET_NOT_FOUND</code></td><td>使用者或群組不存在</td><td>重新整理聯絡人 / 群組清單</td></tr>
  <tr><td><code>E_BAD_TARGET</code></td><td>ID 格式錯誤</td><td>檢查 ID 格式</td></tr>
  <tr><td><code>E_EMPTY</code></td><td>空訊息</td><td>禁止送出空內容</td></tr>
  <tr><td><code>E_SERVER</code></td><td>伺服端異常</td><td>重試並查看伺服端紀錄</td></tr>
</table>
<p>REST 使用標準 HTTP 狀態碼；Hub 失敗以 <code>HubException</code> 擲出，訊息以錯誤碼開頭，後接 <code>: </code> 與可讀文字。</p>
`,
};
