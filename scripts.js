let nomes = ["Weverton", "Marinho", "Matías Viña", "Soteldo", "Lucas Veríssimo", "Gustavo Gómez", "Rony", "Abel Ferreira", "Cuca"];

const texto = document.querySelector(".texto");

const numero = Math.round((Math.random() * (nomes.length - 1)));

console.log(numero);

texto.textContent = nomes[numero];