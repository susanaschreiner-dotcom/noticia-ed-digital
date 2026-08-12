const botao = document.getElementById("botao");

botao.addEventListener("click", function () {
    document.querySelector("article").classList.toggle("destaque");

    if (document.querySelector("article").classList.contains("destaque")) {
        botao.textContent = "Remover destaque";
    } else {
        botao.textContent = "Clique para destacar a notícia";
    }
});
