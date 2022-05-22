const inputTarefa = document.getElementById('tarefa');
const btnAddTarefa = document.getElementById('addTarefa');
const lista = document.getElementById('lista');

btnAddTarefa.addEventListener('click', addTarefa);


function addTarefa(){
    console.log(inputTarefa.value)
    var tarefa = '';
    
    if (inputTarefa.value){
        tarefa = inputTarefa.value;
        const label = document.createElement('label');        
        const input = document.createElement('input');

        input.setAttribute('type', 'checkbox');
        input.setAttribute('name', tarefa);
        input.setAttribute('id', tarefa);
        input.classList.add('item-tarefa');
        
        label.setAttribute('for', tarefa);
        label.appendChild(document.createTextNode(tarefa));
        label.classList.add('item-tarefa');

        lista.appendChild(input);
        lista.appendChild(label);
        lista.appendChild(document.createElement('br'));

        limpa();

    }

}
function limpa(){
    inputTarefa.value = '';
}