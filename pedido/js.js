const tk = "c294a87bad35cd";
const usuario = "Anguila";
const calle = "DIRECCION EXACTA <br>C (no mostrar) N(no mostrar) P(no mostrar)";

window.onload = function() {
    domIp = document.querySelector("#ip")//.innerHTML = "CON DIRECCIÓN " + datos[0];
    domCiudad = document.querySelector("#ciudad")//.innerHTML = "Y QUE VIVE EN " + datos[1];

    xd(domIp, domCiudad);
   
}

function xd(domIp, domCiudad) {
    const datos = [];
    fetch("https://api.ipify.org")
    .then(res => res.text())
    .then (res => {
        ip = res;
        datos.push(res);
        fetch("https://ipinfo.io/"+ip+"?token="+tk)
        .then(res => res.json())
        .then (res => {
            datos.push(res.city);
            domIp.innerHTML = "CON DIRECCIÓN " + datos[0];
            domCiudad.innerHTML = "Y QUE VIVE EN " + (datos[1]).toUpperCase();
            document.querySelector("#usuario").innerHTML = "USUARIO: " + usuario.toUpperCase();
            document.querySelector("#calle").innerHTML = calle;
        });
    });
    return datos;
}