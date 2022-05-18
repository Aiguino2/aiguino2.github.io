var nombres = [];

fetch("gays.json")
    .then(res => res.json())
    .then(res =>  nombres = res);

window.onload = function() {
    const txt = document.getElementById("nombre");
    const btn = document.getElementById("calcular");
    const resultado = document.getElementById("resultado");
    btn.addEventListener("click", function() {

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
    });
      

}
