function calcular(){
    let altura = Number(prompt('Digite sua altura: '))
    let peso = Number(prompt('Digite o seu peso: '))
    let imc = peso/(altura * altura)

    document.write(`Seu imc é aproximadamente: ${imc}`)
}