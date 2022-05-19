import enlaces from "./json/url.json" assert {type:"json"};
var articulos = [];
window.onload = function() {
    for (let i=0;i<enlaces.length;i++) {
        document.body.innerHTML+= 
        `<article id="${i+1}"><h1>${enlaces[i].nombre}</h1></article>`
    }

    articulos = articulos.slice.call(document.querySelectorAll("article"));

    console.log(articulos);

    articulos.forEach(art => {
        art.addEventListener("mouseover", hover);
        art.addEventListener("mouseout",noHover);
        art.addEventListener("click",function() {
            window.open(enlaces[(art.id)-1].enlace);
            window.close();
        });
    });

    function hover(e) {
        articulos.forEach(art => {
            if (art != e.target) {
                art.classList.add("blur");
            }
        });
    }

    function noHover() {
        articulos.forEach(art =>{
            art.classList.remove("blur");
        });
    }
}