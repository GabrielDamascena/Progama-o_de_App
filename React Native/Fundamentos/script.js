var greeting = document.getElementById('greeting')

function logar(){
    username = prompt('Digite seu usuário: ')

    if(username === null || username === ''){
        alert('Digite um nome')
    } else {
        greeting.innerHTML = 'Bem Vindo ' + username //Apresentando

        let btnLogout = document.createElement('button') //Criando o Botão 

        btnLogout.innerText = 'Logout' //Titulo do botão

        btnLogout.onclick = logout //Chamando função do botão

        greeting.appendChild(btnLogout) //Colocando como uma "filha" no H2
    }
}

function logout(){
    alert('Loged Out')
    greeting.innerHTML = 'Ate mais' + username
}