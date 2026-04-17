console.log("Página de HTML5 cargada correctamente");


var secciones = document.querySelectorAll(".seccion");

for (var i = 0; i < secciones.length; i++) {
    secciones[i].style.display = "none";
}


var inicio = document.getElementById("inicio");
inicio.style.display = "block";


var links = document.querySelectorAll(".nav a");

for (var i = 0; i < links.length; i++) {

    links[i].addEventListener("click", function(evento) {

        evento.preventDefault();

        for (var j = 0; j < secciones.length; j++) {
            secciones[j].style.display = "none";
        }

        var seccion = this.getAttribute("href");
        document.querySelector(seccion).style.display = "block";

    });

}
