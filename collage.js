// ANDIRA Arquitectura · collage común a todas las páginas
(function(){
  var grid = document.getElementById('grid');
  if (!grid) return;
  var items = Array.prototype.slice.call(grid.children);
  var current = 0;

  function columnsFor(w){ return w >= 1000 ? 3 : (w >= 600 ? 2 : 1); }

  // Tarjeta lateral: el texto termina justo en el borde inferior de la imagen.
  // Si sobra texto se corta con "…"; si falta, la imagen se acorta (hasta casi cuadrada).
  function fitSide(card){
    var fig = card.querySelector('.card__img');
    var body = card.querySelector('.card__body');
    var p = body && body.querySelector('p');
    if (!fig || !body) return;
    fig.style.height = ''; fig.style.aspectRatio = '';
    if (p){
      if (!p.hasAttribute('data-full')) p.setAttribute('data-full', p.textContent);
      p.textContent = p.getAttribute('data-full');
    }
    var imgH = fig.offsetHeight;
    var bodyH = body.scrollHeight;
    var h;
    if (p && bodyH > imgH + 1){
      var lh = parseFloat(getComputedStyle(p).lineHeight);
      var pTop = p.getBoundingClientRect().top - body.getBoundingClientRect().top;
      var n = Math.max(2, Math.floor((imgH - pTop) / lh));
      // Recorta palabra por palabra hasta que quepa en n líneas y termina en "…"
      var words = p.getAttribute('data-full').split(/\s+/);
      var lo = 1, hi = words.length;
      while (lo < hi){
        var mid = Math.ceil((lo + hi) / 2);
        p.textContent = words.slice(0, mid).join(' ').replace(/[\s.,;:]+$/, '') + '…';
        if (p.offsetHeight <= n * lh + 1) lo = mid; else hi = mid - 1;
      }
      p.textContent = words.slice(0, lo).join(' ').replace(/[\s.,;:]+$/, '') + '…';
      h = pTop + n * lh;
    } else {
      h = Math.max(bodyH, fig.offsetWidth * 0.9);
    }
    fig.style.aspectRatio = 'auto';
    fig.style.height = Math.round(h) + 'px';
  }

  function layout(force){
    var n = columnsFor(grid.clientWidth || window.innerWidth);
    if (n === current && !force) return;
    current = n;
    grid.innerHTML = '';
    var cols = [];
    for (var i = 0; i < n; i++){ var c = document.createElement('div'); c.className = 'col'; grid.appendChild(c); cols.push(c); }
    items.forEach(function(el){
      var target = cols[0];
      if (!el.hasAttribute('data-fixed')){
        cols.forEach(function(c){ if (c.offsetHeight < target.offsetHeight - 1) target = c; });
      }
      target.appendChild(el);
      if (el.classList.contains('card--side')) fitSide(el);
    });
    fixBleed();
  }

  // Si una imagen que sobresale de su columna cae encima de otra publicación, se queda dentro de su columna.
  function fixBleed(){
    var cards = Array.prototype.slice.call(grid.querySelectorAll('.card'));
    cards.forEach(function(c){ c.classList.remove('no-bleed'); });
    var boxes = cards.map(function(c){ return c.getBoundingClientRect(); });
    cards.forEach(function(c, i){
      var el = c.querySelector('.card--side .card__img, .card--wide .card__img, .card--overlap .box');
      if (!el) return;
      var r = el.getBoundingClientRect();
      var hit = boxes.some(function(b, j){
        return j !== i && r.left < b.right - 1 && b.left < r.right - 1 && r.top < b.bottom + 8 && b.top - 8 < r.bottom;
      });
      if (hit) c.classList.add('no-bleed');
    });
  }

  layout(true);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function(){ layout(true); });
  window.addEventListener('load', function(){ layout(true); });
  var t; window.addEventListener('resize', function(){ clearTimeout(t); t = setTimeout(function(){ layout(true); }, 150); });

  // Entrada suave: las tarjetas aparecen al llegar a la vista, una tras otra.
  var cards = grid.querySelectorAll('.card');
  if (!('IntersectionObserver' in window)){ cards.forEach(function(c){ c.classList.add('is-in'); }); return; }
  var io = new IntersectionObserver(function(entries){
    var k = 0;
    entries.forEach(function(e){
      if (!e.isIntersecting) return;
      var el = e.target; io.unobserve(el);
      setTimeout(function(){ el.classList.add('is-in'); }, 80 * k++);
    });
  }, { rootMargin: '0px 0px -40px 0px' });
  cards.forEach(function(c){ io.observe(c); });
})();
