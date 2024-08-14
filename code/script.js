const listaDeTarefas = [];
const tarefaInput = document.getElementById('taskInput').Value;
const botao = document.getElementById('addTaskButton')

function adicionarTarefa(tarefa){
    listaDeTarefas.push(tarefa);
}

botao.addEventListener('click', ()=>{
    const tarefa = document.getElementById('taskInput').value;
    adicionarTarefa(tarefa);
});

let addEventListener = listaDeTarefas.length;;

let text  = '<ul>';
for (let i = 0; i < adicionarTarefa; i++){
    text += '<li>${listaDeTarefas[i]}</li>';
}

text += '</ul>';


