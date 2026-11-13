# Registro de versiones

## v5.5 · 2026-11-13
- El collage llena pantallas anchas: 4 columnas desde 1700 px de grilla y 5 desde 2200 px (antes, máximo 3 y ancho fijo de 1360 px). Las líneas entre columnas se dibujan para 2 a 5 columnas.
- El recuadro del título sobre la imagen pasa a 60 % de blanco.

## v5.4 · 2026-11-13
- Estudio: texto nuevo de presentación del estudio, con los retratos de las socias en cuadrado y a todo el ancho después del primer párrafo.
- Página de Contacto: WhatsApp del negocio, redes y un botón «Mostrar correos» (las direcciones se arman al hacer clic, no están en el HTML). El menú enlaza a esta página.
- Autoría: las publicaciones sin autor pasan a «Por ANDIRA»; acristalamiento acústico, por Mauren López (13-11-2026); fechas de Oasis Beach Club (15-01-2026) y Doña Victoria (10-03-2026).
- La pestaña de categoría pasa a una segunda línea si no cabe, en lugar de salirse de la columna.
- El recuadro del título sobre la imagen (Alora House, Oficinas en Alajuela) es translúcido.

## v5.3 · 2026-11-13
- El icono de WhatsApp y el contacto de Estudio usan el número del negocio, (506) 6178-4433. Se quitan los números anteriores.
- «Contacto» vuelve al menú, después de Estudio, y abre el WhatsApp del negocio.

## v5.2 · 2026-11-13
- Intro en la portada: la página abre en blanco, el logo aparece al centro, hace una pausa de 1 s y viaja a su lugar en el encabezado mientras aparece la página (unos 3,5 s). Se muestra una vez por visita y no aparece con «reducir movimiento» activado. Con `?intro` en la dirección se repite, para revisarla.

## v5.1 · 2026-11-13
- `estilos.css` y `collage.js` vuelven a la raíz: en v5 estaban en `css/` y `js/`, el servidor no publicó esas carpetas y el sitio quedó sin estilos unos minutos.

## v5 · 2026-11-13
Gráfica editorial
- Tipografía Inter Tight en lugar de Oswald y Roboto. Proporciones tomadas de una referencia editorial: título de 33 px, texto de 16,4 / 21,7 px y etiquetas de 9,6 px.
- Artículos con columna de texto de 525 px e imágenes de 861 px. La categoría va sobre el título y el autor y la fecha, debajo.
- Bloques de solo texto y franjas sobre las imágenes sin fondo negro.
- Líneas de 1 px (tono 2 de la escala) entre columnas y tarjetas del collage, con 40 px de aire. Con el cursor encima, la pestaña de categoría queda a la misma distancia de su línea que la tarjeta de la suya.

Contenido
- Páginas para la sucursal de Cartago, la sucursal de Heredia, Casa El Abanico, Casa El Farolito, ¿Jardín o sala de espera?, Oficinas en Alajuela y la oficina de TI.

Correcciones
- Las tarjetas sin página ya no enlazan a `#`, que llevaba al inicio.
- En el teléfono, el collage ya no se rearma al ocultarse la barra del navegador, que hacía saltar la página hacia arriba.

Código
- `estilos.css` reorganizado por secciones, con variables y sin `!important`.
- Sin estilos en línea ni comentarios internos en el HTML. README con estructura, publicación y convenciones.

## v4 · 2026-10-30
- Menú: Proyectos, Colaboraciones, Bitácora y Estudio. El contacto pasa al final de Estudio.
- Páginas de listado para Proyectos, Colaboraciones y Bitácora.
- Pestañitas con las medidas de Patch, una gama de cuatro fucsias por sección y formato de autor y fecha.
- Bloques oscuros de solo texto en #0B0C0E.
- Nuevas imágenes principales en Oasis Beach Club y la sucursal de Cartago.

## v3 · 2026-10-30
- Color de énfasis definitivo: fucsia #E6007E.

## v2-coral · 2026-10-30
- Variante con énfasis coral #DC4141.

## v2 · 2026-10-30
- Mismo contenido que v1.3, con nombre corto.

## v1.3-azul · 2026-10-30
- Artículo sobre sistemas de acristalamiento acústico.

## v1.2-azul · 2026-10-30
- Doña Victoria, Oasis Beach Club, Musikar y escala de grises.
- Grises tomados de la escala propia, sin negro puro.
- Proyectos, Estudio y LEED en formato de artículo.

## v1.1-azul · 2026-10-30
- Variante de v1.1 con énfasis azul ANDIRA #565C80.

## v1.1-fucsia · 2026-10-30
- Alora House como proyecto más reciente, con su página.

## v1.0 · 2026-10-30
- Primera versión: portada en collage inspirada en el tema Patch, Estudio, LEED, Contacto y Una casa en el paraíso.
