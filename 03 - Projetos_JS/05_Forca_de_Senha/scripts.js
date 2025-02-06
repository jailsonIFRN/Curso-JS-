// Seleciona o campo de entrada de senha no HTML
const passwordInput = document.querySelector("#passwordInput");

// Seleciona o indicador visual da força da senha
const strengthIndicator = document.querySelector("#password-strength-indicator");

// Seleciona o elemento onde será exibido o texto indicando a força da senha
const strengthText = document.querySelector("#password-strength-text");

// Adiciona um evento que será acionado sempre que o usuário digitar algo no campo de senha
passwordInput.addEventListener("input", function () {
    // Obtém o valor digitado no campo de senha
    const password = this.value;

    // Define os diferentes níveis de força da senha
    const strengths = {
        0: "Muito fraca",  // Nenhum critério atendido
        1: "Fraca",        // Apenas um critério atendido
        2: "Moderada",     // Dois critérios atendidos
        3: "Forte",        // Três critérios atendidos
        4: "Muito Forte",  // Quatro critérios atendidos
        5: "Excelente"     // Todos os critérios atendidos
    };

    let score = 0; // Inicializa a pontuação da senha

    // Verifica se a senha atende a cada um dos critérios abaixo e adiciona pontos
    if (password.length >= 8) score++; // Pelo menos 8 caracteres
    if (password.match(/[a-z]/)) score++; // Contém letras minúsculas
    if (password.match(/[A-Z]/)) score++; // Contém letras maiúsculas
    if (password.match(/[0-9]/)) score++; // Contém números
    if (password.match(/[^a-zA-Z0-9]/)) score++; // Contém caracteres especiais

    // Calcula a largura da barra de força como uma porcentagem (de 0 a 100%)
    const width = (score / 5) * 100;
    strengthIndicator.style.width = `${width}%`; // Atualiza a largura da barra

    // Define a cor da barra de acordo com a força da senha
    switch (score) {
        case 1:
            strengthIndicator.style.backgroundColor = "#e70b0b"; // Vermelho (Fraca)
            break;
        case 2:
            strengthIndicator.style.backgroundColor = "#ffb74d"; // Laranja (Moderada)
            break;
        case 3:
            strengthIndicator.style.backgroundColor = "#fff176"; // Amarelo (Boa)
            break;
        case 4:
            strengthIndicator.style.backgroundColor = "#81c784"; // Verde Claro (Forte)
            break;
        case 5:
            strengthIndicator.style.backgroundColor = "#4caf50"; // Verde Escuro (Excelente)
            break;
        default:
            strengthIndicator.style.backgroundColor = "transparent"; // Nenhuma cor se a senha estiver vazia
            break;
    }

    // Atualiza o texto que exibe a força da senha
    if (password.length > 0) {
        strengthText.textContent = `Força: ${strengths[score]}`;
    } else {
        strengthText.textContent = ""; // Limpa o texto se não houver senha digitada
    }
});
