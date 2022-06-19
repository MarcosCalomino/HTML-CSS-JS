"use strict"
var boton = document.getElementById('boton');
boton.addEventListener('click', function () {//pone una escucha de eventos, en este caso escucha un 'click'
  if(document.getElementById("login").value == 'admin' && document.getElementById("passwordd").value == 'admin'){ 
  alert("esta todo ok!") }
	 else {
		 alert("Datos incorrectos");}
})