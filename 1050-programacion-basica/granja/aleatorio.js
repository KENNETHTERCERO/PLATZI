var canvas_granja = document.getElementById("granja");
var papel = canvas_granja.getContext("2d");

var fondo = {
    ulr: "images/tile.webp",
    cargaOk: false
};

var vaca = {
    ulr: "images/vaca.webp",
    cargaOk: false
};

var cerdo = {
    ulr: "images/cerdo.png",
    cargaOk: false
};

var pollo = {
    ulr: "images/pollo.png",
    cargaOk: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.ulr;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.ulr;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.ulr;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.ulr;
pollo.imagen.addEventListener("load", cargarPollos);


function cargarFondo(){
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas(){
    vaca.cargaOk = true;
    dibujar();
}

function cargarCerdos(){
    cerdo.cargaOk = true;
    dibujar();
}

function cargarPollos(){
    pollo.cargaOk = true;
    dibujar();
}

function aleatorio(max, min){
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

function dibujar(){
    if(fondo.cargaOk){
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOk){

        var cantidad = aleatorio(1, 10);
        for(var v = 0; v <= cantidad; v++){
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if(cerdo.cargaOk){
        var cantidad = aleatorio(1, 10);
        for(var v = 0; v <= cantidad; v++){
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
    if(pollo.cargaOk){
        var cantidad = aleatorio(5, 25);
        for(var v = 0; v <= cantidad; v++){
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(pollo.imagen, x, y);
        }
    }
}
