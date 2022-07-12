
//Desafio 1;
const employee: {code: number, name: string} = {
    code: 10,
    name: 'Jhon'
}
//------------------------------------------------------

//Desafio 2;
enum Profissao {
    Atriz,
    Padeiro,
}

interface pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao
}

const pessoa1: pessoa = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
};

const pessoa2: pessoa = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
};

const pessoa3: pessoa = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz
};

const pessoa4: pessoa = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissao.Padeiro
};
//------------------------------------------------------

//Desafio 3;

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldoTotal += soma
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
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}
botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});


//--------------------------------------------------------------
