function QuienesSomos(){
    document.getElementById("Hoteles").style.display = "none";
    document.getElementById("Vuelos").style.display = "none";
    document.getElementById("BuscadorHoteles").style.display = "none";
    document.getElementById("BuscadorVuelos").style.display = "none";
    document.getElementById("Quiensoy").style.display = "block"
}
function Contacto(){
    alert("hola");
}
function Registro(){
    alert("hola");
}
function IniciarSesion(){
    alert("hola");
    document.getElementById("LogIn").style.display = "none";
    document.getElementById("Register").style.display = "none";
    document.getElementById("LogOff").style.display = "block";
}
function CerrarSesion(){
    alert("hola");
    document.getElementById("LogIn").style.display = "block";
    document.getElementById("Register").style.display = "block";
    document.getElementById("LogOff").style.display = "none";
}

function BuscaHoteles(){
    document.getElementById("BuscadorHoteles").style.display = "block";
    document.getElementById("BuscadorVuelos").style.display = "none";
}

function BuscaVuelos(){
    document.getElementById("BuscadorHoteles").style.display = "none";
    document.getElementById("BuscadorVuelos").style.display = "block";
    
}

function HotelesdelLugar(){ // Aparecerá un listado de los hoteles del lugar proporcionado

    
    // Ahora cogemos el lugar que ha puesto y según lo que sea le ponemos las opciones
    var x = document.forms["InputdelBuscador"]["BuscadorLugar"].value
    //alert(x);
    if( x == "Madrid"){ // Hay que ponerlo idéntico.
        // Mostramos las opciones de Madrid
        //alert(x);
        document.getElementById("BuscadorHoteles").style.display = "none";
        document.getElementById("BuscadorVuelos").style.display = "none";
        document.getElementById("Hoteles").style.display = "none";
        document.getElementById("Vuelos").style.display = "none";
        document.getElementById("HotelesMadrid").style.display = "block"; // Ponemos la lista de Madrid
        document.getElementById("Madrid1").style.display = "block"; // Ponemos la lista 1 de Madrid
        document.getElementById("Madrid2").style.display = "none"; // Ponemos la lista 1 de Madrid
    }
    else{ // En el caso de poner un destino erróneo, se lo notificamos
        alert("No hay servicio");
    }
}

function VuelosdelLugar(){ /* Aparecerá un listado de los vuelos con destino al
    lugar proporcionado*/
    document.getElementById("Hoteles").style.display = "none";
    document.getElementById("Vuelos").style.display = "none";
    document.getElementById("BuscadorHoteles").style.display = "none";
    document.getElementById("BuscadorVuelos").style.display = "none";

}
// Funciones del paginado
function Lista1Madrid(){
    document.getElementById("Madrid1").style.display = "block"; // Ponemos la lista 1 de Madrid
    document.getElementById("Madrid2").style.display = "none"; // Quitamos la lista 2 de Madrid

}

function Lista2Madrid(){
    document.getElementById("Madrid1").style.display = "none"; // Quitamos la lista 1 de Madrid
    document.getElementById("Madrid2").style.display = "block"; // Ponemos la lista 2 de Madrid
}

//Registro de un Usuario

//Inicio de sesión de un usuario