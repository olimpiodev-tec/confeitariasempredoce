import constantes from './constantes.js'

document.getElementById('btn-login')
    .addEventListener('click', loginUsuario)

function loginUsuario() {
    const email = document.getElementById('email')
    const senha = document.getElementById('password')

    const body = {
        email: email.value,
        senha: senha.value
    }

    fetch(`${constantes.API}/usuarios/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(function(response) {
        if (response.ok) {
            alert('Usuário logado com sucesso!')
            window.location.href = 'usuarios.html'
        } else {
            alert('Erro ao logar usuário')
        }
    })
    .catch(function(er) {
        console.log('ERRO: ', er)
        alert('Erro na API')
    })
}