// Felipe Gabriel Araújo de Freitas - 523

// Classes e objetos
class Aluno{
 
    #nome       // atributo

    constructor(nome, curso, ano) {
        this.#nome = nome   // atributo privado
        this.curso = curso  // atributo público
        this.ano = ano      // atributo público

    }

    
    get nomeAluno(){        // getter
        return this.#nome
    }
    set nomeAluno(nomeAluno){        // setter
        this.#nome = nomeAluno
    }


    detalhes(){
        return `${this.#nome} está no curso de ${this.curso}`
    }
}


let aluno = new Aluno('', 'Informática', 3)

aluno.nomeAluno = 'Maria'       // modifica a variável nome usando o setter

console.log(aluno.nome)         // mostra undefined, pois é privado
console.log(aluno.curso)
console.log(aluno.nomeAluno)    // mostra o nome 'Maria', pois foi usado o getter
console.log(aluno.detalhes())







// Classe Pessoa com 'nome' e 'idade' --> método aniversario

class Pessoa{

    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    aniversario(){
        this.idade += 1
    }

    detalhes(){
        return `${this.nome} tem ${this.idade} anos`
    }
}


let pessoa = new Pessoa('João', 30)

pessoa.aniversario()
console.log(pessoa.detalhes())



















// Classe produto com 'nome', 'preço' e 'estoque' --> metódo estoque (diminuir uma unidade a cada venda)


class Produto{

    constructor(nome, preco, estoque){
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }


    vender(){
        if (this.estoque > 0){
            this.estoque -= 1
        } else {
            console.log('Estoque insuficiente')
        }
    }


    detalhes(){
        return `${this.nome} custa R$${this.preco} e possui ${this.estoque} em estoque`
    }
    
}


let produto = new Produto('Caderno', 15, 10)

produto.vender()
console.log(produto.detalhes())

produto.estoque = 1
produto.vender()
produto.vender()

