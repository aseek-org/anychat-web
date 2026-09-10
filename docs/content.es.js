/* Documentación de AnyChat — contenido en español (fragmentos HTML) */
window.DOC_ES = {
  overview: `
<h1>Documentación</h1>
<p class="lead">La documentación de AnyChat se organiza por <strong>versión mayor del producto</strong>. La versión
actual es <strong>V1</strong>. Elige un tipo de documento: <strong>Guía de usuario</strong>,
<strong>Guía de desarrollo</strong> o <strong>Referencia de API</strong>.</p>

<h2 id="versions">Versiones</h2>
<table class="doc-table">
  <tr><th>Versión</th><th>Estado</th><th>Documentos</th></tr>
  <tr>
    <td><strong>V1</strong></td>
    <td>Actual</td>
    <td><a href="#/v1/help">Guía de usuario</a> · <a href="#/v1/dev">Guía de desarrollo</a> · <a href="#/v1/api">Referencia de API</a></td>
  </tr>
</table>
<div class="doc-note">Las nuevas versiones mayores se añaden como una sección nueva; las versiones anteriores se
mantienen para que puedas consultar la documentación del build que ejecutas.</div>

<h2 id="which">¿Qué documento necesito?</h2>
<table class="doc-table">
  <tr><th>Si eres…</th><th>Lee</th></tr>
  <tr><td>Usuario de la app (chat, llamadas, grupos, canales)</td><td><a href="#/v1/help">V1 · Guía de usuario</a></td></tr>
  <tr><td>Quien despliega servidor y clientes</td><td><a href="#/v1/dev">V1 · Guía de desarrollo</a></td></tr>
  <tr><td>Quien integra REST o el hub en tiempo real</td><td><a href="#/v1/api">V1 · Referencia de API</a></td></tr>
</table>

<h2 id="plans">Disponibilidad por plan</h2>
<p>El producto es un único código; tu plan decide qué partes se activan y qué se entrega.</p>
<table class="doc-table">
  <tr><th></th><th>Gratis</th><th>Pro</th><th>Empresa</th></tr>
  <tr><td>Cliente web</td><td>✓</td><td>✓</td><td>✓</td></tr>
  <tr><td>Clientes Android / iOS</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>Clientes de escritorio</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>Llamadas de audio y vídeo</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>Extensiones (mini-apps, plugins)</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>Panel de administración</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>Entrega</td><td>Build compilado</td><td>Build compilado</td><td>Código completo</td></tr>
  <tr><td>Desarrollo secundario</td><td>—</td><td>—</td><td>✓</td></tr>
</table>
<div class="doc-note">Todos los planes se ejecutan en <strong>tu propia infraestructura</strong>: mensajes, archivos y datos de usuario permanecen en tu propia base PostgreSQL.</div>
`,

  'v1.help': `
<h1>V1 — Guía de usuario</h1>
<p class="lead">Uso de AnyChat V1 como usuario final: cuentas, amigos, mensajería, llamadas, grupos, canales,
mini-apps y panel de administración. Las funciones no incluidas en tu plan se indican en
<a href="#availability">§8 Disponibilidad</a>.</p>

<h2 id="start">1. Primeros pasos</h2>
<table class="doc-table">
  <tr><th>Plataforma</th><th>Cómo obtenerla</th></tr>
  <tr><td>Web</td><td>Abre la URL que te indique tu administrador: no hay nada que instalar</td></tr>
  <tr><td>Android</td><td>Descarga el APK desde la página de descargas y permite «instalar desde este origen»</td></tr>
  <tr><td>iOS</td><td>Instala con TestFlight o un IPA firmado</td></tr>
  <tr><td>Windows / macOS</td><td>Ejecuta el instalador de escritorio</td></tr>
</table>
<ol>
  <li>Abre la app y pulsa <strong>Registrarse</strong>: elige nombre de usuario, apodo y contraseña.</li>
  <li>Entras automáticamente: no se requiere verificación por correo.</li>
  <li>Si la pantalla de acceso no tiene campo de servidor, la dirección se fijó con un enlace de configuración.</li>
</ol>
<div class="doc-note">Los builds de Android se dividen por arquitectura de CPU (se recomienda <code>arm64-v8a</code>). Si cambiaste la clave de firma, desinstala primero la versión anterior.</div>

<h2 id="config">2. Dirección del servidor y enlaces de configuración</h2>
<p>Puedes escribir la dirección a mano (Acceso → Ajustes) o escanear un enlace de configuración con
<em>Escanear</em> (pantalla de acceso o Descubrir):</p>
<pre><code>fairchat://config?api=https://chat.example.com&amp;name=AnyChat&amp;logo=https://…/logo.png&amp;download=https://…/download/</code></pre>
<table class="doc-table">
  <tr><th>Parámetro</th><th>Significado</th></tr>
  <tr><td><code>api</code></td><td>Dirección del servidor; oculta el campo una vez fijada</td></tr>
  <tr><td><code>name</code></td><td>Nombre de marca mostrado en la app</td></tr>
  <tr><td><code>logo</code></td><td>URL del logo (<code>http(s)://</code>)</td></tr>
  <tr><td><code>download</code></td><td>URL de la página de descarga (absoluta)</td></tr>
</table>
<p>Los ajustes se guardan en el dispositivo y se reutilizan al abrir la app.</p>

<h2 id="friends">3. Amigos y contactos</h2>
<ul>
  <li><strong>Buscar</strong>: Contactos → añadir amigo → escribe usuario o apodo → envía la solicitud.</li>
  <li><strong>Código QR</strong>: abre <em>Mi QR</em> para que te escaneen, o escanea a otra persona.</li>
  <li><strong>Solicitudes</strong>: aparecen con un contador en Contactos; acepta o rechaza desde ahí.</li>
  <li><strong>Eliminar</strong>: mantén pulsado un contacto → eliminar amigo.</li>
</ul>

<h2 id="chat">4. Mensajería</h2>
<ul>
  <li><strong>Texto</strong>: escribe y envía; el destinatario recibe un banner y un sonido.</li>
  <li><strong>Imágenes</strong>: adjunto → imagen → vista previa en línea.</li>
  <li><strong>Archivos</strong>: adjunto → archivo → el destinatario recibe un enlace.</li>
  <li><strong>Voz</strong>: mantén pulsado el micrófono para grabar y suelta para enviar.</li>
  <li><strong>Responder</strong>: mantén pulsado un mensaje → responder (citar).</li>
  <li><strong>Retirar</strong>: mantén pulsado tu mensaje → retirar.</li>
  <li><strong>Historial</strong>: desplázate hacia arriba para cargar mensajes anteriores.</li>
</ul>

<h2 id="groups">5. Grupos</h2>
<p>Contactos → crear grupo → elige miembros. Los mensajes, imágenes y archivos de grupo funcionan igual que en
los chats privados. El propietario puede añadir o quitar miembros desde el perfil del grupo.</p>

<h2 id="calls">6. Llamadas de audio y vídeo</h2>
<ul>
  <li><strong>Llamar</strong>: en un chat, pulsa el icono de teléfono (audio) o de cámara (vídeo).</li>
  <li><strong>Recibir</strong>: se abre la pantalla de llamada y suena un tono en bucle hasta que aceptas, rechazas o cuelga quien llama.</li>
  <li><strong>Permisos</strong>: concede micrófono (y cámara para vídeo) en el primer uso.</li>
  <li><strong>Finalizar</strong>: pulsa el botón rojo; el botón Atrás del sistema también cuelga, así que el tono siempre se detiene.</li>
</ul>
<p>Las llamadas son punto a punto. Detrás de NAT restrictivos se necesita un servidor TURN (ver la Guía de desarrollo).</p>

<h2 id="discover">7. Descubrir, mini-apps y panel de administración</h2>
<ul>
  <li><strong>Descubrir</strong>: feed de contenido por canales, gestionado desde el panel de administración.</li>
  <li><strong>Mini-apps</strong>: páginas H5 que se abren en el contenedor integrado con un JS bridge.</li>
  <li><strong>Panel de administración</strong>: usuarios, roles y permisos, auditoría, interruptores de funciones, canales y cuentas de servicio.</li>
</ul>

<h2 id="availability">8. Disponibilidad por plan</h2>
<table class="doc-table">
  <tr><th>Función</th><th>Gratis</th><th>Pro</th><th>Empresa</th></tr>
  <tr><td>Cliente web</td><td>✓</td><td>✓</td><td>✓</td></tr>
  <tr><td>Clientes Android / iOS / escritorio</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>Chat, imágenes, archivos, voz</td><td>✓</td><td>✓</td><td>✓</td></tr>
  <tr><td>Llamadas de audio y vídeo</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>Mini-apps y extensiones</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>Panel de administración y canales</td><td>—</td><td>✓</td><td>✓</td></tr>
  <tr><td>Marca blanca</td><td>—</td><td>—</td><td>✓</td></tr>
</table>

<h2 id="settings">9. Ajustes</h2>
<ul>
  <li>Tema: claro / oscuro / seguir al sistema, más colores de piel.</li>
  <li>Idioma: 简体中文、繁體中文、English、Español.</li>
  <li>Sobreescribir la dirección del servidor e importar enlaces de configuración.</li>
  <li>Buscar actualizaciones (builds de Android instaladas manualmente).</li>
</ul>

<h2 id="faq">10. Preguntas frecuentes</h2>
<p><strong>No puedo iniciar sesión.</strong> Revisa la dirección del servidor (Acceso → Ajustes); es la causa más habitual.</p>
<p><strong>No suena la notificación.</strong> Los navegadores bloquean el audio hasta que interactúas con la página: haz clic una vez.</p>
<p><strong>La llamada conecta pero no se oye.</strong> Revisa el permiso de micrófono y confirma con el administrador que el TURN sea alcanzable.</p>
<p><strong>«El servidor no admite llamadas».</strong> El servidor está desactualizado: actualiza ChatServer.</p>
<p><strong>La cámara no abre al escanear.</strong> El cliente web necesita HTTPS o <code>localhost</code>; en HTTP pega el enlace de configuración.</p>
<p><strong>Un contacto aparece desconectado.</strong> La presencia se envía por WebSocket; mientras el hub está desconectado el estado queda obsoleto.</p>
`,

  'v1.dev': `
<h1>V1 — Guía de desarrollo</h1>
<p class="lead">Despliegue, compilación, integración y (con el plan Empresa) personalización del código de AnyChat V1.
Los detalles de las peticiones están en la <a href="#/v1/api">Referencia de API</a>.</p>

<h2 id="arch">1. Arquitectura</h2>
<pre><code>Clientes (Flutter: Web / Android / iOS / Windows / macOS)
   │  HTTPS  REST /api/...
   │  WSS    SignalR /hubs/chat
   ▼
ASP.NET Core 10  (REST + SignalR Hub + archivos estáticos /files/...)
   │  EF Core
   ▼
PostgreSQL

Panel de administración (Flutter) ──► ChatServer (/api/admin)</code></pre>

<h2 id="ports">2. Puertos</h2>
<table class="doc-table">
  <tr><th>Componente</th><th>Puerto</th><th>Protocolo</th></tr>
  <tr><td>ChatServer (REST + SignalR + /files)</td><td>5298</td><td>HTTP/HTTPS, WebSocket</td></tr>
  <tr><td>PostgreSQL</td><td>5432</td><td>TCP</td></tr>
  <tr><td>TURN / STUN (llamadas)</td><td>3478, 5349 + rango de relay</td><td>UDP/TCP</td></tr>
</table>

<h2 id="req">3. Requisitos</h2>
<ul>
  <li>Runtime .NET 10 (SDK solo si compilas desde el código)</li>
  <li>PostgreSQL 14+</li>
  <li>Nginx (o cualquier hosting estático) para el cliente web</li>
  <li>Flutter 3.x para compilar los clientes desde el código</li>
</ul>

<h2 id="install">4. Levantar el stack</h2>
<pre><code># base de datos
cd server &amp;&amp; docker compose up -d

# servidor de chat
cd ChatServer &amp;&amp; dotnet publish -c Release -o out &amp;&amp; cd out &amp;&amp; dotnet ChatServer.dll
</code></pre>
<p>Ejecuta el servicio con systemd o en contenedores y define <code>ASPNETCORE_ENVIRONMENT=Production</code>.</p>

<h2 id="config">5. Configuración</h2>
<table class="doc-table">
  <tr><th>Clave</th><th>Variable de entorno</th><th>Uso</th></tr>
  <tr><td><code>ConnectionStrings:Default</code></td><td><code>ConnectionStrings__Default</code></td><td>PostgreSQL</td></tr>
  <tr><td><code>Jwt:Key</code></td><td><code>Jwt__Key</code></td><td>Firma del token, ≥32 caracteres</td></tr>
  <tr><td><code>Cors:Origins</code></td><td><code>Cors__Origins</code></td><td>Orígenes web permitidos (sin comodines)</td></tr>
  <tr><td><code>SeedAdmin:Password</code></td><td><code>SeedAdmin__Password</code></td><td>Contraseña inicial del administrador</td></tr>
  <tr><td><code>Urls</code></td><td><code>Urls</code></td><td>p. ej. <code>http://0.0.0.0:5298</code></td></tr>
</table>
<div class="doc-note">Fuera de Development, los secretos ausentes o con marcadores hacen que el proceso <strong>falle al arrancar</strong>, por diseño.</div>
<p>Comprueba con <code>curl {base}/health</code> → <code>Healthy</code> (verifica proceso <em>y</em> base de datos).</p>

<h2 id="nginx">6. Proxy inverso con Nginx</h2>
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

  client_max_body_size 100m;   # subida de archivos
}</code></pre>

<h2 id="webrtc">7. Llamadas: STUN / TURN</h2>
<p>El STUN público basta en la mayoría de redes. Con NAT simétrico o firewalls corporativos despliega coturn y
define la configuración ICE en el panel de administración (ajustes de funciones):</p>
<pre><code>{
  "iceServers": [
    { "urls": ["stun:stun.l.google.com:19302"] },
    { "urls": ["turn:turn.example.com:3478"],
      "username": "anychat",
      "credential": "secret" }
  ]
}</code></pre>

<h2 id="clients">8. Compilar los clientes</h2>
<pre><code># Web
flutter build web --dart-define=API_BASE=https://chat.example.com \\
                  --dart-define=DOWNLOAD_URL=https://example.com/download/

# Android (paquetes por ABI)
flutter build apk --split-per-abi --dart-define=API_BASE=https://chat.example.com

# iOS y escritorio: mismo enfoque con su toolchain y certificados</code></pre>

<h2 id="updates">9. Distribución de actualizaciones</h2>
<p>Aloja <code>version.json</code> (y los APK) en la página de descargas; los clientes Android lo consultan al
arrancar y avisan cuando <code>versionCode</code> aumenta.</p>
<pre><code>{
  "versionCode": 1788653049,
  "versionName": "0.1.35",
  "force": false,
  "changelog": "Correcciones varias",
  "apk": {
    "arm64-v8a": "chat-arm64-v8a.apk",
    "armeabi-v7a": "chat-armeabi-v7a.apk",
    "x86_64": "chat-x86_64.apk"
  }
}</code></pre>

<h2 id="source">10. Estructura del código (Empresa)</h2>
<pre><code>server/
└─ ChatServer/     # Aplicación única: API REST + SignalR Hub + API de administración (Controllers / Hubs / Services / Admin / Data)
client/
├─ flutter_chat/   # app de usuario (Flutter, todas las plataformas)
└─ flutter_admin/  # app de administración

client/flutter_chat/lib/
├─ main.dart       # ProviderScope, suscripción al hub, actualizaciones
├─ router.dart     # rutas de go_router
├─ config/         # AppConfig (dart-define), constants (nombres del hub)
├─ data/           # api_client.dart (Dio), signalr_client.dart
├─ models/         # DTO
├─ providers/      # Riverpod: auth, chat, call, conversations, notifications…
├─ pages/          # pantallas
├─ widgets/        # componentes compartidos
└─ services/       # webrtc, sound, actualizaciones…</code></pre>

<h2 id="extend">11. Ampliar (Empresa)</h2>
<ul>
  <li><strong>Endpoint REST</strong>: añade un controlador en <code>Controllers/</code>, registra el servicio y crea una migración de EF si persiste datos.</li>
  <li><strong>Capacidad en tiempo real</strong>: amplía <code>ChatHub.cs</code> manteniendo el nombre del método sincronizado con <code>lib/config/constants.dart</code>.</li>
  <li><strong>Pantalla</strong>: añádela en <code>pages/</code> y registra la ruta en <code>router.dart</code>.</li>
  <li><strong>Mini-app</strong>: aloja una página H5 y ábrela en el contenedor integrado; usa el JS bridge para avisos y navegación.</li>
</ul>
<pre><code>dotnet ef migrations add AddFeatureX
dotnet ef database update</code></pre>

<h2 id="whitelabel">12. Marca blanca</h2>
<table class="doc-table">
  <tr><th>Elemento</th><th>Cómo</th></tr>
  <tr><td>Nombre de la app</td><td><code>app_name</code> o parámetro <code>name</code> del enlace</td></tr>
  <tr><td>Logo y tema</td><td>parámetro <code>logo</code>; <code>theme.dart</code>, <code>app_colors.dart</code></td></tr>
  <tr><td>Dirección del servidor</td><td><code>--dart-define=API_BASE=…</code> o parámetro <code>api</code></td></tr>
  <tr><td>Id de paquete / bundle</td><td>Android <code>applicationId</code>, iOS <code>PRODUCT_BUNDLE_IDENTIFIER</code></td></tr>
  <tr><td>Descargas y actualizaciones</td><td><code>--dart-define=DOWNLOAD_URL=…</code> + <code>version.json</code> alojado</td></tr>
</table>

<h2 id="ops">13. Operación</h2>
<ul>
  <li>Salud: <code>GET /health</code> en cada servicio (comprueba también la base de datos).</li>
  <li>Copias: <code>pg_dump</code> diario más el directorio de subidas <code>/files</code>.</li>
  <li>Migraciones: usa <code>dotnet ef migrations add</code> + <code>database update</code> en lugar de <code>EnsureCreated</code>.</li>
  <li>Registros: vigila los bucles de reconexión del hub y los fallos de asignación en TURN.</li>
</ul>

<h2 id="trouble">14. Solución de problemas</h2>
<ul>
  <li><code>/health</code> no está sano → base de datos inaccesible o cadena incorrecta.</li>
  <li>Error de CORS en consola → añade el origen exacto a <code>Cors:Origins</code>.</li>
  <li>No llegan mensajes → el proxy bloquea la actualización a WebSocket (ver el bloque <code>/hubs/</code>).</li>
  <li>Falla al arrancar → <code>Jwt:Key</code> ausente o todavía un marcador.</li>
  <li>Las llamadas fallan entre NAT → TURN sin configurar o puertos bloqueados.</li>
</ul>
`,

  'v1.api': `
<h1>V1 — Referencia de API</h1>
<p class="lead">Contrato completo del backend de AnyChat V1: endpoints REST, SignalR Hub, estructuras de datos y
códigos de error. <code>{base}</code> representa la dirección de tu servidor (p. ej. <code>https://chat.example.com</code>).</p>

<h2 id="conventions">1. Convenciones</h2>
<ul>
  <li><strong>Auth</strong>: <code>Authorization: Bearer &lt;token&gt;</code> en todos los endpoints salvo registro y login.</li>
  <li><strong>Tipo de contenido</strong>: <code>application/json</code>; la subida de archivos usa <code>multipart/form-data</code>.</li>
  <li><strong>Tiempo</strong>: UTC ISO-8601 (p. ej. <code>2026-09-08T12:34:56Z</code>).</li>
  <li><strong>Enums</strong>: se serializan como cadenas — <code>Private</code>/<code>Group</code>, <code>Text</code>/<code>Image</code>/<code>File</code>/<code>Voice</code>, <code>Voice</code>/<code>Video</code>.</li>
  <li><strong>Errores</strong>: los fallos del hub lanzan <code>HubException</code> con un prefijo de código (ver §13).</li>
</ul>

<h2 id="auth">2. Autenticación</h2>
<table class="doc-table">
  <tr><th>Método</th><th>Ruta</th><th>Auth</th><th>Cuerpo → Respuesta</th></tr>
  <tr><td>POST</td><td><code>/api/auth/register</code></td><td>—</td><td><code>{userName, password, nickName}</code> → <code>{token, user}</code></td></tr>
  <tr><td>POST</td><td><code>/api/auth/login</code></td><td>—</td><td><code>{userName, password}</code> → <code>{token, user}</code></td></tr>
  <tr><td>POST</td><td><code>/api/auth/change-password</code></td><td>✓</td><td>Cambiar la contraseña actual</td></tr>
</table>
<pre><code>curl -X POST {base}/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"userName":"alice","password":"123456"}'

# → {"token":"eyJhbGciOi...","user":{"id":"...","userName":"alice",...}}</code></pre>

<h2 id="users">3. Usuarios</h2>
<table class="doc-table">
  <tr><th>Método</th><th>Ruta</th><th>Descripción</th></tr>
  <tr><td>GET</td><td><code>/api/users/me</code></td><td>Usuario actual</td></tr>
  <tr><td>GET</td><td><code>/api/users/search?q=</code></td><td>Buscar por usuario o apodo (excluye al propio)</td></tr>
  <tr><td>GET</td><td><code>/api/users/online</code></td><td>Ids de usuarios en línea</td></tr>
  <tr><td>GET</td><td><code>/api/users/me/card</code></td><td>Mi tarjeta de contacto (contenido del QR)</td></tr>
  <tr><td>GET</td><td><code>/api/users/{id}/profile</code></td><td>Perfil público</td></tr>
  <tr><td>GET</td><td><code>/api/users/service-list</code></td><td>Cuentas de servicio</td></tr>
</table>

<h2 id="friends">4. Amigos</h2>
<table class="doc-table">
  <tr><th>Método</th><th>Ruta</th><th>Descripción</th></tr>
  <tr><td>POST</td><td><code>/api/friends/request</code></td><td>Cuerpo <code>"&lt;friendId&gt;"</code> — enviar solicitud</td></tr>
  <tr><td>GET</td><td><code>/api/friends/requests</code></td><td>Solicitudes pendientes recibidas</td></tr>
  <tr><td>POST</td><td><code>/api/friends/accept</code></td><td>Cuerpo <code>"&lt;friendId&gt;"</code> — aceptar</td></tr>
  <tr><td>GET</td><td><code>/api/friends</code></td><td>Mis amigos</td></tr>
  <tr><td>DELETE</td><td><code>/api/friends/{friendId}</code></td><td>Eliminar amigo</td></tr>
</table>

<h2 id="groups">5. Grupos</h2>
<table class="doc-table">
  <tr><th>Método</th><th>Ruta</th><th>Descripción</th></tr>
  <tr><td>POST</td><td><code>/api/groups</code></td><td><code>{name, memberIds}</code> — crear (eres Owner)</td></tr>
  <tr><td>GET</td><td><code>/api/groups</code></td><td>Grupos a los que pertenezco</td></tr>
  <tr><td>GET</td><td><code>/api/groups/{id}</code></td><td>Detalle del grupo</td></tr>
</table>

<h2 id="messages">6. Mensajes</h2>
<table class="doc-table">
  <tr><th>Método</th><th>Ruta</th><th>Descripción</th></tr>
  <tr><td>POST</td><td><code>/api/messages/private</code></td><td>Enviar un privado por REST (canal alternativo)</td></tr>
  <tr><td>GET</td><td><code>/api/messages/private/{friendId}?before=ISO&amp;count=30</code></td><td>Historial privado (ascendente)</td></tr>
  <tr><td>GET</td><td><code>/api/messages/group/{groupId}?before=ISO&amp;count=30</code></td><td>Historial del grupo</td></tr>
  <tr><td>POST</td><td><code>/api/messages/hide/{messageId}</code></td><td>Ocultar un mensaje para mí</td></tr>
  <tr><td>POST</td><td><code>/api/messages/clear-all</code></td><td>Vaciar mis mensajes</td></tr>
</table>

<h2 id="conversations">7. Conversaciones</h2>
<p><code>GET /api/conversations</code> — amigos y grupos con último mensaje, contador de no leídos, estado en línea y
marca de tiempo, ordenados del más reciente al más antiguo.</p>

<h2 id="files">8. Archivos</h2>
<pre><code>curl -X POST {base}/api/files/upload \\
  -H "Authorization: Bearer &lt;token&gt;" \\
  -F "file=@photo.png"

# → {"url":"/files/xxx.png","contentType":"image/png","size":12345}</code></pre>
<div class="doc-note">Flujo de medios en dos pasos: primero sube el archivo para obtener <code>url</code> y después envíalo
por el hub con <code>type="Image"|"File"|"Voice"</code> y <code>mediaUrl=&lt;url&gt;</code>. El texto usa
<code>type="Text"</code> y <code>mediaUrl=null</code>.</div>

<h2 id="discover">9. Descubrir y funciones</h2>
<table class="doc-table">
  <tr><th>Método</th><th>Ruta</th><th>Descripción</th></tr>
  <tr><td>GET</td><td><code>/api/discover</code></td><td>Columnas y contenido de Descubrir</td></tr>
  <tr><td>GET</td><td><code>/api/discover/pinned</code></td><td>Contenido fijado</td></tr>
  <tr><td>GET</td><td><code>/api/discover/pinned-meta</code></td><td>Metadatos del contenido fijado</td></tr>
  <tr><td>GET</td><td><code>/api/features</code></td><td>Interruptores de funciones y configuración (incl. ICE de WebRTC)</td></tr>
</table>

<h2 id="hub">10. SignalR Hub</h2>
<p>Conecta a <code>{base}/hubs/chat</code> enviando el JWT en el parámetro de consulta <code>access_token</code>.
El servidor une la conexión a los grupos de SignalR de todas las conversaciones del usuario.</p>

<h3 id="hub-methods">10.1 Cliente → servidor</h3>
<table class="doc-table">
  <tr><th>Método</th><th>Argumentos</th><th>Descripción</th></tr>
  <tr><td><code>SendPrivateMessage</code></td><td><code>(toUserId, content, type?, mediaUrl?)</code></td><td>Mensaje privado; ambos deben ser amigos</td></tr>
  <tr><td><code>SendGroupMessage</code></td><td><code>(groupId, content, type?, mediaUrl?)</code></td><td>Mensaje de grupo; hay que ser miembro</td></tr>
  <tr><td><code>RecallMessage</code></td><td><code>(messageId)</code></td><td>Retirar mi mensaje</td></tr>
  <tr><td><code>SendTyping</code></td><td><code>(toUserId, isTyping)</code></td><td>Indicador «escribiendo»</td></tr>
  <tr><td><code>JoinGroup</code> / <code>LeaveGroup</code></td><td><code>(groupId)</code></td><td>Entrar / salir del canal del grupo</td></tr>
  <tr><td><code>CallUser</code></td><td><code>(toUserId, type)</code></td><td>Iniciar llamada; devuelve <code>sessionId</code></td></tr>
  <tr><td><code>AcceptCall</code> / <code>RejectCall</code> / <code>EndCall</code></td><td><code>(sessionId)</code></td><td>Control de la llamada</td></tr>
  <tr><td><code>SendOffer</code> / <code>SendAnswer</code></td><td><code>(sessionId, sdp)</code></td><td>Intercambio de SDP WebRTC</td></tr>
  <tr><td><code>SendIceCandidate</code></td><td><code>(sessionId, candidate)</code></td><td>Candidato ICE (cadena JSON)</td></tr>
</table>

<h3 id="hub-events">10.2 Servidor → cliente</h3>
<table class="doc-table">
  <tr><th>Evento</th><th>Carga</th><th>Descripción</th></tr>
  <tr><td><code>ReceiveMessage</code></td><td><code>MessageDto</code></td><td>Nuevo mensaje (el privado también vuelve al emisor)</td></tr>
  <tr><td><code>MessageRecalled</code></td><td><code>MessageDto</code></td><td>Un mensaje fue retirado</td></tr>
  <tr><td><code>OnTyping</code></td><td><code>userId</code></td><td>El interlocutor está escribiendo</td></tr>
  <tr><td><code>UserOnline</code> / <code>UserOffline</code></td><td><code>userId</code></td><td>Cambios de presencia</td></tr>
  <tr><td><code>ReceiveFriendRequest</code></td><td><code>FriendRequestDto</code></td><td>Solicitud de amistad entrante</td></tr>
  <tr><td><code>IncomingCall</code></td><td><code>IncomingCallDto</code></td><td>Te están llamando</td></tr>
  <tr><td><code>CallAccepted</code></td><td><code>CallAcceptedDto</code></td><td>El destinatario aceptó</td></tr>
  <tr><td><code>CallEnded</code></td><td><code>CallEndedDto</code></td><td>Llamada finalizada con motivo</td></tr>
  <tr><td><code>ReceiveOffer</code> / <code>ReceiveAnswer</code></td><td><code>CallSdpDto</code></td><td>Intercambio de SDP</td></tr>
  <tr><td><code>ReceiveIceCandidate</code></td><td><code>CallIceCandidateDto</code></td><td>Candidato ICE</td></tr>
</table>

<h2 id="dto">11. Estructuras de datos</h2>
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
<p><strong>Ids de conversación</strong> (calculables localmente): privada <code>p_{guidA}_{guidB}</code> con los dos
ids ordenados como cadenas; grupo <code>g_{groupId}</code>.</p>

<h2 id="flows">12. Flujos habituales</h2>
<pre><code># enviar un mensaje
1. POST /api/auth/login                  → token
2. conectar /hubs/chat?access_token=token
3. invoke("SendPrivateMessage", toUserId, "hi", "Text", null)
4. on("ReceiveMessage")                  → MessageDto

# enviar una imagen
1. POST /api/files/upload (multipart)    → { url }
2. invoke("SendPrivateMessage", toUserId, "", "Image", url)

# señalización de llamada
emisor : invoke("CallUser", toUserId, "Video") → sessionId
receptor: on("IncomingCall") → invoke("AcceptCall", sessionId)
emisor : on("CallAccepted") → createOffer → invoke("SendOffer", sessionId, sdp)
receptor: on("ReceiveOffer") → setRemote → createAnswer → invoke("SendAnswer", …)
ambos  : intercambian ICE con SendIceCandidate / ReceiveIceCandidate
cualquiera: invoke("EndCall", sessionId) → on("CallEnded")</code></pre>

<h2 id="errors">13. Códigos de error</h2>
<table class="doc-table">
  <tr><th>Código</th><th>Significado</th><th>Acción sugerida</th></tr>
  <tr><td><code>E_FRIEND_REQUIRED</code></td><td>Todavía no son amigos</td><td>Sugerir añadir amigo</td></tr>
  <tr><td><code>E_TARGET_NOT_FOUND</code></td><td>Usuario o grupo inexistente</td><td>Actualizar la lista de contactos</td></tr>
  <tr><td><code>E_BAD_TARGET</code></td><td>Id con formato incorrecto</td><td>Revisar el formato del id</td></tr>
  <tr><td><code>E_EMPTY</code></td><td>Mensaje vacío</td><td>Bloquear contenido vacío</td></tr>
  <tr><td><code>E_SERVER</code></td><td>Fallo inesperado</td><td>Reintentar y revisar los logs del servidor</td></tr>
</table>
<p>Los fallos REST usan códigos de estado HTTP estándar; los fallos del hub llegan como <code>HubException</code> cuyo
mensaje empieza por uno de los códigos anteriores seguido de <code>: </code> y un texto legible.</p>
`,
};
