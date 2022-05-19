function consultaREST(nombre) {
    var nombre = `../json/${nombre}.json`;
    let  array = [];
    fetch(nombre)
    .then(res => res.json())
    .then(data => {
        array = data;
        console.log(data);
       
    });

    console.log(array);
    return array;
}