# Decisiones del sitio

Registro de lo acordado y su motivo, para no volver a discutirlo. Lo que cambia en cada versión está en [CHANGELOG.md](../CHANGELOG.md); las medidas y colores, en [identidad-grafica.md](identidad-grafica.md).

## Contenido

- **Textos de las socias, tal cual.** Los textos que entregan Mauren López o Stephanie Solano se publican sin cambiar la redacción. En el HTML van marcados con el comentario «Texto original». Solo se corrigen errores evidentes de copiado, y se avisa.
- **Autoría y fechas.** No se inventan autores ni fechas. Sin autor, la tarjeta dice «Por ANDIRA»; sin fecha, «Fecha pendiente».
- **Menú.** Proyectos · Acústica · Bitácora · Estudio · Contacto. Acústica reemplazó a Colaboraciones (v5.6); la página `colaboraciones.html` sigue existiendo fuera del menú. Cuando haya más contenido se revisará qué sección se quita o ajusta.
- **Estudio.** Presentación del estudio con los retratos en cuadrado, después del primer párrafo. Al final enlaza a la carta del nombre.
- **Carta del nombre** (`nombre.html`). Página propia sobre *Andira inermis*, con tarjeta en la portada y enlace desde Estudio. Las ilustraciones salen de una lámina botánica (`fuentes/andira-inermis-lamina.webp`): la rama en la tarjeta, y la flor y los botones florales dentro de la carta. Se quitaron las cotas y rótulos porque no estaban bien indicadas; `fuentes/recortar-lamina.ps1` repite el recorte.
- **Post de grises.** La tabla de valores RGB y hexadecimales abre el artículo porque el estudio la consulta para actualizar otros documentos. La franja horizontal va en «Registro de la escala» y es la imagen de la tarjeta en la portada.

## Contacto y privacidad

- **Un solo número público:** el WhatsApp del negocio, (506) 6178-4433. Ningún número personal aparece en el sitio.
- **Correos protegidos.** Las direcciones no están escritas en el HTML: `contacto.js` las arma al pulsar «Mostrar correos», para que los programas que recolectan correos no las encuentren.
- **Historial público.** El repositorio es público para que el servidor pueda descargarlo. Commits antiguos contienen datos de contacto que ya no se usan; queda pendiente decidir si se pasa a privado con una clave de solo lectura o se reescribe el historial.

## Técnica

- **Sin dependencias ni compilación.** HTML, CSS y JavaScript simples, para que cualquier persona pueda mantenerlo.
- **Archivos en la raíz.** `estilos.css` y los scripts van en la raíz: el script `actualizar` del servidor no publicó las carpetas `css/` y `js/` (v5, 2026-11-13). Esta carpeta `docs/` tampoco se publica, y no hace falta.
- **Caché.** Las páginas piden los estilos y scripts con `?v=` y la versión. Cada publicación que cambie CSS o JS sube ese número en todas las páginas; sin esto, los navegadores mostraban la página nueva con los estilos viejos (v5.10).
- **Cambios reversibles.** Lo que no gusta se deshace con `git revert`, sin borrar historial. Cada versión publicada lleva su etiqueta (`v5.6`, `v5.7`…).
- **Publicación.** Cada `push` a `main` publica el sitio. No se publica sin la aprobación explícita de las socias.

## Forma de trabajo

- Las respuestas y los textos, en español, sin frases genéricas ni clichés comerciales: datos concretos o menos texto.
- Una pregunta a la vez, con opciones.
- Orden profesional en código, carpetas, commits y documentación: el sitio lo revisa un informático.
- Antes de publicar, cada cambio se revisa en local, en escritorio y en teléfono.
