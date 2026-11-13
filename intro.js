// ANDIRA Arquitectura · intro de la portada.
// La primera vez por visita la página abre en blanco con el logo al centro; el logo
// viaja a su lugar en el encabezado mientras aparece el resto. La clase .intro la pone
// un script en el <head> de index.html (antes de pintar, para evitar un parpadeo) solo
// si la intro no se vio en esta visita y no está activado «reducir movimiento».
(function(){
  var root = document.documentElement;
  if (!root.classList.contains('intro')) return;
  try { sessionStorage.setItem('andira-intro', '1'); } catch (e) {}

  var HOLD = 500;      // ms con el logo quieto al centro
  var MOVE = 700;      // ms del viaje (igual a la transición en estilos.css)

  function done(){
    var veil = document.querySelector('.intro-veil');
    if (veil) veil.remove();
    root.classList.remove('intro', 'intro--out');
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
  copy.style.transform = 'translate(' + x0 + 'px,' + y0 + 'px) scale(' + scale + ')';
  veil.appendChild(copy);
  document.body.appendChild(veil);

  setTimeout(function(){
    root.classList.add('intro--out');
    copy.style.transform = 'translate(' + end.left + 'px,' + end.top + 'px) scale(1)';
    setTimeout(done, MOVE + 50);
  }, HOLD);
})();
