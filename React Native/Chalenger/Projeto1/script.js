
function quina(){
        var quina = 
        [
            Math.floor(Math.random() * 80) + 1,
            Math.floor(Math.random() * 80) + 1,
            Math.floor(Math.random() * 80) + 1,
            Math.floor(Math.random() * 80) + 1,
            Math.floor(Math.random() * 80) + 1
        ];
        document.write(`${quina}`)
}

function mega(){
    var mega = 
    [
        Math.floor(Math.random() * 60) + 1,
        Math.floor(Math.random() * 60) + 1,
        Math.floor(Math.random() * 60) + 1,
        Math.floor(Math.random() * 60) + 1,
        Math.floor(Math.random() * 60) + 1,
        Math.floor(Math.random() * 60) + 1
    ];
    document.write(`${mega}`)
}

function lotofacil(){
    var lista = [];
    for(var j =0; j < 15; j++){
        num = Math.floor(Math.random() * 25) + 1;
        lista.push(num)
    }
    document.write(`${lista}`)
}
    
    
