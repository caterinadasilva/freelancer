// // EFECTO SCROLL DEL NAV // //
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

// // MODAL // //
(function modal(){
	var boxes = Array.from(document.getElementsByClassName("project"));
	var modal = document.getElementById("work-modal");
	var modalBody = document.getElementsByClassName('modal-body')[0];
	var close = document.getElementById("close");
	boxes.forEach(function(box){
		box.addEventListener("click", function(){
			event.preventDefault();
			modalBody.innerHTML = box.innerHTML;
			modal.classList.remove("hidden");
			close.addEventListener("click",function(){
				modal.classList.add("hidden");
			});
		});		
	});
})();