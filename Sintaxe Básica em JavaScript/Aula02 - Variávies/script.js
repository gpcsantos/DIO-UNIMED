// tipos primitivos

// Boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var qualquerNumero = 10;
console.log(typeof(qualquerNumero));

//string
var nome = "glauco";
console.log(typeof(nome));

// declaração
var teste;
console.log(teste);
teste = 'glauco';
console.log(teste);
teste = 'Santos';
console.log(teste);

let teste1;
console.log(teste1);
teste1 = 'glauco';
console.log(teste1);
teste1 = 'Santos';
console.log(teste1);

//const constante; // mostrará um erro (Uncaught SyntaxError: Missing initializer in const declaration)
// toda constante precisa ser inicializada
const constante = 'Não pode mudar';
console.log(constante);
// constante = "Novo valor"; // Mostrará um erro (Uncaught TypeError: Assignment to constant variable.)
// constante não pode ser alterada


/// ESCOPO

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let local = 'Local'
    console.log('Global: ' + escopoGlobal)
    console.log('local: ' + local)
}

escopoLocal();
console.log(escopoGlobal);
//console.log('local: ' + local); // será mostrado um erro (Uncaught ReferenceError: local is not defined)
// a variável local pertence ao escopo da função e não pode ser utilizada fora do escopo


/// comparação
var comparacao = 1 == '1';
console.log('comparação 1=="1" :' + comparacao);

var comparacaoIdentica = 1 ==='1';
console.log('comparação Identica 1==="1" :' + comparacaoIdentica)

