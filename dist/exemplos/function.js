"use strict";
function printaValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2); // não retornará valor algum;
}
function somaraValoresNumericosETratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somaraValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somaraValoresNumericosETratar(1, 3, dividirPorEleMesmo));
