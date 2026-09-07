# SKAI Research Group — local prototype

Prototipo multipágina de la web de SKAI con navegación ES/EN.

## Opción 1 — macOS / Linux (recomendada)

Desde esta carpeta:

```bash
python3 -m http.server 8000
```

Abrir después:

```text
http://localhost:8000/
```

En macOS también puedes hacer doble clic en `serve.command`.

## Opción 2 — Docker

```bash
docker compose up --build
```

Abrir después `http://localhost:8080/`.

## Estructura

- `index.html`: Home
- `research.html`: líneas de investigación
- `team.html`: equipo
- `projects.html`: proyectos
- `vacancies.html`: TFG, TFM, Doctorado y Trabajo
- `contact.html`: contacto
- `styles.css`: estilos y paleta corporativa SKAI
- `script.js`: idioma, equipo y filtros de vacantes
- `assets/images/skai-research-group.png`: logo SKAI proporcionado para el header

> Nota: el prototipo mantiene por ahora el logo UPM y el favicon referenciados desde el repositorio público actual de SKAI. El resto del prototipo está incluido en este paquete.


## Notes

- The team page now supports profile photos per researcher.
- Four sample local photos are already included under `assets/images/`.


## Researcher profile links

Each researcher can independently define `scholar`, `linkedin`, `orcid` and `portal` in `script.js`. Links are active when a URL is available and appear disabled otherwise.
