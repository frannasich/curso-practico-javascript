function onClickButtonSalaryCount(){
    const inputSalary = document.getElementById("InputSalary");
    const salaryValue = inputSalary.value;
   
    const texto = tipoSalario(inputSalary.value)
    const ahorroR = capacidadDeAhorro(inputSalary.value)
    const impuestosR = calculoImpuestos(inputSalary.value)
}

function tipoSalario(salario){
    const resultP = document.getElementById("ResultP");
  
    if(salario >= 2000){
        resultP.innerText ="Tu salario está dentro de la categoría: Salario Clase Alta Argentina"
    }
    else if (salario >= 900){
        resultP.innerText ="Tu salario está dentro de la categoría: Salario Clase Media-Alta Argentina"
    }
    else if (salario >= 500){
        resultP.innerText = "Tu salario está dentro de la categoría: Salario Promedio Argentina"
    }
    else if (salario <= 500){
        resultP.innerText= "Tu salario está dentro de la categoría: Salario Clase Baja Argentina"
    }
}

function calculoImpuestos (salario){
    const impuestosC = document.getElementById("ImpuestosC")

    if(salario >= 1000){
        porcentajeImpuestos = salario - ((salario * 66) / 100)
   }
   else if(salario >= 500){
    porcentajeImpuestos = salario - ((salario * 70) / 100)
    }
    else if(salario >= 200){
    porcentajeImpuestos = salario - ((salario * 80) / 100)
    }
    else if(salario < 200){
        porcentajeImpuestos = salario - ((salario * 90) / 100)
    }



    
    return impuestosC.innerText = "Los impuestos mensuales a tu salario son de: " + porcentajeImpuestos + "USD"

}

function capacidadDeAhorro (salario){
    const ahorroC = document.getElementById("AhorroC")
    const porcentajeAhorro = salario - ((salario * 90) / 100)

    return ahorroC.innerText = "Tu capacidad de ahorro mensual es de: " + porcentajeAhorro + "USD";
}