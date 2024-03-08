function pergunta05(stringOriginal: string): string {
    let stringInvertida = ''
    for (let i = stringOriginal.length - 1; i >= 0; i--) {
        stringInvertida += stringOriginal[i]
    }
    return stringInvertida
}

console.log(pergunta05("Target Sistemas é a melhor! heheh"))
