// Helpers
function esPar(numero){
    return (numero % 2 === 0);
 }
 
 function calcularMediaAritmetica(lista) {
     const sumaLista = lista.reduce(
       function(valorAcumulado = 0, nuevoElemento){
         return valorAcumulado + nuevoElemento;
       }
     );
   
     const promedioLista = sumaLista / lista.length;
   
     return promedioLista;
   }

// Calculadora mediana
   function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2)

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1]
        const personaMitad2 = lista[mitad]

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);

        return mediana
    }else {
        const personaMitad = lista[mitad]
        return personaMitad
    }
}

// Mediana general
const salariosArg = argentina.map(
    function(persona){
        return persona.salary
    }
);

const salariosArgSorted = salariosArg.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB
    }
);


const medianaGeneralArg = medianaSalarios(salariosArgSorted)

// Mediana del Top 20%
const spliceStart = (salariosArgSorted.length * 80) / 100
const spliceCount = salariosArgSorted.length - spliceStart

const salariosArgTop20 = salariosArgSorted.splice(spliceStart, spliceCount)

const medianaArgTop20 = medianaSalarios(salariosArgTop20)

console.log({medianaGeneralArg, medianaArgTop20})
