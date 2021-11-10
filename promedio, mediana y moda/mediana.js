// function onClickButtonMediana(){
//     const inputLista = document.getElementById("InputLista")
//     const listaValue = inputLista.value

//     calcularMediana(listaValue)
// }

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
      }
    );
  
    const promedioLista = sumaLista / lista.length;
  
    return promedioLista;
  }


let mediana;


function esPar (numero){
    if (numero % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}


function calcularMediana(lista){
    
    lista.sort(function(a,b){
    return a-b
    });

    
    const mitadLista = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
      
        const promedioElemento1y2 = calcularMediaAritmetica([
          elemento1,
          elemento2,
        ]);
        
        mediana = promedioElemento1y2;
      } else {
        mediana = lista[mitadLista];
      }

      // const textHtml = document.getElementById("TextR")
      
      // return textHtml.innerText = "La mediana es: " + mediana
      return mediana
}













