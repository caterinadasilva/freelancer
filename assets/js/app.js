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

// // VALIDACIÓN FORMULARIO // //
(function validateForm(){
	var sendBtn = document.getElementById('sendBtn');
	sendBtn.addEventListener('click', function() {
		event.preventDefault();
	// ELIMINAR SMALLS DE VALIDACIONES ANTERIORES
		document.querySelectorAll(".form-input small").forEach(function(small) {small.remove()});
	// VALORES VALUE
		var name = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var phone = document.getElementById('phone').value;
		var textarea = document.getElementById('textarea').value;
	// CARACTERES VÁLIDOS // REGULAR EXPRESSIONS
		var validName = /^[A-Za-z]*/;
		var validPhone = /^56(?=[1-9]\d{0,2}[1-9])(?=\d{2,15}$)\d+$/;
		var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	////// NOMBRE
		// VERIFICACIÓN DE CAMPO OBLIGATORIO
		if (name === "") {
			var rellenarText = document.createTextNode("Por favor, rellene este campo.");
			var labelError = document.createElement('small');
			labelError.classList.add('label', 'error');
			labelError.appendChild(rellenarText);
			document.getElementsByClassName('form-input')[0].appendChild(labelError);
			console.log("Nombre:" + name);
		} else {
		// IMPRIMIR Y VACIAR CAMPO
			console.log("Nombre:" + name);
			document.getElementById('name').value = "";
		}
	////// EMAIL
		// VERIFICACIÓN DE CAMPOS VACÍOS	
		if (email === "") {
			var rellenarText = document.createTextNode("Por favor, rellene este campo.");
			var labelError = document.createElement('small');
			labelError.classList.add('label', 'error');
			labelError.appendChild(rellenarText);
			document.getElementsByClassName('form-input')[1].appendChild(labelError);
			console.log("Correo: " + email);
		}
		// VERIFICACIÓN DE CARACTERES REQUERIDOS
		else if(!validEmail.test(email)) {
			var correoText = document.createTextNode("Este correo no es válido.");
			var labelError = document.createElement('small');
			labelError.classList.add('label', 'error');
			labelError.appendChild(correoText);
			document.getElementsByClassName('form-input')[1].appendChild(labelError);
			console.log("Correo: " + email + ". Tiene caracteres no permitidos.");
		}
		// IMPRIMIR Y VACIAR CAMPO
		else {
			console.log("Correo: " + email);
			document.getElementById('email').value = "";
		}
	////// TELÉFONO
		// VERIFICACIÓN DE CAMPOS VACÍOS	
		if (phone === "") {
			var rellenarText = document.createTextNode("Por favor, rellene este campo.");
			var labelError = document.createElement('small');
			labelError.classList.add('label', 'error');
			labelError.appendChild(rellenarText);
			document.getElementsByClassName('form-input')[2].appendChild(labelError);
			console.log("Phone: " + phone);
		}
		// VERIFICACIÓN DE CARACTERES REQUERIDOS
		else if(!validPhone.test(phone)) {
			var phoneText = document.createTextNode("Este número no es válido.");
			var labelError = document.createElement('small');
			labelError.classList.add('label', 'error');
			labelError.appendChild(phoneText);
			document.getElementsByClassName('form-input')[2].appendChild(labelError);
			console.log("Teléfono: " + phone + ". Tiene caracteres no permitidos.");
		}
		// IMPRIMIR Y VACIAR CAMPO
		else {
			console.log("Teléfono: " + phone);
			document.getElementById('phone').value = "";
		}
	////// MENSAJE
		// VERIFICACIÓN DE CAMPO OBLIGATORIO	
		if (textarea === "") {
			var rellenarText = document.createTextNode("Por favor, rellene este campo.");
			var labelError = document.createElement('small');
			labelError.classList.add('label', 'error');
			labelError.appendChild(rellenarText);
			document.getElementsByClassName('form-input')[3].appendChild(labelError);
			console.log("Mensaje:" + textarea);
		} else {
		// IMPRIMIR Y VACIAR CAMPO
			console.log("Mensaje:" + textarea);
			document.getElementById('textarea').value = "";
		}
	////// FIN
	});
})();