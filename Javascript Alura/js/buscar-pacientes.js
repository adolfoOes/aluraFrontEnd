var botaoConsulta = document.querySelector("#buscar-pacientes")

botaoConsulta.addEventListener('click',function(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load",function(){
        
        var erroAjax = document.querySelector("#erro-ajax")

        if (xhr.status == 200 ){
            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta)
            erroAjax.classList.add("invisivel")
            
            pacientes.forEach(paciente => {
                adicionarPaciente(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel")
        }
        
    })

    xhr.send();

})