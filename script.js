let principal = document.getElementById('main')


function botaoAddTarefa(){
    let botao = document.createElement('button')
    botao.id = "criar-tarefa"
    botao.innerText = "Nova Tarefa"
    principal.appendChild(botao)
}
botaoAddTarefa()

function botaoApagaLista(){
    let lista = document.querySelector('#lista-tarefas')
    let botao = document.createElement('button')
    botao.id = "apaga-tudo"
    botao.innerText = "apagar lista"
    principal.appendChild(botao)

    botao.addEventListener('click', function(){
        
        lista.innerHTML = '';
    })
}
botaoApagaLista()

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

let itemLista = document.querySelectorAll('#lista-tarefas')
function selecionaItem(){
    let corFundo = 'white'
    let destaque = 'rgb(128,128,128)'

    for(let i = 0; i < itemLista.length; i += 1){
        itemLista[i].addEventListener('click', function(event){
            event.target.style.backgroundColor = destaque
            event.target.className = 'item selecionado'
            
            let selecionado = document.getElementsByClassName('selecionado')

            if (selecionado.length > 1){
                selecionado[0].style.backgroundColor = corFundo
                selecionado[0].classList.remove('selecionado')
                
           } 
     })
    } 
    
}
selecionaItem()


