var x=$(document);
x.ready(activaEvento);

<!--Función que activa los eventos //-->

function activaEvento(){

x=$("#botonA");
x.click(agrega);
}

<!--Funcion que toma los datos necesarios del formulario para añadir un usuario y realiza la peticion POST al server -->
<!-- El titulo del ejemplar a consultar se contacatena con guiones cuando contiene más de una palabra para poder realizar la peticion post correctamente -->

function agrega(){

	var opcion=$("select option:selected").text();
	var t=$("#nombre").val();
	var n=t.split(" ");
	var titulo="";
	
	for(var i in n){
		titulo=titulo+"-"+n[i];
		
	}
		$.post('/agrega/'+opcion+'/'+titulo+'-'+$('#contacto').val()+'/'+$('#descripcion').val(),function(data){
    $("#Resultado").html('Se ha añadido: '+t+" con contacto  "+$('#contacto').val()+' y con datos de interés '+$('#descripcion').val());
  });
	
}


