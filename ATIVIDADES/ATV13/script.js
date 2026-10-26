// Felipe Gabriel Araújo de Freitas - 523

class Aluno{
    #nome
    #matricula

    constructor(nome, matricula){
        this.#nome = nome
        this.#matricula = matricula
    }


    // Get e set para o nome
    get nome(){
        return this.#nome
    }
    set nome(novoNome){
        this.#nome = novoNome
    }
    
    
    // Get e set para o matricula
    get matricula(){
        return this.#matricula
    }
    set matricula(novaMatricula){
        this.#matricula = novaMatricula
    }


    // Método para mostrar os dados
    Dados(){
        console.log('Nome: ' + this.#nome)
        console.log('Matrícula: ' + this.#matricula)
    }
    
}




// Criando um objeto da classe Aluno
let aluno1 = new Aluno('Maria', 12345)


// Exibindo o nome usando o get
console.log('Nome do aluno: ' + aluno1.nome)

// Modificando o nome usando o set
aluno1.nome = 'João'


// Exibindo dados atualizados
console.log(aluno1.nome)