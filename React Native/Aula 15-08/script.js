{ //----------Arrays------------//
// var lista = ['Gabriel', 'Miguel', 'Enzo', 'Rayssa', 150]

// lista.push('Beni') //Adiciona no Final da lista
// lista.unshift('João') //Adiciona no inicio da lista

// lista.shift() //Remove no inicio da lista
// lista.pop() //Remove no final da lista

// lista = lista.join('/') //Colopca as variaveis entre barras (/)
// lista = lista.toString() //Retorna as  variaveis como ums string sem os colchetes

// document.write(`<p>${lista}</p>`)
}

{//-----------Juntando Arrays-----------//
// var homens = ['homem1', 'homem2', 'homem3']
// var mulheres = ['mulher1', 'mulher2', 'mulher3']

// var novoArray = homens.concat(mulheres)

}

{//------------Estrutura de repetição-------------//
// var meses = ['janeiro', 'fevereiro', 'março', 'abril']
// var i = 0;

// while(i < meses.length){
//     document.write(`<p>${meses[i]}</p>`)
//     i++;
// }

// for(var j = 0; j < meses.length; j++){
//     document.write(`<h3>${meses[j]}</h3>`)
// }

}

{//---------Função-------------//
function escolher(){
    let op = Number(prompt('Escolha umas das opções: '))

    switch (op){
        case 1:
            alert('Você escolheu Arroz')
            break
        case 2:
            alert('Você escolheu Feijão')
            break
        case 3:
            alert('Você escolheu Batata Frita')
            break
        case 4:
            alert('Você escolheu Frango')
            break
        default:
            alert('Opção inválida!')
            break
    }
}
}