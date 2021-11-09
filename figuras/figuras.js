// Código del cuadrado
console.group("Cuadrado")

function perimetroCuadrado (lado) {
    return lado * 4
} 

function areaCuadrado (lado){
    return lado * lado
} 

console.groupEnd()

// Código del triángulo
console.group("Triángulo")

function perimetroTriangulo ( lado1, lado2, base){
    return  lado1 + lado2 + base
}


function areaTriangulo ( base, altura){
    return  (base * altura) / 2
}

console.groupEnd()

// Código del círculo
console.group("Círculo")

//Radio

//Diámetro
function diametroCirculo (radio){
    return radio * 2
} 

//PI
const PI = Math.PI

//Circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI
}

//Area
function areaCirculo (radio){
    return (radio * radio) * PI
}

console.groupEnd()


// Aquí interactuamos con el HTML

// Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value

    const perimetro = perimetroCuadrado(value)
    alert(perimetro + "cm")
}


function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value

    const area = areaCuadrado(value)
    alert(area + "cm^2")
}

// Triángulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTrianguloLado1")
    const value1 = input1.value

    const input2 = document.getElementById("InputTrianguloLado2")
    const value2 = input2.value

    const input3 = document.getElementById("InputTrianguloBase")
    const value3 = input3.value

    const perimetro = perimetroTriangulo(value1, value2, value3)
    alert(perimetro + "cm")
}


function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTrianguloLado1")
    const value1 = input1.value
   
    const input2 = document.getElementById("InputTrianguloLado2")
    const value2 = input2.value
   
    const input3 = document.getElementById("InputTrianguloBase")
    const value3 = input3.value

    const input4 = document.getElementById("InputTrianguloAltura")
    const value4 = input4.value

    const area = areaTriangulo(value3, value4)
    alert(area + "cm^2")
}

// Círculo
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo")
    const value = input.value

    const perimetro = perimetroCirculo(value)
    alert(perimetro + "cm")
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo")
    const value = input.value

    const area = areaCirculo(value)
    alert(area + "cm^2")
}