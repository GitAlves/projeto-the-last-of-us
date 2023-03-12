/* 
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    - passo 1 - dar um jeito de pegar o elemento HTML dos botões

    - passo 2 - dar um jeito de identificar o clique do usuário no botão

    - passo 3 - desmarcar o botão selecionado anterior

    - passo 4 - marcar o botão selecionado anterior

    - passo 5 - esconder a imagem de fundo anterior

    - passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

// passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

// passo 2 - dar um jeito de identificar o clique do usuário no botão

// Jeito não tão legível
// const botao1 = document.getElementById('botao1');
// botao1.addEventListener('click', () => {
//     console.log('clicou no botao 1');
// })

// const botao2 = document.getElementById('botao2');
// botao2.addEventListener('click', () => {
//     console.log('clicou no botao 2');
// })

// Melhor jeito
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        // passo 4 - marcar o botão selecionado anterior
        selecionarBotaoCarrossel(botao);

        // passo 5 - esconder a imagem ativa de fundo 
        esconderImagemAtiva();

        // passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        mostrarImagemDeFundo(indice);
    })
})
function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

