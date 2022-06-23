var cambio = false;

window.onload = function ()  {
    var select = document.getElementById("select");
    var h2 = document.querySelector("h2");
    var h3 = document.querySelector("h3");
    var borrarCookie = document.querySelector("button")
    var selectArray = Array;
    selectArray["opt1"] = "Pipas";
    selectArray["opt2"] = "Cacahuetes";
    selectArray["opt3"] = "Chetos";


    for (const i in selectArray) {
        select.innerHTML+= "<option value='" +i+ "'>" + selectArray[i] + "</option>";
    }

    select.addEventListener("change", function () {
        h2.innerHTML = "Va compla " + selectArray[select.value];
        localStorage.setItem("compra",select.value);
    })

    if (localStorage.getItem("compra")!=null) {
        h3.innerHTML = "(Tu última compla fue " + selectArray[localStorage.getItem("compra")] + ")";
    
    }

    borrarCookie.onclick = function() {
        localStorage.clear();
        location.reload();
    }
    
}



document.addEventListener("mousemove",cambioTrue);

document.addEventListener("click",cambioTrue);

document.addEventListener("keypress",cambioTrue);

function cambioTrue() {
    cambio = true;
}

setInterval(function () {
    console.log("Leviso questasiendo...");
    if (!cambio)
    alert("¿Pol que tu mila mucho altículo? Aqui no loba tú.");
    cambio = false;
},10000)