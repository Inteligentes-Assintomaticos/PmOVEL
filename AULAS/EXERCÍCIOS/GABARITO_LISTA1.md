# GABARITO LISTA 1

## GABARITO DESAFIO

```html

<script>
    function buscarReceita() {
        let ingrediente = document.getElementById('ingrediente').value.toLowerCase().trim();
        let respostaDiv = document.getElementById('resposta');
        let receitas = ['ovo', 'leite', 'farinha', 'queijo', 'tomate', 'frango'];

        if (ingrediente === "") {
            respostaDiv.innerHTML = "⚠️ Digite um ingrediente primeiro!";
            respostaDiv.className = "resultado nao";
        } 
        else if (receitas.includes(ingrediente)) {
            respostaDiv.innerHTML = "✅ Temos receita com " + ingrediente + "! 🎉";
            respostaDiv.className = "resultado sim";
        } 
        else {
            respostaDiv.innerHTML = "❌ Não encontramos receitas com " + ingrediente + " :(";
            respostaDiv.className = "resultado nao";
        }
    }
</script>


```

## GABARITO EXERCÍCIOS

```js

// GABARITO - LISTA 1: IF ELSE e SWITCH CASE

//1
function verificarMaioridade(idade) {
    idade = Number(idade);
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

//2
function parOuImpar(numero) {
    if (numero === 0) {
        return "Zero é neutro";
    } else if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

//3

function mediaEscolar(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    
    if (media === 10) {
        return "Parabéns, nota máxima!";
    } else if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

//4

function diaDaSemana(numero) {
    switch(numero) {
        case 1: return "Domingo";
        case 2: return "Segunda-feira";
        case 3: return "Terça-feira";
        case 4: return "Quarta-feira";
        case 5: return "Quinta-feira";
        case 6: return "Sexta-feira";
        case 7: return "Sábado";
        default: return "Dia inválido, escolha de 1 a 7";
    }
}

//5

function calcularDesconto(valor) {
    if (valor > 500) {
        return valor * 0.8; // 20% desconto
    } else if (valor > 100) {
        return valor * 0.9; // 10% desconto
    } else {
        return valor * 0.95; // 5% desconto
    }
}

//6

function classificarNumero(numero) {
    if (numero > 0 && numero % 2 === 0) {
        return "Positivo e Par";
    } else if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Zero";
    }
}

//7

function tipoTriangulo(a, b, c) {
    // Valida se forma um triângulo
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Não forma um triângulo";
    }
    
    if (a === b && b === c) {
        return "Equilátero";
    } else if (a === b || a === c || b === c) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

//8

function calculadora(num1, num2, operador) {
    switch(operador) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': 
            if (num2 === 0) {
                return "Erro: divisão por zero";
            }
            return num1 / num2;
        default: return "Operador inválido";
    }
}

//9

function anoBissexto(ano) {
    let bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    
    if (bissexto) {
        return `Ano ${ano} é bissexto - Fevereiro tem 29 dias`;
    } else {
        return `Ano ${ano} não é bissexto - Fevereiro tem 28 dias`;
    }
}

//10

function sistemaAcesso() {
    let tentativas = 0;
    let usuario, senha;
    
    while (tentativas < 3) {
        usuario = prompt("Usuário:");
        senha = prompt("Senha:");
        
        if (usuario === "admin" && senha === "1234") {
            return "Acesso liberado!";
        }
        tentativas++;
        alert(`Tentativa ${tentativas} de 3 falhou`);
    }
    return "Acesso bloqueado!";
}

// GABARITO - LISTA 2: FOR e WHILE

//1

function contagemCrescente() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function contagemDecrescente() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}

//2

function contagemRegressiva(inicio) {
    while (inicio >= 1) {
        console.log(inicio);
        inicio--;
    }
}

//3

function tabuadaPares(numero) {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }
}

//4

function somaPares() {
    let soma = 0;
    let quantidade = 0;
    let i = 1;
    
    while (i <= 100) {
        if (i % 2 === 0) {
            soma += i;
            quantidade++;
        }
        i++;
    }
    console.log(`Soma: ${soma}, Quantidade: ${quantidade}`);
    return { soma, quantidade };
}

//5

function fatorial(numero) {
    if (numero > 10) {
        console.log("Aviso: o resultado será gigante!");
    }
    
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

//6

function numerosImpares() {
    let quantidade = 0;
    
    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            console.log(i);
            quantidade++;
        }
    }
    console.log(`Total de ímpares: ${quantidade}`);
    return quantidade;
}

//7 

function mediaNotas() {
    let soma = 0;
    let maior = -Infinity;
    let menor = Infinity;
    let contador = 0;
    let nota;
    
    while (true) {
        nota = parseFloat(prompt("Digite a nota (ou -1 para sair):"));
        
        if (nota === -1) break;
        
        soma += nota;
        contador++;
        
        if (nota > maior) maior = nota;
        if (nota < menor) menor = nota;
    }
    
    let media = soma / contador;
    return { media, maior, menor };
}

//8

function mediaNotas() {
    let soma = 0;
    let maior = -Infinity;
    let menor = Infinity;
    let contador = 0;
    let nota;
    
    while (true) {
        nota = parseFloat(prompt("Digite a nota (ou -1 para sair):"));
        
        if (nota === -1) break;
        
        soma += nota;
        contador++;
        
        if (nota > maior) maior = nota;
        if (nota < menor) menor = nota;
    }
    
    let media = soma / contador;
    return { media, maior, menor };
}

//8

function fibonacci(termos) {
    let a = 0, b = 1;
    
    for (let i = 0; i < termos; i++) {
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
}

//9

function contarDigitos(numero) {
    numero = Math.abs(numero); // Ignora o sinal negativo
    let contador = 0;
    
    if (numero === 0) return 1;
    
    while (numero > 0) {
        numero = Math.floor(numero / 10);
        contador++;
    }
    return contador;
}

//10

function validarEntrada() {
    let tentativas = 0;
    let numero;
    
    while (tentativas < 100) {
        numero = parseInt(prompt("Digite um número entre 1 e 10:"));
        tentativas++;
        
        if (numero >= 1 && numero <= 10) {
            console.log(`Número válido! Tentativas: ${tentativas}`);
            return numero;
        }
        console.log(`Tentativa ${tentativas} - Número inválido`);
    }
    return null;
}

```

### Aviso

Gabarito completo. Se tiver algum erro por favor nos reporte em issues, esses exercícios foram gerados por IA, podem conter alguma falha, nenhum foi verificado até agora.


