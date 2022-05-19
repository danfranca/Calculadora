function calcular(operacao) {
    let valorA = parseInt(prompt("insira o primeiro valor"))
    let valorB = parseInt(prompt("insira o segundo valor"))

    switch (operacao) {
        case 'somar':
            console.log(somar(valorA,valorB))
            break

            case 'subtrair':
            console.log(subtrair(valorA,valorB))
            break

            case 'dividir':
            console.log(divisao(valorA,valorB))
            break

            case 'multiplicar':
            console.log(mult(valorA,valorB))
            break
    }
}

