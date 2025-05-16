var proximaImagem = 1;//guarda a posição da imagem que deve entrar na tela, no caso é a imagem da posição 1, pois a imagem 0 já está visível na tela
var zIndexAtual = 0;//usado para criar um aumento progressivo no z-index
var imagens = document.getElementById("container").children;//pega todos os nodos filhos da div #container, ou seja, nossa coleção de imagens

function avancarImagem(){
    imagem = imagens[proximaImagem];//armazena a proxima imagem na fila em uma variável
    imagem.style.zIndex = ++zIndexAtual;//aumenta o índice do z-index e atribui à próxima imagem da fila
    imagem.style.marginLeft = "0%";//reseta a margem da imagem, fazendo ela entrar na tela


    if(proximaImagem >= imagens.length){
        proximaImagem = 0;
    }

    setTimeout(resetarImagens,500);
}

function resetarImagens(){
    imagemVisivel = proximaImagem -1;

    if(imagemVisivel < 0){
        imagemVisivel = imagens.length - 1;
    }
    for(var i = 0; i < imagens.length; i++){
        if(i != imagemVisivel){
            imagens[i].style.marginLeft = "100%";
        }
    }
}

var intervalo = setInterval(avancarImagem,100);