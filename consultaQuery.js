
var x=$(document);
x.ready(activarEventos);

<!-- Funcion que activa el evento al pulsar el boton//-->
function activarEventos(){

	var x=$("#botonB");
	x.click(consulta);

	x=$("#botonT");
	x.click(listar);
}

function consulta(){
	
	var opcion=$("select option:selected").text();
	var nombre=$("#usuario").val();
	var contacto=$('#contact').val();
	var title="";
	var k=nombre.split(" ");
	for(j in k){
		title=title+"-"+k[j];
	}

	$.post('/consulta/'+opcion+'/'+title+'-'+contacto,function(data){

		$('#Resultado').html('Datos del objeto buscado '+"<P>"+data.resultado);
	});
}



function listar(){
	var opcion=$("select option:selected").text();
	$.post('/consultaT/'+opcion,function(data){
		$('#resultado1').html(opcion+' disponibles: '+data.resultado);
	})
}

