var currentNumber = 0;
var currentNumberWrapper = document.getElementById("currentNumber");

function increment(){
    currentNumber ++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber --;
    currentNumberWrapper.innerHTML = currentNumber;
}

