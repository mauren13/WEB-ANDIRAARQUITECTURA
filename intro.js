// ANDIRA Arquitectura · intro de la portada.
// La primera vez por visita la página abre en blanco con el logo al centro; el logo
// viaja a su lugar en el encabezado mientras aparece el resto. La clase .intro la pone
// un script en el <head> de index.html (antes de pintar, para evitar un parpadeo) solo
// si la intro no se vio en esta visita y no está activado «reducir movimiento».
// Con ?intro en la dirección se repite en cada carga, para revisarla.
(function(){
  var root = document.documentElement;
  if (!root.classList.contains('intro')) return;
  try { sessionStorage.setItem('andira-intro', '1'); } catch (e) {}

  // Tiempos en ms; las duraciones de cada transición están en estilos.css (sección 8).
  var BLANK = 400;     // página en blanco antes de que aparezca el logo
  var ENTER = 600;     // el logo aparece y sube a su lugar en el centro
  var HOLD = 700;      // pausa con el logo quieto
  var MOVE = 1400;     // viaje a la esquina

  function done(){
    var veil = document.querySelector('.intro-veil');
    if (veil) veil.remove();
    root.classList.remove('intro', 'intro--in', 'intro--out');
  }

  var logo = document.querySelector('.site-header .logo img');
  if (!logo) { done(); return; }

  // Copia del logo sobre un velo blanco: empieza centrada y termina sobre el logo real.
  var end = logo.getBoundingClientRect();
  var width = Math.min(180, window.innerWidth * 0.4);
  var scale = width / end.width;
  var x0 = (window.innerWidth - width) / 2;
  var y0 = (window.innerHeight - end.height * scale) / 2;

  var veil = document.createElement('div');
  veil.className = 'intro-veil';
  veil.setAttribute('aria-hidden', 'true');
  var copy = new Image();
  copy.src = logo.currentSrc || logo.src;
  copy.alt = '';
  copy.style.width = end.width + 'px';
  copy.style.transform = 'translate(' + x0 + 'px,' + (y0 + 20) + 'px) scale(' + scale + ')';
  veil.appendChild(copy);
  document.body.appendChild(veil);
  copy.getBoundingClientRect();   // fija la posición inicial antes de animar

  setTimeout(function(){
    root.classList.add('intro--in');
    copy.style.transform = 'translate(' + x0 + 'px,' + y0 + 'px) scale(' + scale + ')';
  }, BLANK);

  setTimeout(function(){
    root.classList.add('intro--out');
    copy.style.transform = 'translate(' + end.left + 'px,' + end.top + 'px) scale(1)';
    setTimeout(done, MOVE + 100);
  }, BLANK + ENTER + HOLD);
})();
