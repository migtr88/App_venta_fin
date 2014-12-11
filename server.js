var fs = require('fs');
var express=require('express');
var app = express();
var libros= new Object;
var comics=new Array;
var discos=new Array;
var peliculas=new Array;
var consulta = fs.readFileSync('consultar_formulario.html','utf8');
var ag=fs.readFileSync('agregar_formulario.html','utf8');
var menu=fs.readFileSync('menu_principal.html','utf8');
var borrar=fs.readFileSync('quitar_formulario.html','utf8');

<!-- Peticiones GET para obtener los distintos formularios HTML-->
app.get('/', function (req, res) {
res.send(menu);
});

app.get('/agregar', function (req, res) {
res.send(ag);
});

app.get('/consultar',function(req,res){
res.send(consulta);
});
app.get('/borrar',function(req,res){
res.send(borrar);
});



app.get('/js/:page', function (req, res) {
var js = fs.readFileSync(req.params.page);
res.contentType('text/javascript');
res.send(js);
});


<!-- Peticion PUT para agregar datos -->

app.put('/agrega/:id/:id1/:id2',function(req, res){

res.contentType('application/json');
var tipo=req.params.id;
if(tipo==='libros'){
libros[req.params.id1] = req.params.id2;
var respuesta='Añadido Libro '+ req.params.id1 +'  Título: '+req.params.id2;
res.send({resultado:respuesta});
}
if(tipo==='comics'){
comics[req.params.id1] = req.params.id2;
var respuesta='Añadido comic '+ req.params.id1 +'  Título: '+req.params.id2;
res.send({resultado:respuesta});
}
if(tipo==='discos'){
discos[req.params.id1] = req.params.id2;
var respuesta='Añadido disco '+ req.params.id1 +'  Título: '+req.params.id2;
res.send({resultado:respuesta});
}
if(tipo==='peliculas'){
peliculas[req.params.id1] = req.params.id2;
var respuesta='Añadido dispositivo '+ req.params.id1 +'  Título: '+req.params.id2;
res.send({resultado:respuesta});
}


});

<!-- Peticion POST para agregar datos desde el navegador mediante JQuery, la clave para acceder a los distintos objetos que contiene los datos de cada tipo de oferta -->
<!--libros, discos,peliculas,comics, es la concatenacion del titulo del ejemplar y el contacto así se diferencia un ejemplar de otro del mismo tipo aunque tengan el mismo titulo -->

app.post('/agrega/:id/:id1/:id2',function (req, res){

res.contentType('application/json');
var tipo=req.params.id;

if(tipo==='libros'){

libros[req.params.id1] = req.params.id2;
var respuesta='Añadido Libro '+ req.params.id1 +'  Título: '+req.params.id2;
res.send({resultado:respuesta});
}
if(tipo==='comics'){
comics[req.params.id1] = req.params.id2;
var respuesta='Añadido comic '+ req.params.id1 +'  Título: '+req.params.id2;
res.send({resultado:respuesta});
}
if(tipo==='discos'){
discos[req.params.id1] = req.params.id2;
var respuesta='Añadido disco '+ req.params.id1 +'  Título: '+req.params.id2;
res.send({resultado:respuesta});
}
if(tipo==='peliculas'){
peliculas[req.params.id1] = req.params.id2;
var respuesta='Añadido dispositivo '+ req.params.id1 +'  Título: '+req.params.id2;
res.send({resultado:respuesta});
}


});

<!-- Peticion POST para consultar datos desde el navegador mediante JQuery,-->

app.post('/consulta/:id1/:id2', function (req, res) {

	res.contentType('application/json');
	var tipo=req.params.id1;
	var nameg="";
	var name=""; 
	var cg="";
	var contenido="";
	var respuesta="";

if(tipo==='libros'){

<!-- Se va a comprobar si existe el titulo buscado -->

	nameg=(req.params.id2).split("-");
	 cg=(libros[req.params.id2])
	contenido=" Descripción: "+"<P>"+cg;
	
	for(i in nameg){
	name=name+" "+nameg[i];
	}


    respuesta='Libro buscado con contacto: '+ name+"<P>"+contenido;
	res.send({resultado:respuesta});
	console.log( respuesta);
	
}
if(tipo==='comics'){

	 nameg=(req.params.id2).split("-");
	 name="";
	 cg=(comics[req.params.id2])
	 contenido=" Descripción: "+"<P>"+cg;
	
	for(i in nameg){
	name=name+" "+nameg[i];
	}


	respuesta='Comic buscado con contacto: '+ name+"<P>"+contenido;
	res.send({resultado:respuesta});
	console.log( respuesta);
}
if(tipo==='discos'){

	 nameg=(req.params.id2).split("-");
	 name="";
	 cg=(discos[req.params.id2])
	 contenido=" Descripción: "+"<P>"+cg;
	
	for(i in nameg){
	name=name+" "+nameg[i];
	}


	 respuesta='Libro buscado con contacto: '+ name+"<P>"+contenido;
	res.send({resultado:respuesta});
	console.log( respuesta);
}
if(tipo==='peliculas'){

     nameg=(req.params.id2).split("-");
	 name="";
	 cg=(peliculas[req.params.id2])
	 contenido=" Descripción: "+"<P>"+cg;
	
	for(i in nameg){
	name=name+" "+nameg[i];
	}


	 respuesta='Libro buscado con contacto: '+ name+"<P>"+contenido;
	res.send({resultado:respuesta});
	console.log( respuesta);
}
});

	<!-- Peticion POST para consultar datos desde el navegador mediante JQuery-->

	app.post('/consultaT/:id',function (req,res){

	res.contentType('application/json');
	var tipo=req.params.id;
	
	if(tipo==='libros'){
	
	var claves=Object.keys(libros);
	var titulos=claves.toString();
	var cadenaF=titulos.split("-");
	var cadena="";
	for(j in cadenaF){
		cadena=cadena+" "+cadenaF[j];
	}
	
	console.log(cadena);
	res.send({resultado:cadena});
	}
	if(tipo==='comics'){
	
	var claves=Object.keys(comics);
	var titulos=claves.toString();
	var cadenaF=titulos.split("-");
	var cadena="";
	for(j in cadenaF){
		cadena=cadena+" "+cadenaF[j];
	}
	
	console.log(cadena);
	res.send({resultado:cadena});
	}
	if(tipo==='discos'){
	
	var claves=Object.keys(discos);
	var titulos=claves.toString();
	var cadenaF=titulos.split("-");
	var cadena="";
	for(j in cadenaF){
		cadena=cadena+" "+cadenaF[j];
	}
	
	console.log(cadena);
	res.send({resultado:cadena});
	}	
	if(tipo==='peliculas'){

	var claves=Object.keys(peliculas);
	var titulos=claves.toString();
	var cadenaF=titulos.split("-");
	var cadena="";
	for(j in cadenaF){
		cadena=cadena+" "+cadenaF[j];
	}
	
	console.log(cadena);
	res.send({resultado:cadena});
	}

	});


	app.post('/borra/:id1/:id2',function (req,res){

		res.contentType('application/json');
		var tipo=req.params.id1;
		var tipo2=req.params.id2;
		var respuesta="";

		if(tipo==='libros'){
		console.log("Se procede a borrar la oferta con título: "+req.params.id2);
		delete libros[tipo2];
		respuesta="Borrado libro "+tipo2;
		res.send({resultado:respuesta});
		console.log(respuesta);
		}

		if(tipo==='comics'){
		console.log("Se procede a borrar la oferta con título: "+req.params.id2);
		delete comics[tipo2];
		respuesta="Borrado comic "+tipo2;
		res.send({resultado:respuesta});
		console.log(respuesta);
		}
		
		if(tipo==='discos'){
		console.log("Se procede a borrar la oferta con título: "+req.params.id2);
		delete discos[tipo2];
		respuesta="Borrado disco "+tipo2;
		res.send({resultado:respuesta});
		console.log(respuesta);
		}

		if(tipo==='peliculas'){
		console.log("Se procede a borrar la oferta con título: "+req.params.id2);
		delete peliculas[tipo2];
		respuesta="Borrada pelicula "+tipo2;
		res.send({resultado:respuesta});
		console.log(respuesta);
		}
	});



	app.listen(8080);
	console.log('Server running at http://127.0.0.1:8080/');

<!-- Se inicializan algunos datos, para poder hacer consultas -->
var contInic="Es una novela maravillosa, este ejemplar es de segunda edicion,para más datos contactar.";
var contInic2="Incluye los tres libros, el ejemplar tiene ilustraciones a color,ejemplar del año 1965, precio a acordar.";
var contInic3="Es una primera edición, esta en muy buen estado, siempre lo he cuidado mucho,precio 55€";

libros["-La-sombra-del-viento-Pepe(6245545)"]=contInic;
libros["-El-señor-de-los-anillos-Juan(migueltr15@hotmail.com)"]=contInic2;
libros["-Cien-años-de-soledad-Isabel(352253)"]=contInic3;

var comI="Es un ejemplar de la edicion original de Marvel, año 1977";
var comI1="Es un numero 1 del año 1936,precio 500€";
var comI2="Es el primer numero publicado es España, esta en muy buen estado,contactar para conocer el precio";

comics["-Spiderman-Antonio(3243)"]=comI;
comics["-El-capitan-america-Pedro(241234)"]=comI2;
comics["-Superman-Marcos(marcos@gmail.com)"]=comI1;

var d1="Es un ejemplar de edición en vinilo del disco que lanzó a la fama a Bruce Springsteen,esta en buen estado, precio 200€";
var d2="Disco del año 1968 de los Beatles, edición de vinilo, en buen estado contactar para hablar del precio";
var d3="Disco de Nirvana en cd del año 1990, en buen estado contactar para hablar del precio";

discos["-Born-to-run-Miguel(325355)"]=d1;
discos["-yesterday-Luis(532523)"]=d2;
discos["-smell-like-a-teen-spirit-Ana(56323634)"]=d3;

var p1="Ejemplar en DVD, precio 10€";
var p2="En VHS, precio 30€";
var p3="En DVD, contactar para el precio";
peliculas["-Regreso-al-futuro-Laura(532526)"]=p1;
peliculas["-El-bueno-el-feo-y-el-malo-Goyo(3522)"]=p2;
peliculas["-El-cuervo-Raul(35235345)"]=p3;