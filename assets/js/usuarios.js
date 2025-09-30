import constantes from './constantes.js'

function buscarUsuarios() {
    fetch(`${constantes.API}/usuarios`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(usuarios) {
                    const tbody = document.getElementById("tbody-usuarios")

                    usuarios.forEach(usuario => {
                        const tr = document.createElement("tr")

                        tr.innerHTML = `
                            <td>${usuario.usuario_id}</td>
                            <td>${usuario.nome}</td>
                            <td>${usuario.email}</td>
                            <td>${usuario.ativo ? 'Sim' : 'Não'}</td>
                        `

                        tbody.appendChild(tr)
                    })
                })
            } else {
                alert('Erro ao buscar usuários')
            }
        })
        .catch(function(er) {
            console.log('ERRO: ', er)
            alert('Erro na API')
        })
}

buscarUsuarios()