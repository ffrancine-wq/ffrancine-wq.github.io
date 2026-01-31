document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("FormForro");
    const info = document.getElementById("info");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        info.style.display = "none";
        info.innerHTML = "";

        // CAPTURA DOS VALORES
        const gravacoes = document.getElementById("gravacoes").value;
        const instrumento = document.getElementById("instrumento").value;
        const estilo = document.getElementById("estilo").value;
        const decada = document.getElementById("decada").value;
        const tipos = document.querySelectorAll('input[name="tipo"]:checked');

        // VALIDAÇÃO
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

        // TIPO SELECIONADO (checkbox)
        let tipoSelecionado = null;
        if (tipos.length > 0) {
            tipoSelecionado = tipos[0].value;
        }

        // ARRAY DE ARTISTAS
        const artistas = [
            {
                nome: "Luiz Gonzaga",
                descricao: "Conhecido como o Rei do Baião."
            },
            {
                nome: "Dominguinhos",
                descricao: "Discípulo de Luiz Gonzaga, mestre da sanfona."
            },
            {
                nome: "Jackson do Pandeiro",
                descricao: "Revolucionou o ritmo nordestino."
            },
            {
                nome: "Magníficos",
                descricao: "Banda romântica de grande sucesso nos anos 90."
            },
            {
                nome: "Falamansa",
                descricao: "Popularizou o forró universitário."
            },
            {
                nome: "Calcinha Preta",
                descricao: "Grande nome do forró eletrônico dos anos 2000."
            },
            {
                nome: "Mastruz com Leite",
                descricao: "Uma das bandas mais importantes do forró eletrônico."
            }
        ];

        // ESCOLHA DO ARTISTA
        let artistaSelecionado = null;

        // FORRÓ RAIZ
        if (estilo === "raiz" && instrumento === "instrumento1" && decada === "1940") {
            artistaSelecionado = artistas[0];
        }
        else if (estilo === "raiz" && instrumento === "instrumento4" && decada === "1960") {
            artistaSelecionado = artistas[1];
        }
        else if (estilo === "raiz" && instrumento === "instrumento2") {
            artistaSelecionado = artistas[2];
        }

        // FORRÓ ROMÂNTICO
        else if (estilo === "romantico" && tipoSelecionado === "bandas" && decada === "1990") {
            artistaSelecionado = artistas[3];
        }
        else if (estilo === "romantico" && decada === "1990") {
            artistaSelecionado = artistas[4];
        }

        // FORRÓ ELETRÔNICO
        else if (estilo === "eletronico" && tipoSelecionado === "bandas" && decada === "2000") {
            artistaSelecionado = artistas[5];
        }
        else if (estilo === "eletronico") {
            artistaSelecionado = artistas[6];
        }

        // PADRÃO
        else {
            artistaSelecionado = {
                nome: " Nenhum artista disponivel ",
                descricao: "Ainda não há um artista cadastrado para essa combinação de escolhas."
            };
        }

        // MOSTRAR RESULTADO
        info.innerHTML = `
            <h3 class="titulo-artista">${artistaSelecionado.nome}</h3>
            <p>${artistaSelecionado.descricao}</p>
        `;

        info.style.display = "block";
        animar(info);
    });

    // FUNÇÕES AUXILIARES
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
