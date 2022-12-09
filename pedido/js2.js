const tk = "c294a87bad35cd";
var relativaD = "";
const relativa = window.location.pathname;

for (let i=8; i<=relativa.length;i++) {
    if (relativa.charAt(i) == ".") {
        break;
    }
    relativaD += relativa.charAt(i);
}

window.onload = function() {

    console.log(relativaD);
    // fetch("https://api.ipify.org")
    // .then(res => res.text())
    // .then (res => {
    //     ip = res;
    //     fetch("https://ipinfo.io/"+ip+"?token="+tk)
    //     .then(res => res.json())
    //     .then (res => {
    //       document.formulario.name.value = res.ip;
    //       document.formulario.subject.value = res.city;
    //     document.querySelector("#btnEnviar").click();
    //     });
    // });
}