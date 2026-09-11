# SKAI Research Group — web multipágina

Web estática de SKAI con contenido dinámico separado por secciones y navegación ES/EN.

## Contenido dinámico

El contenido que se modifica con más frecuencia está separado en cuatro ficheros JavaScript:

- `team.js`: miembros del equipo, afiliaciones, fotos y perfiles.
- `research.js`: líneas de investigación.
- `projects.js`: proyectos.
- `vacancies.js`: TFG, TFM, doctorado y ofertas de trabajo.
- `script.js`: lógica común de renderizado, idioma, menú y filtros. **No contiene los datos de las secciones.**
- `loader.js`: decide de dónde cargar los JavaScript.

### Funcionamiento en producción

Las páginas HTML tienen configuradas explícitamente las URLs de la rama `main` del repositorio:

`https://raw.githubusercontent.com/skai-upm/web-grupo/refs/heads/main/`

Por ejemplo, `team.html` carga `team.js` y `script.js` desde GitHub. `research.html` hace lo mismo con `research.js`, etc. El `loader.js` añade un parámetro anti-caché para que al recargar la página se solicite la versión más reciente disponible en `main`.

Esto permite cambiar miembros, vacantes, líneas o proyectos haciendo commit/push únicamente del fichero JavaScript correspondiente.

### Funcionamiento en local

Para poder probar este ZIP **antes de subir los nuevos JS a GitHub**, `loader.js` detecta `localhost`, `127.0.0.1` y `file://` y utiliza automáticamente las copias locales de `team.js`, `research.js`, `projects.js`, `vacancies.js` y `script.js`.

Si una carga remota falla en producción, se intenta además usar la copia local incluida como fallback.

Para comprobar desde `localhost` exactamente la carga remota después de hacer `git push`, puede abrirse, por ejemplo, `http://localhost:8000/team.html?remote=1`. Para forzar las copias locales puede usarse `?local=1`.

## Probar en local

### Python

```bash
python3 -m http.server 8000
```

Abrir:

```text
http://localhost:8000/
```

En macOS también puede utilizarse `serve.command`.

### Docker

```bash
docker compose up --build
```

Abrir:

```text
http://localhost:8080/
```

## Estructura

- `index.html`: Home
- `research.html`: líneas de investigación
- `team.html`: equipo
- `projects.html`: proyectos
- `vacancies.html`: oportunidades
- `contact.html`: contacto
- `team.js`: datos de equipo
- `research.js`: datos de investigación
- `projects.js`: datos de proyectos
- `vacancies.js`: datos de oportunidades
- `script.js`: lógica común
- `loader.js`: carga local/remota de JS
- `styles.css`: estilos
- `assets/`: imágenes y recursos

## Importante

En producción, el JavaScript se ejecuta directamente desde la rama `main`. Por tanto, cualquier persona con permisos de escritura sobre ese repositorio puede modificar el contenido y el código que ejecuta la web. Es el comportamiento buscado para esta instalación, pero conviene proteger la rama `main` y revisar los cambios antes de hacer merge.

## Remote content loader

The dynamic section files (`team.js`, `research.js`, `projects.js`, `vacancies.js`) and the common `script.js` are loaded from the GitHub URLs declared in each HTML page.

The loader intentionally uses `fetch()` + a JavaScript Blob instead of adding `raw.githubusercontent.com` directly as a `<script src>`. GitHub Raw serves JavaScript files as `text/plain`, which can be blocked by strict browser MIME checks.

Performance changes:

- the section JS and `script.js` are downloaded in parallel;
- the previous `?v=Date.now()` cache-busting has been removed;
- section content is revalidated using the browser HTTP cache;
- the shared `script.js` uses normal browser caching;
- pages preconnect to `raw.githubusercontent.com`.

After pushing a change to GitHub, the normal page reload will revalidate the section data. During testing, append `?refresh=1` to force a completely fresh GitHub request, for example:

    https://skai.etsisi.upm.es/projects.html?refresh=1

Local Docker/localhost uses the packaged JS by default. Append `?remote=1` to test the GitHub path from localhost.
