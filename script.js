// Seleciona o formulário
const form = document.getElementById("formContato");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Captura os valores
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    // Expressão para validar email
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // Verifica campos vazios
    if (nome === "" || email === "" || mensagem === "") {

        alert("Preencha todos os campos!");
        return;

    }

    // Verifica email
    if (!emailValido.test(email)) {
        alert("Digite um email válido!");
        return;
    }

    // Simulação de envio

    alert("Mensagem enviada com sucesso!");

    // Limpa campos
    form.reset();

});


// TEMA CLARO/ESCURO

const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});