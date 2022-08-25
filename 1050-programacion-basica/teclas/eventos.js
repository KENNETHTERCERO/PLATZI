var teclas = {
    ARROWUP    : 38,
    ARROWDOWN  : 40,
    ARROWLEFT  : 37,
    ARROWRIGHT : 39
};

document.addEventListener("keyup", dibujarTeclado);
var cuadro = document.getElementById("area_dibujo");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento){
    
    var colorLine = "blue";
    var movimiento = 10;
    console.log(evento.keyCode);
    switch(evento.keyCode){
        case teclas.ARROWUP:
            dibujarLinea(colorLine, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;
        case teclas.ARROWDOWN:
            dibujarLinea(colorLine, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;
        case teclas.ARROWLEFT:
            dibujarLinea(colorLine, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;
        case teclas.ARROWRIGHT:
            dibujarLinea(colorLine, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;
        default:
            console.log("Otra tecla!");
            break;
    }

    // if(evento.keyCode == teclas.ARROWUP){
    //     console.log("Vamos arriba!");
    // }
    // else if(evento.keyCode == teclas.ARROWDOWN){
    //     console.log("Vamos abajo!");
    // }
    // else if(evento.keyCode == teclas.ARROWLEFT){
    //     console.log("Vamos arriba!");
    // }
    // else if(evento.keyCode == teclas.ARROWUP){
    //     console.log("Vamos arriba!");
    // }    
}