console.log("Hello World.....\n\n")

// retornar numeros pares

function returnEvenValues(array){
    let evenNums = [];
    for(let i=0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        }
    }
    console.log('lista com num. pares: ', evenNums);
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
returnEvenValues(array);
