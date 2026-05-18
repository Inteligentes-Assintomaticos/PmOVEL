# LISTA 1

## 📋 LISTA 1 - IF ELSE e SWITCH CASE (10 exercícios com mini-desafio)

| Nº | Exercício | Mini-desafio simples |
|---|---|---|
| 1 | Verificar maioridade | **Desafio:** Aceite também "18" como string e converta para número |
| 2 | Par ou ímpar | **Desafio:** Se o número for 0, exiba "Zero é neutro" |
| 3 | Média escolar | **Desafio:** Se a média for exatamente 10, exiba "Parabéns, nota máxima!" |
| 4 | Dias da semana (switch) | **Desafio:** Se digitar 8, exiba "Dia inválido, escolha de 1 a 7" |
| 5 | Cálculo de desconto | **Desafio:** Se compra > R$500, desconto de 20% ao invés de 10% |
| 6 | Positivo, negativo ou zero | **Desafio:** Se for positivo e par, exiba "Positivo e Par" |
| 7 | Tipo de triângulo | **Desafio:** Valide se os lados realmente formam um triângulo antes |
| 8 | Calculadora simples (switch) | **Desafio:** Se dividir por zero, exiba "Erro: divisão por zero" |
| 9 | Ano bissexto | **Desafio:** Além do ano, diga quantos dias tem o mês de fevereiro |
| 10 | Acesso ao sistema | **Desafio:** Dê 3 tentativas, se errar todas, bloqueie o acesso |

---

## 📋 LISTA 2 - WHILE e FOR (10 exercícios com mini-desafio)

| Nº | Exercício | Mini-desafio simples |
|---|---|---|
| 1 | Contagem de 1 a 10 (for) | **Desafio:** Mostre os números em ordem decrescente também |
| 2 | Contagem regressiva (while) | **Desafio:** Peça ao usuário de onde começar a contagem |
| 3 | Tabuada (for) | **Desafio:** Mostre a tabuada só dos números pares de 1 a 10 |
| 4 | Soma dos pares (while) | **Desafio:** Mostre também a quantidade de números somados |
| 5 | Fatorial (for) | **Desafio:** Se o número for maior que 10, avise que o resultado será gigante |
| 6 | Números ímpares (for) | **Desafio:** Mostre também quantos ímpares existem no total |
| 7 | Média de notas (while) | **Desafio:** Mostre a maior e a menor nota digitada |
| 8 | Fibonacci (for) | **Desafio:** Pergunte quantos termos o usuário quer ver |
| 9 | Contagem de dígitos (while) | **Desafio:** Aceite números negativos (ignore o sinal) |
| 10 | Validação de entrada (while) | **Desafio:** Conte quantas tentativas o usuário fez até acertar |

## DESAFIO!!!!

Situação:

Um cliente de um site de receitas pediu uma função simples: o usuário digita o nome de um ingrediente (ex: "ovo", "leite", "farinha") e o sistema retorna "Temos receita com esse ingrediente!" ou "Não encontramos receitas com esse ingrediente :("

```html

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Desafio - Site de Receitas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 80px;
            background: #fff5e6;
        }
        input, button {
            padding: 10px;
            font-size: 16px;
            margin: 5px;
        }
        .resultado {
            margin-top: 20px;
            font-weight: bold;
        }
        .sim {
            color: green;
        }
        .nao {
            color: red;
        }
    </style>
</head>
<body>
    <h1>🍳 Buscador de Receitas</h1>
    <p>Digite um ingrediente:</p>
    <input type="text" id="ingrediente" placeholder="ex: ovo, leite, farinha">
    <button onclick="buscarReceita()">Buscar</button>
    <div id="resposta" class="resultado"></div>

    <script>
        //Digite o seu código aqui!
    </script>
</body>
</html>


```
