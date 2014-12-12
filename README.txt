Autor: Miguel Tabernero Ridao

La aplicación cliente-servidor diseñada que usa Ajax, es una pagina web donde se pueden publicar anuncios de venta de diversos objetos que se agrupan por categorías, las distintas categorías son: libros,películas, discos y comics. Las funcionalidades icluidas en la aplicación son añadir ofertas de objetos a  la venta, consultar el listado general de objetos a la venta de una determinada categoría, consultar la oferta de un objeto determinado a la venta y eliminar ofertas. de objetos a la venta  El front-end está en JQuery y el Back-end en node.js. 


La aplicación se encuentra en funcionamiento en el enlace: 

http://stark-sea-9888.herokuapp.com/

								MODO DE FUNCIONAMIENTO

Para añadir un objeto a la venta se debe acceder al enlace "colocar objeto a la venta", seleccionar en el despegable la categoría deseada(libros,comics,discos o peliculas) introducir el titulo del objeto, un contacto con nombre y nº de teléfono o email y una descripión o datos de interés para la oferta. Cada objeto añadido se almacenara y la referencia para acceder a él sera la concatenación de su titulo y el contacto añadido así cada objeto se almacena con un nombre único y puede coexisitir ofertas de varios ejemplares del mismo libro por ejemplo. 

Para consultar todos los objetos de una categoría determinada a la venta se debe acceder al enlace "objetos a la venta", seleccionar en el despegable la categoría deseada(libros,comics,discos o peliculas) y pulsar el botón "buscar todos", así aparecera una lista de los títulos y los contactos de cada objeto a la venta de esa categoría determinada. 

Para consultar todos un determinado objeto a la venta se debe acceder al enlace "objetos a la venta", seleccionar en el despegable la categoría deseada(libros,comics,discos o peliculas) e introducir el titulo y el contacto de ese objeto en el formulario desplegado y pulsar el botón buscar, apareceran los datos de la oferta. 

Para eliminar un determinado objeto a la venta se debe acceder al enlace "eliminar objeto a la venta" seleccionar en el despegable la categoría deseada(libros,comics,discos o peliculas) e introducir el titulo y el contacto de ese objeto en el formulario desplegado y pulsar el botón "elminar". 

El código de la aplicación esta disponible en el repositorio de Github: 

https://github.com/migtr88/App_venta_fin

Dicho repositorio contiene: 

-El fichero principal a ejecutar "server.js" que ponen en marcha el servidor http encargado de tramitar las distintas peticiones que se reciba desde el navegador. 

-En el directorio "public" se encuentran los distintos ficheros .html  que permiten desplegar los distintos formularios para relizar las peticiones que implementa la aplicación.
	"index.html"- Despliega el menu principal de bienvenida a la página y muestra los enlaces para acceder a los servicios ofrecidos por la aplicación.
	"agregar.html" -Despliega el menu para añadir una oferta de objeto a la venta también muestra los enlaces para acceder a los servicios ofrecidos por la aplicación.
	"consultar.html"- Despliega el menu para consultar los objetos a la venta y para consultar un objeto en particular, también muestra los enlaces para acceder a los servicios ofrecidos por la aplicación.
	"quitar.html"- Despliega el menu para eliminar una oferta a la venta, también muestra los enlaces para acceder a los servicios ofrecidos por la aplicación.

En el directorio "js" dentro de public se encuentran los distintos archivos "JQuery" que permiten realizar las peticiones  al servidor desde el navegador. 

	"agregaQuery.js" Contiene la función "agrega()" que se encarga de coger los datos del formulario "agregar.html" necesarios para realizar la petición POST al servidor de añadir un determinado objeto a la venta.

	"elminaQuery.js" Contiene la función "eliminar()", que se encarga de tomar los datos del formulario "quitar.html" necesarios para realizar la petición POST al servidor de eliminar un determinado objeto a la venta.  
	
	"consultaQuery.js" Contiene la función "consulta()" que se encarga de realizar tomar los datos del formulario "consultar.html" necesarios y realizar la peticion POST al servidor para buscar un determinado objeto,y contiene la función "listar()" que se encarga de tomar los datos del formulario "consultar.html" necesarios y realizar la peticion POST al servidor para listar los titulos de todos los objetos de una determinada categoría. 
