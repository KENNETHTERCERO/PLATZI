var texto  = document.getElementById("txtLineas");
var boton  = document.getElementById("btnDibujarLineas");
var d      = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

boton.addEventListener("click", dibujoPorClick);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick(){
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var espacioEntreLineas = ancho / lineas;

    while(l < lineas){
        yi = espacioEntreLineas * l;
        xf = espacioEntreLineas *(l + 1);
        dibujarLinea("#AAF", 0, yi, xf, ancho - 1);
        l = l + 1;
    }

    dibujarLinea("#AAF", 1, 1, 1, ancho - 1);
    dibujarLinea("#AAF", 1, ancho - 1, ancho - 1, ancho - 1);
}