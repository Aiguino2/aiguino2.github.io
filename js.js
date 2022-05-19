import enlaces from "./json/url.json" assert {type:"json"};

window.onload = function() {
    for (let i=0;i<enlaces.length;i++) {
        document.body.innerHTML+= 
        `<article><h1>${enlaces[i].nombre}</h1></article>`
    }
}