var btnAdicionar = document.querySelector("#adicionar-paciente")
btnAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona")
    var paciente = obterPacienteForm(form);

    var erros = validaPaciente(paciente)

    if (erros.length > 0) {
        exibeMensagensDeErro(erros)
        return;
    }

    adicionarPaciente(paciente);
    form.reset();

})

function adicionarPaciente(paciente){
    var pacienteTr = montarPacienteTr(paciente)
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obterPacienteForm(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculcarIMC(form.peso.value, form.altura.value)
    }
    
    return paciente
}

function montarPacienteTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaPacienteTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaPacienteTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaPacienteTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaPacienteTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaPacienteTd(paciente.imc, "info-imc"));

    return pacienteTr
}

function montaPacienteTd(dado,classe){
    var newTd = document.createElement("td");
    newTd.textContent = dado;
    newTd.classList.add(classe);
    return newTd
}

function validaPaciente(paciente){
    
    var erros = []

    if (paciente.nome.length == 0 ) {
        erros.push("Nome não pode estar em branco!")
    }

    if (paciente.gordura.length == 0) {
        erros.push("Gordura não pode estar em branco!")
    }

    if (paciente.altura.length == 0) {
        erros.push("Altura não pode estar em branco!")
    } else if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida!")
    }

    if (paciente.peso.length == 0) {
        erros.push("Peso não pode estar em branco!")
    } else if (!validaPeso(paciente.peso)) {
            erros.push("Peso é inválido!")
    }
    
    return erros

}

function exibeMensagensDeErro(erros){

    var ul = document.querySelector("#mensagems-erro")
    ul.innerHTML = ""

    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro
        ul.appendChild(li)
    });

}
