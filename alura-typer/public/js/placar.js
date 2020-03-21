$("#botao-placar").click(mostraPlacar);
$("#botao-sync").click(sincronizaPlacar);


function inserePlacar(){
    var tabela = $(".placar").find("tbody")
    var nomeUsuario = "Jose"
    var numPalavras = $("#contador-palavras").text()
    
    var linha = novaLinha(nomeUsuario,numPalavras)
    linha.find(".botao-remover").click(removeLinha)

    tabela.prepend(linha)

    $(".placar").slideDown()

    scrollPlacar()

}

function scrollPlacar(){
    
    var posicaoPlacar = $(".placar").offset().top;

    $(".body").animate({

        scrollTop: posicaoPlacar+"px"

    }, 1000)

}

function novaLinha(usuario,numPalavras){
    var linha = $("<tr>")
    var colUsuario = $("<td>").text(usuario)
    var colPalavras = $("<td>").text(numPalavras)
    var colRemover = $("<td>")
    
    var link = $("<a>").addClass("botao-remover").attr("href","#")
    var icone = $("<i>").addClass("small").addClass("small material-icons").text("delete")

    link.append(icone)
    colRemover.append(link)
    linha.append(colUsuario)
    linha.append(colPalavras)
    linha.append(colRemover)
    
    return linha
}

function removeLinha(){

    event.preventDefault()
    var linha = $(this).parent().parent()

    linha.fadeOut(500)

    setTimeout(function() {
        linha.remove();
    }, 500);

}

function mostraPlacar(){
    $(".placar").stop().slideToggle();
}

function sincronizaPlacar() {
    
    var placar = [];
    var linhas = $("tbody>tr");

    linhas.each(function(){

        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).find("td:nth-child(2)").text();

        var score = {
            usuario: usuario,
            pontos: palavras
        }
        
        placar.push(score)

    });

    var dados = {
        placar: placar
    }

    $.post("http://localhost:3000/placar",dados,function(){

    })
}

function atualizaPlacar() {

    var tabela = $(".placar").find("tbody")

    $.get("http://localhost:3000/placar",function(data){
        
        data.forEach(element => {
            var linha = novaLinha(element.usuario, element.pontos)
            linha.find(".botao-remover").click(removeLinha)
            tabela.prepend(linha)
        });

    })
    
}


