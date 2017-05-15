function agregaPosteo() {
//escribe aca el codigo
	var containerPosteos = document.getElementById("contenedor-posteos");//rescatar nombre de usuario y contenedor de posteos.
	var nombreFF = document.getElementById("nombre").value;
	var contenidoFF = document.getElementById("cajaposteos").value;
	//crear contenedor.
	var nuevoPost = document.createElement("div");
	//donde se guardan los valores.
	var contenedorNombre = document.createElement("strong");
	var contenedorPost = document.createElement("p");
	var separacion = document.createElement("hr");
	//crear elementos para corazón.
	var parrafCorazon = document.createElement("p");
	var i = document.createElement("i");
	//asignamos padre a icono corazón
	parrafCorazon.appendChild(i);
	//se da atributos al corazón.
	parrafCorazon.setAttribute("class", "corazon");
	i.setAttribute("class", "fa fa-heart");
	i.setAttribute("arial-hidden", "true");
	//Transformación del nombre a nodo texto.
	var nodoNombre = document.createTextNode(nombreFF + " escribió:");
	var nodoPosteo = document.createTextNode(contenidoFF);
	//asignaremos padres a nodos creados.
	contenedorNombre.appendChild(nodoNombre);
	contenedorPost.appendChild(nodoPosteo);
	//se asigna padres a nombre y contenido.
	nuevoPost.appendChild(contenedorNombre);
	nuevoPost.appendChild(contenedorPost);
	nuevoPost.appendChild(parrafCorazon);
	nuevoPost.appendChild(separacion);
	//creamos funcion click para el corazon y un rojo con css.
	i.addEventListener("click", function(){
		i.classList.toggle("rojo");
	})
	//se le da atributos al post y se le agrega al contenedor de posteos.
	nuevoPost.setAttribute("class", "posteo");

	containerPosteos.appendChild(nuevoPost);
	//para resetear los campos y dejarlos nuevamente en blanco.
	document.getElementById("nombre").value = "";
	document.getElementById("cajaposteos").value = "";



}
agregaPosteo();