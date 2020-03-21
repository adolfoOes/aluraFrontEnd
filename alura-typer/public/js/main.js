var campo = $(".campo-digitacao");
var tempoInicial = $("#tempo-digitacao").text();

$(function(){
    atualizaTamanhoFrase()
    iniciaContadores()
    iniciaCronometro()
    inicializaMarcadores()
    $("#botao-reiniciar").click(reiniciaJogo)
    atualizaPlacar()
})

function atualizaTamanhoFrase(){
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

function atualizaTempoInicial(tempo){
    tempoInicial = $("#tempo-digitacao").text();
    $("#tempo-digitacao").text(tempo)
}

function iniciaContadores(){
    campo.on("input",function(){
        var frase = campo.val()
        var numPalavras = frase.split(/\S+/).length -1
        var qtdCaracteres = frase.length
    
        $("#contador-caracteres").text(qtdCaracteres)
        $("#contador-palavras").text(numPalavras)
        
    })
}

function iniciaCronometro(){
    
    campo.one("focus",function(){

        var tempoRestante = $("#tempo-digitacao").text()

        $("#botao-reiniciar").attr("disabled",true);

        var intervalo = setInterval(function(){
            tempoRestante--
            
            $("#tempo-digitacao").text(tempoRestante)
    
            if (tempoRestante < 1) {
                
                clearInterval(intervalo)
                finalizaJogo()
                
            }
    
        },1000)   
    })
}

function reiniciaJogo(){
    campo.attr("disabled",false)
    campo.val("")
    campo.toggleClass("campo-desabilitado")
    $("#contador-caracteres").text("0")
    $("#contador-palavras").text("0")
    $("#tempo-digitacao").text(tempoInicial)
    campo.removeClass("borda-coreta")
    campo.removeClass("borda-errada")
    iniciaCronometro()
}

function finalizaJogo(){
    inserePlacar()
    campo.attr("disabled",true)
    campo.toggleClass("campo-desabilitado")
    $("#botao-reiniciar").attr("disabled",false);
}

function inicializaMarcadores(){
    campo.on("input",function(){
        var frase = $(".frase").text();
        var digitado = campo.val();
        var comparavel = frase.substr(0,digitado.length);
        
        if (digitado == comparavel){
            campo.addClass("borda-correta")
            campo.removeClass("borda-errada")
            
        } else {
            campo.addClass("borda-errada")
            campo.removeClass("borda-correta")
        }
    
    })
}