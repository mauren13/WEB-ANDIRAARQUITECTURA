# ANDIRA Arquitectura · sitio web

Sitio estático de ANDIRA Arquitectura (Cartago, Costa Rica): HTML, CSS y JavaScript sin dependencias ni paso de compilación. La tipografía Inter Tight se carga desde Google Fonts.

En línea: <https://andiraarquitectura.com>

## Estructura

```
├── index.html               Portada (collage)
├── proyectos.html           Listados en collage
├── colaboraciones.html
├── bitacora.html
├── proyecto-*.html          Páginas de proyecto (formato artículo)
├── escala-grises.html       Textos de la bitácora (formato artículo)
├── acustica-ventanas.html
├── leed.html
├── estudio.html             Quiénes somos y contacto
├── contacto.html            Redirige a estudio.html#contacto
├── estilos.css              Todos los estilos (índice al inicio del archivo)
├── collage.js               Reparte las tarjetas del collage en columnas
├── intro.js                 Intro de la portada (una vez por visita; ?intro la repite)
├── img/                     Imágenes, nombradas proyecto-vista.jpg
└── .github/workflows/       Publicación automática
```

Las páginas viven en la raíz para que sus URL sean cortas (`/proyecto-cartago.html`). `estilos.css`, `collage.js` e `intro.js` también van en la raíz: al moverlos a `css/` y `js/` (2026-11-13) el servidor no publicó esas carpetas y respondió 404, mientras que `img/` sí se publica. Antes de crear carpetas nuevas hay que revisar el script `actualizar` del servidor.

## Ver el sitio en local

Abrir `index.html` en el navegador funciona. Para probar como en el servidor (rutas, caché desactivada), servir la carpeta con cualquier servidor estático, por ejemplo:

```bash
python -m http.server 8770
```

## Publicación

Cada `push` a `main` que toque HTML, CSS, JS o imágenes ejecuta `.github/workflows/publicar.yml`, que entra por SSH al servidor y ejecuta `actualizar`. El servidor descarga el repositorio, así que debe poder leerlo: si el repositorio es privado necesita una clave de solo lectura (*deploy key*).

## Convenciones

**CSS.** Un solo archivo, ordenado en secciones numeradas (variables, base, encabezado, pie, collage, tarjetas, artículo, adaptaciones). Colores, tipografía y medidas se cambian en las variables de `:root`; no se usan colores ni medidas sueltas en las reglas. Cada cambio se integra en la regla de su sección, no como bloque al final. Sin `!important`, salvo en la regla de movimiento reducido.

**Clases.** Notación BEM: bloque (`card`, `post`), elemento (`card__title`, `post__fig`) y variante (`card--side`, `card--statement`). `f1` a `f4` asignan el fucsia de cada sección: Proyectos, Colaboraciones, Bitácora y Estudio.

**HTML.** Sin estilos en línea, salvo `--r`, que fija la proporción de cada imagen del collage. Los comentarios indican el origen de los textos; los marcados como «texto original» no se editan.

**Imágenes.** JPG de hasta 1400 px de lado; PNG solo cuando hace falta exactitud de color (escala de grises). Las renderizaciones se recortan para quitar el logo de la esquina.

**Commits.** Uno por cambio, con un título en imperativo que diga qué cambia y un cuerpo que explique por qué. Cada versión publicada se etiqueta (`v1.0` … `v5`) y se resume en [CHANGELOG.md](CHANGELOG.md).
