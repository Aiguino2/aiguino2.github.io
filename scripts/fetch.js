function consultaREST(nombre) {
    let  array = [];
    fetch(nombre)
    .then(res => res.json())
    .then(data => {
        array = data;
    });
    return array;
}

function consultaRESTLOCAL(nombre) {
    var nombre = `../json/${nombre}.json`;
    let  array = [];
    fetch(nombre)
    .then(res => res.json())
    .then(data => {
        array = data;
    });
    return array;
}