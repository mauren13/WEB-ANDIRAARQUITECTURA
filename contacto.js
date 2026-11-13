// ANDIRA Arquitectura · correos del contacto (estudio.html).
// Las direcciones no están escritas en el HTML: se arman al hacer clic en «Mostrar correos»,
// para que los programas que recorren páginas buscando correos no las encuentren.
(function(){
  var button = document.querySelector('[data-reveal="correos"]');
  if (!button) return;

  var domain = ['andiraarquitectura', 'com'].join('.');
  var people = [
    { name: 'Mauren López', user: 'mauren.lopez' },
    { name: 'Stephanie Solano', user: 'ssolano' }
  ];

  button.addEventListener('click', function(){
    var item = button.closest('li');
    var list = item.parentNode;
    people.forEach(function(p){
      var address = p.user + '@' + domain;
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = 'mailto:' + address;
      a.textContent = address;
      li.append('Correo, ' + p.name + ' · ', a);
      list.insertBefore(li, item);
    });
    item.remove();
    list.querySelector('a[href^="mailto:"]').focus();
  });
})();
