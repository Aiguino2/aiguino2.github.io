const tk = "c294a87bad35cd";
var relativaD = "";
const relativa = window.location.pathname;

if (relativa.startsWith("/pedido")) {
    for (let i=8; i<=relativa.length;i++) {
        if (relativa.charAt(i) == ".") {
            break;
        }
        relativaD += relativa.charAt(i);
    }
    localStorage.setItem("user",relativaD);
    
    window.onload = function() {
        fetch("https://api.ipify.org/?format=json")
        .then(res => res.json())
        .then (res => {
            ip = res.ip;
            fetch("https://ipinfo.io/"+ip+"?token="+tk)
            .then(res => res.json())
            .then (res => {
                document.formulario.name.value = relativaD;
                document.formulario.subject.value = res.ip;
                document.formulario.comments.value = res.city;
                document.querySelector("#btnEnviar").click();
            });
        });
    }
} else {
    window.onload = function() {
        document.querySelector("div").classList.remove("invisible");
    }
}

