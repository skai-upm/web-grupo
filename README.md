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
