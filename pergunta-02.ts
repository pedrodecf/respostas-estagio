function pergunta02(numero: number): boolean {
    if (numero < 0) {
        return false
    }

    let a = 0
    let b = 1

    while (b < numero) {
        const temp = b
        b = a + b
        a = temp
    }

    return b === numero
}

console.log((pergunta02(21)))
console.log((pergunta02(22)))

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const numeroA = 21
const numeroB = 22

console.log((pergunta02(numeroA)))
console.log((pergunta02(numeroB)))