const pessoa = {
    nome: "Amanda",
    idade: 21,
    profissao: "Administradora"
}

pessoa.idade = 22;

const lucas: {nome: string, idade: number, profissao: string} = {
    nome: 'Lucas',
    idade: 22,
    profissao: 'Desenvolvedor'
}

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'andre',
    idade: 22,
    profissao: 'Desenvolvedor'
}

enum Profissao {
    Professora,
    atriz,
    Desenvolvedor,
    Jogador
}

interface pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends pessoa {
    materias: string[]
}

const vanessa: pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedor
}

const maria: pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.atriz
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 18,
    profissao: Profissao.Professora,
    materias: ['Matemática discreta', 'programação']
}

const monica: Estudante = {
    nome: 'Jessica',
    idade: 18,
    materias: ['Matemática discreta', 'programação']
}

function listar(lista: string[]){
    for (const item of lista){
        console.log('- ', item)
    }
}

listar(monica.materias)