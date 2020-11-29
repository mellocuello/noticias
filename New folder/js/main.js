/*Funciones para fijar la barra de menu en tablet y movil*/
$(document).ready(function(){
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() >= 50 ){
			$("#Menu").addClass("menu-fixed");
		} 
		else {
			$('.menu').removeClass('menu-fixed');
		}
	});
	/*Funcion para abrir y cerrar boton de menu*/
	$("#botonMenu").click(function(){
		$(".menu ul").slideToggle();
	});	
	
});
/*Funciones para validar los formularios*/
function ValidarForm(){
	/*Validando el campo nombre*/
	if(document.frmCliente.nombre.value.length==0){
		alert("Debe escribir el Nombre")
		document.frmCliente.nombre.focus()
		return false
	}
	/*Validando el campo apellidos*/
	if(document.frmCliente.apellidos.value.length==0){
		alert("Debe escribir los Apellidos")
		document.frmCliente.apellidos.focus()
		return false
	}
	/*Validando el campo cedula*/
	if(document.frmCliente.cedula.value.length==0){
		alert("Debe escribir el numero de Cedula")
		document.frmCliente.cedula.focus()
		return false
	}
	/*Validando el campo telefono*/
	if(document.frmCliente.telefono.value.length==0){
		alert("Debe escribir el numero de Telefono")
		document.frmCliente.telefono.focus()
		return false
	}
	/*Validando el campo correo*/
	if(document.frmCliente.correo.value.length==0){
		alert("Debe escribir su Correo")
		document.frmCliente.correo.focus()
		return false
	}
	/*Validando el campo direccion*/
	if(document.frmCliente.direccion.value.length==0){
		alert("Debe escribir su Direccion")
		document.frmCliente.direccion.focus()
		return false
	}
}
