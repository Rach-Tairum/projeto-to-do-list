let principal = document.getElementById('main')

function botaoAddTarefa(){
    let botao = document.createElement('button')
    botao.id = "criar-tarefa"
    botao.innerText = "Nova Tarefa"
    principal.appendChild(botao)
}
botaoAddTarefa()

function criaListaDeTarefas(){
    let lista = document.createElement('ol')
    lista.id = "lista-tarefas"
    principal.appendChild(lista)
}
criaListaDeTarefas()

function adicionaNovaTarefa(){
    let funcaoButao = document.getElementById('criar-tarefa');
    let lista = document.querySelector('#lista-tarefas')
    let input = document.getElementById('texto-tarefa')

    funcaoButao.addEventListener('click', function(){
        let novoItem = document.createElement('li')
        novoItem.className = "item"
        novoItem.innerText = input.value
        lista.appendChild(novoItem)
        input.value = ''
    })
}
adicionaNovaTarefa()