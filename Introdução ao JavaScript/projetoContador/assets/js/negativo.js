// Crie condicionais que desabilitam o botão de incrementar ou decrementar quando count chegar a um determinado valor (ex.: 0 <= count =< 10).

const addButton = document.getElementById("adicionar");
const decButton = document.getElementById("subtrair");

var currentNumber = 0;
var currentNumberWrapper = document.getElementById("currentNumber");

addButton.addEventListener('click', adicionar);
decButton.addEventListener('click', subtrair);

function adicionar(){
    currentNumber ++;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 0){
        currentNumberWrapper.style.color = 'black';
    }
}

function subtrair(){
    currentNumber --;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0  ){
        currentNumberWrapper.style.color = 'red';
    }
}
