function inserePlacar(){
    var tabela = $(".placar").find("tbody")
    var nomeUsuario = "Jose"
    var numPalavras = $("#contador-palavras").text()
    
    var linha = novaLinha(nomeUsuario,numPalavras)
    linha.find(".botao-remover").click(removeLinha)

    tabela.prepend(linha)

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
    event.preventDefault();
    $(this).parent().parent().remove();
}