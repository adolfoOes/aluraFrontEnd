var titulo = document.querySelector(".titulo")

titulo.textContent = "Juliana Nutrição";

var pacienteList = document.querySelectorAll(".paciente");

pacienteList.forEach(paciente => {
    
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var tdIMC = paciente.querySelector(".info-imc")
    var imc = calculcarIMC(peso,altura)
    
    var pesoValido = true;
    var altValida = true;
    
    if (!validaPeso(peso)) {
        tdIMC.textContent = "Peso inválido!"
        pesoValido = false;
        paciente.classList.add("paciente-invalido")
    }
    
    if (!validaAltura(altura)) {
        tdIMC.textContent = "Altura inválida!"
        altValida = false;
        paciente.classList.add("paciente-invalido")
    }
    
    if (altValida && pesoValido) {
        tdIMC.textContent = imc
    }

});

function calculcarIMC(peso,altura){
    var imc = (peso/(altura*altura));
    return imc.toFixed(2)
}

function validaPeso(peso){
    
    if (peso > 0 && peso < 1000) {
        return true
    } else {
        return false
    }

}

function validaAltura(altura){
    
    if (altura > 0 && altura < 2.5) {
        return true
    } else {
        return false
    }

}