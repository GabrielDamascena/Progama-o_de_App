function converter(){
    var num1 = Number(prompt('Digite em celsius para converter para fahrenheit: '))
    var num2 = (num1 * 1.8) + 32;
    document.write(`${num1} °C em fahrenheit é ${num2} °F`)
}