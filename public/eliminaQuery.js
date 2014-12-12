var x=$(document);
x.ready(activaEvento);

<!--Función que activa los eventos //-->

function activaEvento(){

x=$("#botonA");
x.click(elimina);
}

function elimina(){

	var opcion=$("select option:selected").text();
	var t=$("#nombre").val();
	var contacto=$("#contact").val();
	var n=t.split(" ");
	var titulo="";
	
	for(var i in n){
		titulo=titulo+"-"+n[i];
	}
		$.post('/borra/'+opcion+'/'+titulo+'-'+contacto,function(data){
    $("#Resultado").html('Se ha eliminado: '+data.resultado);
  });
	
}


