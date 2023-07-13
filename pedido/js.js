const tk = "c294a87bad35cd";
var usuario;

null != localStorage.getItem("user") ? usuario = localStorage.getItem("user") : usuario = "";

const calle = "DIRECCION EXACTA <br>C (no mostrar) N(no mostrar) P(no mostrar)";

window.onload = function() {
    domIp = document.querySelector("#ip")//.innerHTML = "CON DIRECCIÓN " + datos[0];
    domCiudad = document.querySelector("#ciudad")//.innerHTML = "Y QUE VIVE EN " + datos[1];

    xd(domIp, domCiudad);

    localStorage.clear();
   
}

function xd(domIp, domCiudad) {
    const datos = [];
    fetch("https://ipinfo.io/?token="+tk)
        .then(res => res.json())
        .then (res => {
            ip = res.ip;
            datos.push(res);
            domIp.innerHTML = "CON DIRECCIÓN " + ip;
            domCiudad.innerHTML = "Y QUE VIVE EN " + (datos[0].city).toUpperCase() + " , " + (datos[0].region.toUpperCase());
            document.querySelector("#usuario").innerHTML = "USUARIO: " + usuario.toUpperCase();
            document.querySelector("#calle").innerHTML = calle;
        });
        return datos;
    };