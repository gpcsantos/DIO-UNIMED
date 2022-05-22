// Tente implementar os eventos usando o método addEventListener.

const addButton = document.getElementById("adicionar");
const decButton = document.getElementById("subtrair");

var currentNumber = 0;
var currentNumberWrapper = document.getElementById("currentNumber");

addButton.addEventListener('click', adicionar);
decButton.addEventListener('click', subtrair);

function adicionar(){
    currentNumber ++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function subtrair(){
    currentNumber --;
    currentNumberWrapper.innerHTML = currentNumber;
}
