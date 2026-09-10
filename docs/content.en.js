/* AnyChat Docs — English content (HTML fragments) */
window.DOC_EN = {
  overview: `
<h1>Documentation</h1>
<p class="lead">AnyChat documentation, organised by <strong>product version</strong>. The current major version is
<strong>V1</strong>. Pick a document type below: <strong>User guide</strong>, <strong>Developer guide</strong> or
<strong>API Reference</strong>.</p>

<h2 id="versions">Versions</h2>
<table class="doc-table">
  <tr><th>Version</th><th>Status</th><th>Documents</th></tr>
  <tr>
    <td><strong>V1</strong></td>
    <td>Current</td>
    <td><a href="#/v1/help">User guide</a> · <a href="#/v1/dev">Developer guide</a> · <a href="#/v1/api">API Reference</a></td>
  </tr>
</table>
<div class="doc-note">New major versions are added as a new section here; older versions stay available so you can
keep documentation aligned with the build you run.</div>

<h2 id="which">Which document do I need?</h2>
<table class="doc-table">
  <tr><th>If you are…</th><th>Read</th></tr>
  <tr><td>Using the app (chat, calls, groups, channels)</td><td><a href="#/v1/help">V1 · User guide</a></td></tr>
  <tr><td>Deploying server and clients</td><td><a href="#/v1/dev">V1 · Developer guide</a></td></tr>
  <tr><td>Integrating with REST or the realtime hub</td><td><a href="#/v1/api">V1 · API Reference</a></td></tr>
</table>

<h2 id="plans">Feature availability by plan</h2>
<p>The product is one codebase; your plan decides which parts are enabled and what is delivered.</p>
<table class="doc-table">
  <tr><th></th><th>Free</th><th>Pro</th><th>Enterprise</th></tr>
  <tr><td>Web client</td><td>✓</td><td>✓</td><td>✓</td></tr>
  <tr><td>Android / iOS clients</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>Desktop clients</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>Audio / video calls</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>Extensions (mini-apps, plugins)</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>Admin console</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>Delivery</td><td>Compiled build</td><td>Compiled build</td><td>Full source</td></tr>
  <tr><td>Secondary development</td><td>—</td><td>—</td><td>✓</td></tr>
</table>
<div class="doc-note">Every plan runs on <strong>your own infrastructure</strong>: messages, files and user data stay in your own PostgreSQL database.</div>
`,

  'v1.help': `
<h1>V1 — User Guide</h1>
<p class="lead">How to use AnyChat V1 as an end user: accounts, friends, messaging, calls, groups, channels,
mini-apps and the admin console. Features not included in your plan are marked in
<a href="#availability">§8 Availability</a>.</p>

<h2 id="start">1. Getting started</h2>
<table class="doc-table">
  <tr><th>Platform</th><th>How to get it</th></tr>
  <tr><td>Web</td><td>Open the URL given by your administrator — nothing to install</td></tr>
  <tr><td>Android</td><td>Download the APK from the download page; allow «install from this source»</td></tr>
  <tr><td>iOS</td><td>Install via TestFlight or a signed IPA</td></tr>
  <tr><td>Windows / macOS</td><td>Run the desktop installer</td></tr>
</table>
<ol>
  <li>Open the app and tap <strong>Register</strong>: choose a username, nickname and password.</li>
  <li>You are signed in automatically — no email verification required.</li>
  <li>If the login page has no server field, the address was preset by a configuration link.</li>
</ol>
<div class="doc-note">Android builds are split per CPU architecture (<code>arm64-v8a</code> recommended). If the signing key changed, uninstall the previous version first.</div>

<h2 id="config">2. Server address &amp; configuration links</h2>
<p>Either type the address manually (login → Settings) or scan a configuration link with
<em>Scan</em> (login page or Discover):</p>
<pre><code>fairchat://config?api=https://chat.example.com&amp;name=AnyChat&amp;logo=https://…/logo.png&amp;download=https://…/download/</code></pre>
<table class="doc-table">
  <tr><th>Param</th><th>Meaning</th></tr>
  <tr><td><code>api</code></td><td>Server address; hides the address field once set</td></tr>
  <tr><td><code>name</code></td><td>Brand name shown in the app</td></tr>
  <tr><td><code>logo</code></td><td>Logo image URL (<code>http(s)://</code>)</td></tr>
  <tr><td><code>download</code></td><td>Download page URL (absolute)</td></tr>
</table>
<p>Settings are stored on the device and reused on the next launch.</p>

<h2 id="friends">3. Friends &amp; contacts</h2>
<ul>
  <li><strong>Search</strong>: Contacts → add friend → type a username or nickname → send request.</li>
  <li><strong>QR code</strong>: open <em>My QR</em> to be scanned, or scan someone else from <em>Scan</em>.</li>
  <li><strong>Requests</strong>: incoming requests show a badge on the Contacts entry; accept or decline there.</li>
  <li><strong>Delete</strong>: long-press a contact → delete friend.</li>
</ul>

<h2 id="chat">4. Messaging</h2>
<ul>
  <li><strong>Text</strong>: type and send; the peer gets a top banner and a notification sound.</li>
  <li><strong>Images</strong>: attachment → image → inline preview.</li>
  <li><strong>Files</strong>: attachment → file → the receiver gets a download link.</li>
  <li><strong>Voice</strong>: hold the mic button to record, release to send.</li>
  <li><strong>Reply</strong>: long-press a message → reply (quote).</li>
  <li><strong>Recall</strong>: long-press your own message → recall.</li>
  <li><strong>History</strong>: scroll up to load earlier messages.</li>
</ul>

<h2 id="groups">5. Groups</h2>
<p>Contacts → create group → pick members. Group messages, images and files work exactly like private chats.
Owners can add or remove members from the group profile.</p>

<h2 id="calls">6. Audio &amp; video calls</h2>
<ul>
  <li><strong>Start</strong>: in a chat, tap the phone icon (audio) or camera icon (video).</li>
  <li><strong>Receive</strong>: the call screen opens and a ringtone loops until you accept, decline or the caller hangs up.</li>
  <li><strong>Permissions</strong>: grant microphone (and camera for video) on first use.</li>
  <li><strong>End</strong>: tap the red button; the system back button ends the call too, so the ringtone always stops.</li>
</ul>
<p>Calls are peer-to-peer. Behind restrictive NAT a TURN server is required (see the Developer guide).</p>

<h2 id="discover">7. Discover, mini-apps &amp; admin console</h2>
<ul>
  <li><strong>Discover</strong>: channel based content feed, curated from the admin console.</li>
  <li><strong>Mini-apps</strong>: business H5 pages open inside the built-in container with a JS bridge.</li>
  <li><strong>Admin console</strong>: users, roles &amp; permissions, audit log, feature toggles, channels and service accounts.</li>
</ul>

<h2 id="availability">8. Availability by plan</h2>
<table class="doc-table">
  <tr><th>Feature</th><th>Free</th><th>Pro</th><th>Enterprise</th></tr>
  <tr><td>Web client</td><td>✓</td><td>✓</td><td>✓</td></tr>
  <tr><td>Android / iOS / desktop clients</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>Chat, images, files, voice</td><td>✓</td><td>✓</td><td>✓</td></tr>
  <tr><td>Audio / video calls</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>Mini-apps &amp; extensions</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>Admin console &amp; channels</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>White-label branding</td><td>—</td><td>—</td><td>✓</td></tr>
</table>

<h2 id="settings">9. Settings</h2>
<ul>
  <li>Theme: light / dark / follow system, plus skin colors.</li>
  <li>Language: Simplified Chinese, Traditional Chinese, English, Spanish.</li>
  <li>Server address override and configuration-link import.</li>
  <li>Check for updates (Android side-loaded builds).</li>
</ul>

<h2 id="faq">10. FAQ</h2>
<p><strong>I cannot log in.</strong> Check the server address (login → Settings); a wrong or unreachable address is the most common cause.</p>
<p><strong>No notification sound.</strong> Browsers block audio until you interact with the page — click once, then sounds play.</p>
<p><strong>Call connects with no audio.</strong> Check microphone permission and ask your administrator whether TURN is reachable.</p>
<p><strong>"Server does not support calls".</strong> The server is outdated — update ChatServer.</p>
<p><strong>Camera does not open when scanning.</strong> The web client needs HTTPS or <code>localhost</code>; on plain HTTP paste the configuration link instead.</p>
<p><strong>A contact appears offline.</strong> Presence is pushed over the WebSocket; while the hub is disconnected the status is stale.</p>
`,

  'v1.dev': `
<h1>V1 — Developer Guide</h1>
<p class="lead">Deploy AnyChat V1, build the clients, integrate and — with the Enterprise plan — customise the source.
For request/response details see the <a href="#/v1/api">API Reference</a>.</p>

<h2 id="arch">1. Architecture</h2>
<pre><code>Clients (Flutter: Web / Android / iOS / Windows / macOS)
   │  HTTPS  REST /api/...
   │  WSS    SignalR /hubs/chat
   ▼
ASP.NET Core 10  (REST + SignalR Hub + static files /files/...)
   │  EF Core
   ▼
PostgreSQL

Admin console (Flutter) ──► ChatServer (/api/admin)</code></pre>

<h2 id="ports">2. Ports</h2>
<table class="doc-table">
  <tr><th>Component</th><th>Port</th><th>Protocol</th></tr>
  <tr><td>ChatServer (REST + SignalR + /files)</td><td>5298</td><td>HTTP/HTTPS, WebSocket</td></tr>
  <tr><td>PostgreSQL</td><td>5432</td><td>TCP</td></tr>
  <tr><td>TURN / STUN (calls)</td><td>3478, 5349 + relay range</td><td>UDP/TCP</td></tr>
</table>

<h2 id="req">3. Requirements</h2>
<ul>
  <li>.NET 10 runtime (SDK only if you build from source)</li>
  <li>PostgreSQL 14+</li>
  <li>Nginx (or any static host) for the web client</li>
  <li>Flutter 3.x when building clients from source</li>
</ul>

<h2 id="install">4. Bring up the stack</h2>
<pre><code># database
cd server &amp;&amp; docker compose up -d

# chat server
cd ChatServer &amp;&amp; dotnet publish -c Release -o out &amp;&amp; cd out &amp;&amp; dotnet ChatServer.dll
</code></pre>
<p>Run the service under systemd or as a container with <code>ASPNETCORE_ENVIRONMENT=Production</code>.</p>

<h2 id="config">5. Configuration</h2>
<table class="doc-table">
  <tr><th>Key</th><th>Environment variable</th><th>Purpose</th></tr>
  <tr><td><code>ConnectionStrings:Default</code></td><td><code>ConnectionStrings__Default</code></td><td>PostgreSQL</td></tr>
  <tr><td><code>Jwt:Key</code></td><td><code>Jwt__Key</code></td><td>Token signing, ≥32 chars</td></tr>
  <tr><td><code>Cors:Origins</code></td><td><code>Cors__Origins</code></td><td>Allowed web origins (no wildcards)</td></tr>
  <tr><td><code>SeedAdmin:Password</code></td><td><code>SeedAdmin__Password</code></td><td>Initial admin password</td></tr>
  <tr><td><code>Urls</code></td><td><code>Urls</code></td><td>e.g. <code>http://0.0.0.0:5298</code></td></tr>
</table>
<div class="doc-note">Outside Development, missing or placeholder secrets make the process <strong>fail fast</strong> at startup by design.</div>
<p>Verify with <code>curl {base}/health</code> → <code>Healthy</code> (checks the process <em>and</em> the database).</p>

<h2 id="nginx">6. Nginx reverse proxy</h2>
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

  client_max_body_size 100m;   # file uploads
}</code></pre>

<h2 id="webrtc">7. Calls: STUN / TURN</h2>
<p>Public STUN works for most networks. For symmetric NAT or corporate firewalls deploy coturn and set the ICE
configuration in the admin console (feature settings):</p>
<pre><code>{
  "iceServers": [
    { "urls": ["stun:stun.l.google.com:19302"] },
    { "urls": ["turn:turn.example.com:3478"],
      "username": "anychat",
      "credential": "secret" }
  ]
}</code></pre>

<h2 id="clients">8. Build the clients</h2>
<pre><code># Web
flutter build web --dart-define=API_BASE=https://chat.example.com \\
                  --dart-define=DOWNLOAD_URL=https://example.com/download/

# Android (per-ABI splits)
flutter build apk --split-per-abi --dart-define=API_BASE=https://chat.example.com

# iOS / desktop: same approach with the matching toolchain and certificates</code></pre>

<h2 id="updates">9. Update distribution</h2>
<p>Host <code>version.json</code> (plus APKs) on the download page; Android clients check it on launch and prompt
when <code>versionCode</code> increases.</p>
<pre><code>{
  "versionCode": 1788653049,
  "versionName": "0.1.35",
  "force": false,
  "changelog": "Bug fixes",
  "apk": {
    "arm64-v8a": "chat-arm64-v8a.apk",
    "armeabi-v7a": "chat-armeabi-v7a.apk",
    "x86_64": "chat-x86_64.apk"
  }
}</code></pre>

<h2 id="source">10. Source structure (Enterprise)</h2>
<pre><code>server/
└─ ChatServer/     # Single app: REST API + SignalR Hub + admin API (Controllers / Hubs / Services / Admin / Data)
client/
├─ flutter_chat/   # end-user app (Flutter, all platforms)
└─ flutter_admin/  # admin app

client/flutter_chat/lib/
├─ main.dart       # ProviderScope, hub subscription, update check
├─ router.dart     # go_router routes
├─ config/         # AppConfig (dart-define), constants (hub names)
├─ data/           # api_client.dart (Dio), signalr_client.dart
├─ models/         # DTOs
├─ providers/      # Riverpod: auth, chat, call, conversations, notifications…
├─ pages/          # screens
├─ widgets/        # shared UI
└─ services/       # webrtc, sound, app update…</code></pre>

<h2 id="extend">11. Extending (Enterprise)</h2>
<ul>
  <li><strong>REST endpoint</strong>: add a controller under <code>Controllers/</code>, register the service, add an EF migration if it stores data.</li>
  <li><strong>Realtime capability</strong>: extend <code>ChatHub.cs</code> and keep the method name in sync with <code>lib/config/constants.dart</code>.</li>
  <li><strong>Screen</strong>: add a page under <code>pages/</code> and a route in <code>router.dart</code>.</li>
  <li><strong>Mini-app</strong>: host an H5 page and open it in the built-in container; use the JS bridge for toast and navigation.</li>
</ul>
<pre><code>dotnet ef migrations add AddFeatureX
dotnet ef database update</code></pre>

<h2 id="whitelabel">12. White-label</h2>
<table class="doc-table">
  <tr><th>Item</th><th>How</th></tr>
  <tr><td>App name</td><td><code>app_name</code> or config-link <code>name</code></td></tr>
  <tr><td>Logo &amp; theme</td><td>config-link <code>logo</code>; <code>theme.dart</code>, <code>app_colors.dart</code></td></tr>
  <tr><td>Server address</td><td><code>--dart-define=API_BASE=…</code> or config-link <code>api</code></td></tr>
  <tr><td>Package / bundle id</td><td>Android <code>applicationId</code>, iOS <code>PRODUCT_BUNDLE_IDENTIFIER</code></td></tr>
  <tr><td>Download &amp; updates</td><td><code>--dart-define=DOWNLOAD_URL=…</code> + hosted <code>version.json</code></td></tr>
</table>

<h2 id="ops">13. Operations</h2>
<ul>
  <li>Health: <code>GET /health</code> per service (checks the database too).</li>
  <li>Backups: nightly <code>pg_dump</code> plus the <code>/files</code> upload directory.</li>
  <li>Migrations: prefer <code>dotnet ef migrations add</code> + <code>database update</code> over <code>EnsureCreated</code>.</li>
  <li>Logs: watch hub reconnect loops and TURN allocation failures.</li>
</ul>

<h2 id="trouble">14. Troubleshooting</h2>
<ul>
  <li><code>/health</code> unhealthy → database unreachable or wrong connection string.</li>
  <li>CORS error in the console → add the exact origin to <code>Cors:Origins</code>.</li>
  <li>Messages never arrive → proxy blocks the WebSocket upgrade (see the <code>/hubs/</code> block).</li>
  <li>Startup fails immediately → <code>Jwt:Key</code> missing or still a placeholder.</li>
  <li>Calls fail between NAT-ed peers → TURN not configured or its ports blocked.</li>
</ul>
`,

  'v1.api': `
<h1>V1 — API Reference</h1>
<p class="lead">Complete backend contract of AnyChat V1: REST endpoints, the SignalR Hub, data structures and error codes.
<code>{base}</code> below stands for your server address (e.g. <code>https://chat.example.com</code>).</p>

<h2 id="conventions">1. Conventions</h2>
<ul>
  <li><strong>Auth</strong>: <code>Authorization: Bearer &lt;token&gt;</code> on every endpoint except register and login.</li>
  <li><strong>Content type</strong>: <code>application/json</code>; file upload uses <code>multipart/form-data</code>.</li>
  <li><strong>Time</strong>: UTC ISO-8601 (e.g. <code>2026-09-08T12:34:56Z</code>).</li>
  <li><strong>Enums</strong>: serialized as strings — <code>Private</code>/<code>Group</code>, <code>Text</code>/<code>Image</code>/<code>File</code>/<code>Voice</code>, <code>Voice</code>/<code>Video</code>.</li>
  <li><strong>Errors</strong>: hub failures raise <code>HubException</code> with a code prefix (see §12).</li>
</ul>

<h2 id="auth">2. Authentication</h2>
<table class="doc-table">
  <tr><th>Method</th><th>Path</th><th>Auth</th><th>Body → Response</th></tr>
  <tr><td>POST</td><td><code>/api/auth/register</code></td><td>—</td><td><code>{userName, password, nickName}</code> → <code>{token, user}</code></td></tr>
  <tr><td>POST</td><td><code>/api/auth/login</code></td><td>—</td><td><code>{userName, password}</code> → <code>{token, user}</code></td></tr>
  <tr><td>POST</td><td><code>/api/auth/change-password</code></td><td>✓</td><td>Change the current user password</td></tr>
</table>
<pre><code>curl -X POST {base}/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"userName":"alice","password":"123456"}'

# → {"token":"eyJhbGciOi...","user":{"id":"...","userName":"alice",...}}</code></pre>

<h2 id="users">3. Users</h2>
<table class="doc-table">
  <tr><th>Method</th><th>Path</th><th>Description</th></tr>
  <tr><td>GET</td><td><code>/api/users/me</code></td><td>Current user</td></tr>
  <tr><td>GET</td><td><code>/api/users/search?q=</code></td><td>Search by user name / nickname (excludes self)</td></tr>
  <tr><td>GET</td><td><code>/api/users/online</code></td><td>Online user ids</td></tr>
  <tr><td>GET</td><td><code>/api/users/me/card</code></td><td>My contact card (QR payload)</td></tr>
  <tr><td>GET</td><td><code>/api/users/{id}/profile</code></td><td>Public profile</td></tr>
  <tr><td>GET</td><td><code>/api/users/service-list</code></td><td>Service accounts</td></tr>
</table>

<h2 id="friends">4. Friends</h2>
<table class="doc-table">
  <tr><th>Method</th><th>Path</th><th>Description</th></tr>
  <tr><td>POST</td><td><code>/api/friends/request</code></td><td>Body <code>"&lt;friendId&gt;"</code> — send request</td></tr>
  <tr><td>GET</td><td><code>/api/friends/requests</code></td><td>Pending requests I received</td></tr>
  <tr><td>POST</td><td><code>/api/friends/accept</code></td><td>Body <code>"&lt;friendId&gt;"</code> — accept</td></tr>
  <tr><td>GET</td><td><code>/api/friends</code></td><td>My friends</td></tr>
  <tr><td>DELETE</td><td><code>/api/friends/{friendId}</code></td><td>Remove a friend</td></tr>
</table>

<h2 id="groups">5. Groups</h2>
<table class="doc-table">
  <tr><th>Method</th><th>Path</th><th>Description</th></tr>
  <tr><td>POST</td><td><code>/api/groups</code></td><td><code>{name, memberIds}</code> — create (you become Owner)</td></tr>
  <tr><td>GET</td><td><code>/api/groups</code></td><td>Groups I belong to</td></tr>
  <tr><td>GET</td><td><code>/api/groups/{id}</code></td><td>Group detail</td></tr>
</table>

<h2 id="messages">6. Messages</h2>
<table class="doc-table">
  <tr><th>Method</th><th>Path</th><th>Description</th></tr>
  <tr><td>POST</td><td><code>/api/messages/private</code></td><td>Send a private message over REST (fallback)</td></tr>
  <tr><td>GET</td><td><code>/api/messages/private/{friendId}?before=ISO&amp;count=30</code></td><td>Private history (ascending)</td></tr>
  <tr><td>GET</td><td><code>/api/messages/group/{groupId}?before=ISO&amp;count=30</code></td><td>Group history</td></tr>
  <tr><td>POST</td><td><code>/api/messages/hide/{messageId}</code></td><td>Hide a message for me</td></tr>
  <tr><td>POST</td><td><code>/api/messages/clear-all</code></td><td>Clear my messages</td></tr>
</table>

<h2 id="conversations">7. Conversations</h2>
<p><code>GET /api/conversations</code> — friends and groups with last message, unread count, online flag and timestamp, newest first.</p>

<h2 id="files">8. Files</h2>
<pre><code>curl -X POST {base}/api/files/upload \\
  -H "Authorization: Bearer &lt;token&gt;" \\
  -F "file=@photo.png"

# → {"url":"/files/xxx.png","contentType":"image/png","size":12345}</code></pre>
<div class="doc-note">Two-step media flow: upload first to obtain <code>url</code>, then send it through the hub with
<code>type="Image"|"File"|"Voice"</code> and <code>mediaUrl=&lt;url&gt;</code>. Text uses <code>type="Text"</code> and <code>mediaUrl=null</code>.</div>

<h2 id="discover">9. Discover &amp; features</h2>
<table class="doc-table">
  <tr><th>Method</th><th>Path</th><th>Description</th></tr>
  <tr><td>GET</td><td><code>/api/discover</code></td><td>Discovery columns and content</td></tr>
  <tr><td>GET</td><td><code>/api/discover/pinned</code></td><td>Pinned content</td></tr>
  <tr><td>GET</td><td><code>/api/discover/pinned-meta</code></td><td>Metadata of pinned content</td></tr>
  <tr><td>GET</td><td><code>/api/features</code></td><td>Feature toggles and runtime config (incl. WebRTC ICE)</td></tr>
</table>

<h2 id="hub">10. SignalR Hub</h2>
<p>Connect to <code>{base}/hubs/chat</code> with the JWT in the <code>access_token</code> query parameter.
The server joins the connection to the SignalR groups of all the caller's conversations.</p>

<h3 id="hub-methods">10.1 Client → server</h3>
<table class="doc-table">
  <tr><th>Method</th><th>Arguments</th><th>Description</th></tr>
  <tr><td><code>SendPrivateMessage</code></td><td><code>(toUserId, content, type?, mediaUrl?)</code></td><td>Private message; both must be friends</td></tr>
  <tr><td><code>SendGroupMessage</code></td><td><code>(groupId, content, type?, mediaUrl?)</code></td><td>Group message; must be a member</td></tr>
  <tr><td><code>RecallMessage</code></td><td><code>(messageId)</code></td><td>Recall my message</td></tr>
  <tr><td><code>SendTyping</code></td><td><code>(toUserId, isTyping)</code></td><td>Typing indicator</td></tr>
  <tr><td><code>JoinGroup</code> / <code>LeaveGroup</code></td><td><code>(groupId)</code></td><td>Join / leave a group channel</td></tr>
  <tr><td><code>CallUser</code></td><td><code>(toUserId, type)</code></td><td>Start a call, returns <code>sessionId</code></td></tr>
  <tr><td><code>AcceptCall</code> / <code>RejectCall</code> / <code>EndCall</code></td><td><code>(sessionId)</code></td><td>Call control</td></tr>
  <tr><td><code>SendOffer</code> / <code>SendAnswer</code></td><td><code>(sessionId, sdp)</code></td><td>WebRTC SDP exchange</td></tr>
  <tr><td><code>SendIceCandidate</code></td><td><code>(sessionId, candidate)</code></td><td>ICE candidate (JSON string)</td></tr>
</table>

<h3 id="hub-events">10.2 Server → client</h3>
<table class="doc-table">
  <tr><th>Event</th><th>Payload</th><th>Description</th></tr>
  <tr><td><code>ReceiveMessage</code></td><td><code>MessageDto</code></td><td>New message (private echoes to sender)</td></tr>
  <tr><td><code>MessageRecalled</code></td><td><code>MessageDto</code></td><td>A message was recalled</td></tr>
  <tr><td><code>OnTyping</code></td><td><code>userId</code></td><td>Peer is typing</td></tr>
  <tr><td><code>UserOnline</code> / <code>UserOffline</code></td><td><code>userId</code></td><td>Presence changes</td></tr>
  <tr><td><code>ReceiveFriendRequest</code></td><td><code>FriendRequestDto</code></td><td>Incoming friend request</td></tr>
  <tr><td><code>IncomingCall</code></td><td><code>IncomingCallDto</code></td><td>Someone is calling you</td></tr>
  <tr><td><code>CallAccepted</code></td><td><code>CallAcceptedDto</code></td><td>Callee accepted</td></tr>
  <tr><td><code>CallEnded</code></td><td><code>CallEndedDto</code></td><td>Call ended with a reason</td></tr>
  <tr><td><code>ReceiveOffer</code> / <code>ReceiveAnswer</code></td><td><code>CallSdpDto</code></td><td>SDP exchange</td></tr>
  <tr><td><code>ReceiveIceCandidate</code></td><td><code>CallIceCandidateDto</code></td><td>ICE candidate</td></tr>
</table>

<h2 id="dto">11. Data structures</h2>
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
<p><code>CallEndReason</code>: <code>Declined</code> · <code>Busy</code> · <code>Timeout</code> · <code>HangUp</code> · <code>Offline</code> · <code>Error</code>.</p>
<p><strong>Conversation ids</strong> (computable locally): private <code>p_{guidA}_{guidB}</code> with the two ids sorted
as strings; group <code>g_{groupId}</code>.</p>

<h2 id="flows">12. Typical flows</h2>
<pre><code># send a message
1. POST /api/auth/login                  → token
2. connect /hubs/chat?access_token=token
3. invoke("SendPrivateMessage", toUserId, "hi", "Text", null)
4. on("ReceiveMessage")                  → MessageDto

# send an image
1. POST /api/files/upload (multipart)    → { url }
2. invoke("SendPrivateMessage", toUserId, "", "Image", url)

# call signalling
caller: invoke("CallUser", toUserId, "Video") → sessionId
callee: on("IncomingCall") → invoke("AcceptCall", sessionId)
caller: on("CallAccepted") → createOffer → invoke("SendOffer", sessionId, sdp)
callee: on("ReceiveOffer") → setRemote → createAnswer → invoke("SendAnswer", …)
both  : exchange ICE via SendIceCandidate / ReceiveIceCandidate
either: invoke("EndCall", sessionId) → on("CallEnded")</code></pre>

<h2 id="errors">13. Error codes</h2>
<table class="doc-table">
  <tr><th>Code</th><th>Meaning</th><th>Suggested action</th></tr>
  <tr><td><code>E_FRIEND_REQUIRED</code></td><td>Not friends yet</td><td>Prompt to add friend</td></tr>
  <tr><td><code>E_TARGET_NOT_FOUND</code></td><td>User or group missing</td><td>Refresh the contact list</td></tr>
  <tr><td><code>E_BAD_TARGET</code></td><td>Malformed id</td><td>Check the id format</td></tr>
  <tr><td><code>E_EMPTY</code></td><td>Empty message</td><td>Block empty content</td></tr>
  <tr><td><code>E_SERVER</code></td><td>Unexpected failure</td><td>Retry, then check server logs</td></tr>
</table>
<p>REST failures use standard HTTP status codes; hub failures arrive as <code>HubException</code> whose message starts
with one of the codes above followed by <code>: </code> and a human-readable text.</p>
`,
};
