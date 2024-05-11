// Quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

// Pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

// Identificar o clique no botão
botaoMostrarProjetos.addEventListener('click', () => {
    // Adicionar a classe "ativo" nos projetos escondidos
    mostrarMaisProjetos();

    // Esconder o botão de mostrar mais
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
