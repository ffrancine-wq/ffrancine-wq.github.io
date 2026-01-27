document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("FormForro");
    const info = document.getElementById("info");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        info.style.display = "none";
        info.innerHTML = "";

        const gravacoes = document.getElementById("gravacoes").value;
        const instrumento = document.getElementById("instrumento").value;
        const estilo = document.getElementById("estilo").value;
        const decada = document.getElementById("decada").value;
        const tipos = document.querySelectorAll('input[name="tipo"]:checked');

        let erros = [];

        if (!gravacoes) erros.push("Selecione o tipo de gravação.");
        if (!instrumento) erros.push("Selecione o instrumento principal.");
        if (!estilo) erros.push("Selecione o estilo de forró.");
        if (!decada) erros.push("Selecione a década.");
        if (tipos.length === 0) erros.push("Escolha Banda ou Artista solo.");

        if (erros.length > 0) {
            mostrarErros(erros);
            return;
        }

        // 🔥 REGRAS REAIS DE ARTISTAS
        let artista = "";
        let descricao = "";

        if (instrumento === "instrumento1" && decada === "1940" && estilo === "raiz") {
            artista = "Luiz Gonzaga";
            descricao = "Conhecido como o Rei do Baião, foi o maior responsável por levar o forró ao Brasil inteiro.";
        } 
        else if (instrumento === "instrumento4" && decada === "1960") {
            artista = "Dominguinhos";
            descricao = "Discípulo de Luiz Gonzaga, mestre da sanfona e grande compositor do forró tradicional.";
        } 
        else if (instrumento === "instrumento2" && estilo === "raiz") {
            artista = "Jackson do Pandeiro";
            descricao = "Revolucionou o ritmo nordestino com sua batida única e influência no forró.";
        }
        else if (estilo === "romantico" && decada === "1990") {
            artista = "Falamansa";
            descricao = "Responsável por popularizar o forró universitário e romântico nos anos 90.";
        }
        else if (estilo === "eletronico" && tipos[0].value === "bandas") {
            artista = "Mastruz com Leite";
            descricao = "Uma das bandas mais importantes do forró eletrônico, com enorme sucesso nacional.";
        }
        else {
            artista = "Trio Nordestino";
            descricao = "Grupo clássico que preserva a essência do forró tradicional em todas as épocas.";
        }

        mostrarResultado(artista, descricao);
        form.reset();
    });

    function mostrarErros(erros) {
        info.style.display = "block";
        info.innerHTML = "<ul></ul>";
        const ul = info.querySelector("ul");

        erros.forEach(erro => {
            const li = document.createElement("li");
            li.textContent = erro;
            li.style.color = "#b3261e";
            ul.appendChild(li);
        });

        animar(info);
    }

    function mostrarResultado(artista, descricao) {
        info.style.display = "block";
        info.innerHTML = `
            <div class="titulo-artista">🎶 ${artista}</div>
            <p>${descricao}</p>
            <p><strong>Recomendação:</strong> Explore músicas clássicas e apresentações históricas.</p>
        `;

        animar(info);
    }

    function animar(elemento) {
        elemento.style.opacity = 0;
        let op = 0;
        const fade = setInterval(() => {
            if (op >= 1) clearInterval(fade);
            elemento.style.opacity = op;
            op += 0.05;
        }, 20);
    }

});
