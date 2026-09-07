SKAI — prototipo multipágina
==============================

Esta versión mantiene el diseño del prototipo v3, pero cada sección es una página HTML independiente:

  index.html       Inicio / Home
  research.html    Investigación / Research
  team.html        Equipo / Team
  projects.html    Proyectos / Projects
  vacancies.html   Vacantes / Vacancies
  contact.html     Contacto / Contact

El selector ES/EN conserva el idioma entre páginas mediante localStorage.
El menú marca la página activa y los botones de la portada navegan a páginas reales.

PROBAR EN macOS
---------------
1. Descomprime el ZIP.
2. Haz doble clic en serve.command.
3. Se abrirá http://localhost:8000/
4. Para detener el servidor, pulsa Ctrl+C en Terminal.

Alternativa:

  cd skai_multipage_preview
  python3 -m http.server 8000

Luego abre http://localhost:8000/

NOTAS
-----
- No modifica ni publica nada en el repositorio oficial.
- No requiere dependencias adicionales.
- Los logos SKAI/UPM y el favicon se cargan desde el repositorio público actual de SKAI.
- Las vacantes mostradas siguen siendo ejemplos.
- En la versión Jekyll definitiva, header/footer, datos de equipo, proyectos y vacantes se compartirán mediante _includes y _data, evitando duplicación.


CAMBIOS DE ESTA VERSION
- Tipografia global ampliada y ancho util aumentado.
- Fichas de equipo con despacho, email, departamento, escuela/centro y universidad.
- Vacantes reordenadas: TFG, TFM, Doctorado y Trabajo.
