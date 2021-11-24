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

let itemLista = document.querySelectorAll('#lista-tarefas')

function selecionaItem(){
    let corFundo = 'white'
    let destaque = 'rgb(128,128,128)'

    for(let i = 0; i < itemLista.length; i += 1){
        itemLista[i].addEventListener('click', function(event){
            event.target.style.backgroundColor = destaque
            event.target.classList.add('selecionado')
            
            let selecionado = document.getElementsByClassName('selecionado')

            if (selecionado.length !== 1){
                selecionado[0].style.backgroundColor = corFundo
                selecionado[0].classList.remove('selecionado')
                
           } 
     })
    } 
    
}
selecionaItem()

function cortaTarefaCumprida(){
    for(let i = 0; i < itemLista.length; i += 1){
     itemLista[i].addEventListener('dblclick', function(event){  
        
        event.target.classList.add('completed')
        event.target.style.textDecoration = 'line-through'

        if(event.target.classList === 'completed'){
            event.target.classList.remove('completed')
            event.target.style.textDecoration = 'none'
           } 

           
            

        })
    } 
}
cortaTarefaCumprida()

function botaoApagaLista(){
    let lista = document.querySelector('#lista-tarefas')
    let botao = document.createElement('button')
    botao.id = "apaga-tudo"
    botao.innerText = "Limpar"
    principal.appendChild(botao)

    botao.addEventListener('click', function(){
        
        lista.innerHTML = '';
    })
}
botaoApagaLista()

function botaoApagatarefaFeita(){
    
    let botao = document.createElement('button') ;
    botao.innerText = "Excluir tarefas concluidas"
    botao.id = 'remover-finalizados'
    principal.appendChild(botao)

   botao.addEventListener('click', function(){
       let concluido = document.getElementsByClassName('completed')
       for(let i = 0; i < concluido.length; i += 1){
           concluido[i].innerHTML = ''
       }
   })
}
botaoApagatarefaFeita()