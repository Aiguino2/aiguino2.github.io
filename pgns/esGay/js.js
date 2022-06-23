// import nombres from "../../json/gays.json" assert{type: 'json'};
var nombres = [];

fetch("../../json/gays.json")
.then(res => res.json())
.then(res =>  nombres = res);


window.onload = function() {


const txt = document.getElementById("nombre");
const btn = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
btn.addEventListener("click", calculadora);
txt.addEventListener("keyup", function(e) {
    if (esEnter(e)) calculadora()
});


function calculadora() {
    if (txt.value == "" || txt.value == null || txt.value == "   ") {
        resultado.innerHTML = "¡Debes introducir un nombre!"
    } else {
        for(let i=0;i<nombres.length;i++) {
            if (nombres[i].nombre.toLowerCase() == txt.value.toLowerCase()) {
                resultado.innerHTML = `¡${nombre.value} ES GAY!`.toUpperCase();
                break;
            } else {
                resultado.innerHTML = `¡${nombre.value} NO ES GAY!`.toUpperCase();
            }
        }
    }
}


function esEnter(e) {
    if (e.key !== undefined) {
        if (e.key === "Enter") return true;
    }  else if (e.code) {
        if (e.code === "Enter") return true;
    } else if (e.keyIdentifier !== undefined) {
        if (e.keyIdentifier === 13 || e.keyIdentifier === "Enter") return true;
    } else if (e.keyCode !== undefined) {
        if (e.keyCode === 13) return true;
    }    
}


//Cierre window.onload
}

