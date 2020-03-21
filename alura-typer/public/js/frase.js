$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscarFrase);


function fraseAleatoria(){

    $("#spinner").toggle()

    $.get("http://localhost:3000/frases",trocaFraseAleatoria)
    .fail(function(){
        
        $("#erro").toggle()

        setTimeout(() => {
            $("#erro").toggle()
        }, 5000);

    })
    .always(function(){
        $("#spinner").toggle()
    })
}

function trocaFraseAleatoria(data){
    
    var frase = $(".frase")
    var numAleatorio = Math.floor(Math.random() * data.length)
    frase.text(data[numAleatorio].texto)

    atualizaTamanhoFrase()
    atualizaTempoInicial(data[numAleatorio].tempo)

}

function buscarFrase() {
   
    $("#spinner").toggle()
   
    var fraseId = $("#frase-id").val();
    var dados = {id: fraseId}


    $.get("http://localhost:3000/frases",dados,trocaFrase)
    .fail(function(){
        
        $("#erro").toggle()

        setTimeout(() => {
            $("#erro").toggle()
        }, 5000);

    })
    .always(function(){
        $("#spinner").toggle()
    })
}

function trocaFrase(data) {
    var frase = $(".frase")
    frase.text(data.texto)

    atualizaTamanhoFrase()
    atualizaTempoInicial(data.tempo)    
}