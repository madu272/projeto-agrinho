document.addEventListener("DOMContentLoaded", function () {

    const botao = document.querySelector(".btn");

    botao.addEventListener("click", function (event) {
        event.preventDefault();

        alert(
            "🌱 Agro Forte e Futuro Sustentável!\n\n" +
            "A agricultura sustentável une tecnologia, produtividade e preservação ambiental para garantir alimento e qualidade de vida para as futuras gerações."
        );
    });

});