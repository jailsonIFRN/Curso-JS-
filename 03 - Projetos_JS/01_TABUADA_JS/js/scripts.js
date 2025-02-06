// Seleção de elementos
// Seleciona o formulário onde será realizada a multiplicação, usando o id "multiplication-form"
const multiplicationForm = document.querySelector("#multiplication-form");

// Seleciona o input de número base da multiplicação, usando o id "number"
const numberInput = document.querySelector("#number");

// Seleciona o input onde o usuário define até que número deseja multiplicar, usando o id "multiplicator"
const multiplicationInput = document.querySelector("#multiplicator");

// Seleciona o título onde será exibido o número base da multiplicação, usando o id "multiplication-title" e selecionando o <span> dentro dele
const multiplicationTitle = document.querySelector("#multiplication-title span");

// Seleciona o elemento onde será inserida a tabela com os resultados das multiplicações, usando o id "multiplication-operations"
const multiplicationTable = document.querySelector("#multiplication-operations");

// Funções
// Função que cria e exibe a tabela de multiplicação
const createTable = (number, multiplicationNumber) => {
    // Limpa a tabela antes de adicionar os novos resultados
    multiplicationTable.innerHTML = "";

    // Laço que gera as multiplicações de 1 até o número escolhido pelo usuário (multiplicationNumber)
    for (let i = 1; i <= multiplicationNumber; i++) {
        // Calcula o resultado da multiplicação
        const result = number * i;

        // Cria um template HTML com a operação e o resultado da multiplicação
        const template = `<div class="row">
                            <div class="operation">${number} x ${i} = </div>
                            <div class="result">${result}</div>
                        </div>`;

        // Cria um parser de HTML para poder converter o template de string para elementos HTML
        const parser = new DOMParser();
        
        // Converte a string HTML em um documento, para que possamos acessar os elementos dentro dela
        const htmlTemplate = parser.parseFromString(template, "text/html");
        
        // Seleciona a linha (div com a classe "row") que foi gerada
        const row = htmlTemplate.querySelector(".row");

        // Adiciona a linha gerada à tabela de multiplicação na página
        multiplicationTable.appendChild(row);
    }

    // Atualiza o título com o número base da multiplicação
    multiplicationTitle.innerText = number;
};

// Eventos
// Escuta o evento de "submit" do formulário para disparar a criação da tabela
multiplicationForm.addEventListener("submit", (e) => {
    // Impede o comportamento padrão do formulário (evita o recarregamento da página ao submeter)
    e.preventDefault();

    // Pega os valores inseridos pelos usuários nos campos de input e os converte para números
    const number = +numberInput.value;
    const multiplicationNumber = +multiplicationInput.value;

    // Validação simples: se um dos campos não for preenchido corretamente (valor falso ou zero), exibe um alerta e não cria a tabela
    if (!number || !multiplicationNumber) {
        alert("Por favor, insira números válidos.");
        return;
    }

    // Chama a função para criar a tabela de multiplicação passando os números inseridos
    createTable(number, multiplicationNumber);
});
