import constantes from './constantes.js'

document.getElementById('btn-cadastrar-se')
    .addEventListener('click', cadastrarUsuario)

function cadastrarUsuario() {
    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    const senha = document.getElementById('password')

    const body = {
        nome: nome.value,
        email: email.value,
        senha: senha.value
    }

    fetch(`${constantes.API}/usuarios`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(function(response) {
        if (response.ok) {
            alert('Usuário cadastrado com sucesso!')
            window.location.href = 'admin.html'
        } else {
            alert('Erro ao cadastrar usuário')
        }
    })
    .catch(function(er) {
        console.log('ERRO: ', er)
        alert('Erro na API')
    })
}