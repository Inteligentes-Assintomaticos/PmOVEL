// Exercício 1

function boasVindas() {
    alert("Bem-vindo!");
}

boasVindas();

// Exercício 2

function mostrarNome () {
    let nome = prompt('Digite seu nome: ');
    alert('Olá,' + nome + '!');
}

mostrarNome();

// Exercício 3

function somaDois(x, y) {
    alert("O resultado da soma entre " + x + " e " + y + " é: " + (x + y));
}

somaDois(5, 10);

// Exercício 4

function dobro(x) {
    console.log('O dobre de' + x + ' é:' + (x * 2));
}

dobro(5);

// Exercício 5

function saudacaoPersonalizada(nome) {
    let nomeUsuario = prompt('Digite seu nome: ');
    let idadeUsuario = prompt('Digite sua idade: ');
    alert('Olá, ' + nomeUsuario + 'voce tem ' + idadeUsuario + ' anos!');
}

saudacaoPersonalizada();

// Exercício 6

function multiplicacaoPrompt() {
    let num1 = Number(prompt('Digite o primeiro número: '));
    let num2 = Number(prompt('Digite o segundo número: '));
    console.log('O resultado da multiplicação entre ' + num1 + ' e ' + num2 + ' é: ' + (num1 * num2));
}

multiplicacaoPrompt();

// Exercício 7

function confirmEContuinua() {
    let resposta = confirm('Deseja receber uma mensagem especial?');
    alert(resposta ? 'Aqui está sua mensagem especial!' : 'Tudo bem, talvez na próxima vez!');
}

confirmEContuinua();

// Exercício 8

function calcularMedia() {
    let num1 = Number(prompt('Digite o primeiro número: '));
    let num2 = Number(prompt('Digite o segundo número: '));
    let num3 = Number(prompt('Digite o terceiro número: '));
    let media = (num1 + num2 + num3) / 3;
    alert('A média dos números é: ' + media);
}

calcularMedia();

// Exercício 9

function operacaoDinamica() {
    let num1 = Number(prompt('Digite o primeiro número: '));
    let num2 = Number(prompt('Digite o segundo número: '));
    let operador = prompt('Digite a operação desejada (+, -, *, /): ');

    function calcular(operador, num1, num2) {
        const operacoes = {
            'soma' : (x, y) => x + y,
            'subtracao' : (x, y) => x - y,
            'multiplicacao' : (x, y) => x * y,
            'divisao' : (x, y) => x / y,
            'padrao' : () => 'Operação inválida'
        };

        const funcao = operacoes[operador] || operacoes['padrao'];

        return funcao(num1, num2);
    }

    console.log('O resultado da operação é: ' + calcular('soma', num1, num2));
    console.log('O resultado da operação é: ' + calcular('subtracao', num1, num2));
    console.log('O resultado da operação é: ' + calcular('multiplicacao', num1, num2));
    console.log('O resultado da operação é: ' + calcular('divisao', num1, num2));
}

// Exercício 10

function confirmAlertConsole() {
    const resposta = confirm("Você quer uma saudação?");
    
    const mensagens = {
        true: {
            alert: "Olá!",
            console: "Saudação enviada"
        },
        false: {
            alert: "Ok, sem saudação",
            console: "Usuário recusou saudação"
        }
    };
    
    alert(mensagens[resposta].alert);
    console.log(mensagens[resposta].console);
}

confirmAlertConsole();
