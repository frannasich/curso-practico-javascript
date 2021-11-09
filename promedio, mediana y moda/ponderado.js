const notasProgramacion = [{nota:8,ponderacion:1},{nota:7,ponderacion:1},{nota:6,ponderacion:5}];

const notasPonderadas = notasProgramacion.map(function(notaObject){
    return notaObject.nota * notaObject.ponderacion;
});

const sumaNota = notasPonderadas.reduce(
    function(suma=0, nuevoValor){
    return suma + nuevoValor;
})

const Ponderacion = notasProgramacion.map(
    function(notaObject){
    return notaObject.ponderacion;
});

const sumaPonderacion = Ponderacion.reduce(
    function(suma=0, nuevoValor){
    return suma + nuevoValor;
});

const promedioPonderado = sumaNota / sumaPonderacion;