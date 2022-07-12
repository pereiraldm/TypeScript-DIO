
//Desafio 1;
var employee = {
    code: 10,
    name: 'Jhon'
};
//------------------------------------------------------
//Desafio 2;
var profissao;
(function (profissao) {
    profissao[profissao["Atriz"] = 0] = "Atriz";
    profissao[profissao["Padeiro"] = 1] = "Padeiro";
})(profissao || (profissao = {}));
var pessoa1 = {
    nome: 'Maria',
    idade: 29,
    profissao: profissao.Atriz
};
var pessoa2 = {
    nome: 'Roberto',
    idade: 19,
    profissao: profissao.Padeiro
};
var pessoa3 = {
    nome: 'Laura',
    idade: 32,
    profissao: profissao.Atriz
};
var pessoa4 = {
    nome: 'Carlos',
    idade: 19,
    profissao: profissao.Padeiro
};
//------------------------------------------------------
//Desafio 3;
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
var saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    soma.value = "";
}
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
//--------------------------------------------------------------
