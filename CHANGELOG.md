# Registro de versiones

## v5.13 · 2026-11-25
- Portada: la tarjeta de la carta del nombre baja a la parte final del collage, después de LEED.

## v5.12 · 2026-11-25
- Carta del nombre: la tarjeta de la portada lleva el dibujo de la rama de *Andira inermis* y dos frases de la carta. Dentro de la carta, la flor y los botones florales.
- Ilustraciones recortadas de una lámina botánica, sin cotas ni rótulos. El original y el script de recorte quedan en `fuentes/`.

## v5.11 · 2026-11-25
- Contacto tiene su propio fucsia (#FBD9EC), más tenue que Estudio: la degradación del menú sigue de Proyectos a Contacto sin cortarse.
- Documentación nueva en `docs/`: identidad gráfica, decisiones y pendientes.

## v5.10 · 2026-11-25
- Las páginas piden `estilos.css` y los scripts con el número de versión (`?v=5.10`). Así el navegador descarga los estilos nuevos al publicar, en lugar de mostrar la página con la copia anterior (que en el post de grises dejaba un hueco junto a la tabla).

## v5.9 · 2026-11-25
- Color y percepción: la tabla de valores RGB y hexadecimales pasa al inicio, al costado del texto, para consultarla sin bajar. La franja horizontal de grises va en «Registro de la escala». Se elimina el hueco en blanco que dejaba la tabla junto a un texto corto.

## v5.8 · 2026-11-24
- Bitácora: el texto de la escala de grises se reemplaza por «Color y percepción en la documentación arquitectónica», con dos referencias (W3C y CIE) enlazadas. Las tarjetas de la portada y de Bitácora llevan el título nuevo.
- Los enlaces de las referencias ya no cortan palabras a mitad de línea; solo las URL largas se parten.

## v5.7 · 2026-11-21
- Página nueva «Andira · El origen de nuestro nombre» (nombre.html), con la carta sobre *Andira inermis*, fechada el 21-11-2026. Se enlaza desde una tarjeta de la portada y desde el final de Estudio.

## v5.6 · 2026-11-14
- Vuelve el collage de 3 columnas con ancho máximo de 1360 px, como en Patch: se revierte el cambio de 4 y 5 columnas en pantallas anchas.
- El menú cambia «Colaboraciones» por «Acústica», que lleva a un listado nuevo (acustica.html). Colaboraciones queda fuera del menú.
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
