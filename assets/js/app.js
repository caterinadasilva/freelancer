/* Código de Liliana Kastilio: https://codepen.io/lili2311/pen/dJjuL< */

window.addEventListener('scroll', function () {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  shrinkOn = 200,
  headerEl = document.getElementById('js-header');
  
  if (distanceY > shrinkOn) {
    headerEl.classList.add("smaller");
  } else {
    headerEl.classList.remove("smaller");
  }
});