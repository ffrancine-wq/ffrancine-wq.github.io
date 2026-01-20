const form = document.getElementById("formForro");
const gravacoes = document.getElementById("gravações");
const instrumento = document.getElementById("instrumento");
const estilo = document.getElementById("estilo");
const decada = document.getElementById("decada");
const tipos = document.querySelectorAll('input[name="tipo"]');

form.addEventListener("submit", function (event) {
event.preventDefault(); // impede recarregar a página

alert("Funcionou!");

console.log("Gravações:", gravacoes.value);
console.log("Instrumento:", instrumento.value);
console.log("Estilo:", estilo.value);
console.log("Década:", decada.value);

tipos.forEach(tipo => {
if (tipo.checked) {
console.log("Tipo:", tipo.value);
}
});
});

