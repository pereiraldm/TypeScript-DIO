function printaValoresNumericos(numero1: number, numero2: number) :void{
    console.log(numero1 + numero2) // não retornará valor algum;
}

function somaraValoresNumericosETratar(numero1: number, numero2: number, callback: (numero: number) => number):number {
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado(numero: number):number{
    return numero * numero
}

function dividirPorEleMesmo(numero: number): number{
    return numero / numero
}

console.log(somaraValoresNumericosETratar(1, 3, aoQuadrado))

console.log(somaraValoresNumericosETratar(1, 3, dividirPorEleMesmo))