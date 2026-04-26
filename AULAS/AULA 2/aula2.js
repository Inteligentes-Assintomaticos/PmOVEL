// Função
// Uma função é um bloco de código que pode ser reutilizado para realizar uma tarefa específica. Ela pode receber parâmetros e retornar um valor.

console.log(soma(3, 5)); // Chama a função soma com os argumentos 3 e 5 e imprime o resultado no console

function soma(a, b) {
    return "O resultado da soma de " + a + " e " + b + " é: " + (a + b); // Retorna a soma dos dois parâmetros
}

// Uma função pode ser chamada mesmo sem ter sido definida antes, graças ao hoisting. O JavaScript "eleva" as declarações de função para o topo do escopo, permitindo que sejam usadas antes de sua definição no código.

//Arrow Function
// As arrow functions são uma forma mais concisa de escrever funções em JavaScript. Elas não possuem seu próprio contexto de "this" e são frequentemente usadas para funções anônimas ou como callbacks.

//Função normal
function multiplicar (x, y) {
    console.log(x + y); // Imprime a soma de x e y no console
}

//Arrow Function
soma = (x, y) => {console.log(x + y)};


//--------------------------------------------------------------


//Comando prompt

// O comando prompt é utilizado para exibir uma caixa de diálogo que solicita ao usuário que insira um valor. Ele retorna o valor inserido pelo usuário como uma string.

prompt("Digite seu nome:"); // Exibe um prompt solicitando ao usuário que digite seu nome


//Comando confirm

// O comando confirm é utilizado para exibir uma caixa de diálogo que solicita ao usuário que confirme ou cancele uma ação. Ele retorna true se o usuário clicar em "OK" e false se clicar em "Cancelar".

confirm("Você tem certeza que deseja continuar?"); // Exibe um confirm solicitando ao usuário que confirme se deseja continuar 



