# Identidad gráfica del sitio

Valores vigentes en `estilos.css` (sección 1, Variables). Si se cambia algo aquí, se cambia también en la variable correspondiente, y al revés.

## Tipografía

Una sola familia: **Inter Tight**, desde Google Fonts, en tres pesos.

| Peso | Uso |
|---|---|
| 300 Light | Cuerpo base del sitio y frase destacada de las notas (`post__note-title`) |
| 400 Regular | Títulos, subtítulos, menú, etiquetas y texto de artículo |
| 500 Medium | Negritas dentro de los artículos |

Proporciones tomadas de la referencia editorial `ESTILO DE LETRAS.png`:

| Elemento | Medida |
|---|---|
| Título de artículo | 33 / 39,6 px, mayúsculas |
| Subtítulo (h2) | 20 / 26 px, mayúsculas |
| Texto de artículo | 16,4 / 21,7 px |
| Etiquetas, fechas, pies de foto | 9,6 px, mayúsculas |
| Menú | 12 px, mayúsculas, espaciado 0,1 em |
| Columna de texto del artículo | 525 px |
| Imágenes anchas del artículo | 861 px |

Antes de v5 se usaban Oswald (títulos) y Roboto (texto). Se reemplazaron porque el sitio se veía pesado.

## Color

### Escala de grises

Quince tonos propios, de claro a oscuro; el sitio no usa negro puro. Están documentados en el post *Color y percepción en la documentación arquitectónica* (`escala-grises.html`).

| Variable | Hex | Uso en el sitio |
|---|---|---|
| `--g0` | #FFFFFF | Fondo |
| `--g1` | #E3E1E3 | Líneas entre tarjetas, fondos claros |
| `--g5` | #88878C | Etiquetas, fechas, pie |
| `--g9` | #424046 | Texto de tarjetas |
| `--g12` | #18191E | Títulos, menú, texto de artículo |

### Fucsias por sección

El énfasis es **#E6007E**. Cada sección del menú tiene un paso de una degradación continua, de oscuro a tenue, en el orden del menú. Se ve en la línea bajo el menú y en la pestaña de categoría de cada tarjeta.

| Paso | Hex | Sección | Clase |
|---|---|---|---|
| 1 | #E6007E | Proyectos | `f1` |
| 2 | #EC409E | Acústica (y Colaboración) | `f2` |
| 3 | #F27ABC | Bitácora | `f3` |
| 4 | #F7ADD6 | Estudio | `f4` |
| 5 | #FBD9EC | Contacto | `f5` |

Cada paso se aclara un poco menos que el anterior, para que la degradación se perciba pareja. Los pasos 3 a 5 llevan texto oscuro en la pestaña; los pasos 1 y 2, texto claro.

## Collage (portada y listados)

- Hasta 3 columnas, con ancho máximo de página de 1360 px, como el tema Patch. Se probaron 4 y 5 columnas en pantallas anchas (v5.5) y se revirtió.
- Cambia a 2 columnas bajo 1000 px y a 1 bajo 600 px.
- Líneas de 1 px en `--g1` entre columnas y entre tarjetas, cerradas (las horizontales llegan a las verticales).
- 40 px de aire entre la tarjeta y su línea. Al pasar el cursor, la pestaña de categoría sube y queda a 24 px de la línea superior, la misma distancia que hay hasta la línea inferior.
- Pestaña de categoría: «Por ANDIRA» cuando no hay autor, para que quepa en una línea.
- Recuadro del título sobre la imagen (Alora House, Oficinas en Alajuela): blanco al 60 %.

## Artículos

- Categoría arriba del título; autor y fecha debajo.
- Figura lateral (`post__fig side`): 270 px, a la derecha. Con `post--aside` en el artículo, los subtítulos siguen junto a la figura y no queda hueco (post de grises).
- Retratos de Estudio en cuadrado (`post__pair--square`).
- Referencias al final, separadas por una línea (`post__rule`), con el enlace en gris.

## Intro de la portada

El logo aparece al centro sobre blanco, espera 1 s y viaja a su lugar en el encabezado mientras aparece la página (unos 3,5 s; referencia de ritmo: coaika.co). Se muestra una vez por visita, no aparece con «reducir movimiento» y se repite con `?intro` en la dirección. Una variante con zoom desde negro quedó en la rama `intro-zoom`, descartada.
