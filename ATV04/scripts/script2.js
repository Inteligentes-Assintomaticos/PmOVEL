function maiorNumero(){
    let mensagem

    let numero01 = Number(prompt('Informe o primeiro número'))
    let numero02 = Number(prompt('Informe o segundo número'))
    let numero03 = Number(prompt('Informe o terceiro número'))

    if ((numero01 > numero02) && (numero01 > numero03)){
        mensagem = 'O primerio número informado é maior!'
    }
    else if ((numero02 > numero01) && (numero02 > numero03)){
        mensagem = 'O segundo número informado é maior!'
    }
    else{
        mensagem = 'O terceiro número informado é o maior!'
    }

    alert(mensagem)
}

function media(){
    let nota01 = Number(prompt('Informe o primeiro número'))
    let nota02 = Number(prompt('Informe o segundo número'))
    let nota03 = Number(prompt('Informe o terceiro número'))
    let media = (nota01 + nota02 + nota03)/3
    alert('A média dos números informados é: ' + media.toFixed(2))

    let status
    if (media > 5.9){
        alert('APROVADO!')
        status = 'Aprovado'
    }

    else{
        alert('REPROVADO')
        status='Reprovado'
    }

    switch (status){
        case 'Aprovado':
            alert('Parabens!')
        break
        case 'Reprovado':
            alert('Revise os conteúdos!')
        break
    }
}

function votar(){
    let idade = Number(prompt('Insira a sua idade:'))

    if (idade > 15 && idade < 18 || idade > 70){
        alert('O voto é opcional')
    }

    else if (idade>=18){
        alert('Você é obrigado a votar')
    }

    else{
        alert('Você não pode votar')
    }
}
