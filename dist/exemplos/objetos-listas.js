"use strict";
const pessoa = {
    nome: "Amanda",
    idade: 21,
    profissao: "Administradora"
};
pessoa.idade = 22;
const lucas = {
    nome: 'Lucas',
    idade: 22,
    profissao: 'Desenvolvedor'
};
const andre = {
    nome: 'andre',
    idade: 22,
    profissao: 'Desenvolvedor'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["atriz"] = 1] = "atriz";
    Profissao[Profissao["Desenvolvedor"] = 2] = "Desenvolvedor";
    Profissao[Profissao["Jogador"] = 3] = "Jogador";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedor
};
const maria = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.atriz
};
const jessica = {
    nome: 'Jessica',
    idade: 18,
    profissao: Profissao.Professora,
    materias: ['Matemática discreta', 'programação']
};
const monica = {
    nome: 'Jessica',
    idade: 18,
    materias: ['Matemática discreta', 'programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
