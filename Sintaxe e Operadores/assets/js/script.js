
function valores(a, b){
    var iguais = ''
    var soma = 0
    var maiorMenorA = 'maior';
    var maiorMenorB = 'maior';
    if (a !== b){
        iguais = " não ";
    }
    soma = a + b;
    if (soma < 10 ){
        maiorMenorA = 'menor';
        
    }
    if(soma < 20){
        maiorMenorB = 'menor';
    }
    
    var msg = 'Output: Os números ' + a + ' e ' + b + iguais + ' são iguais. Sua soma é '+ soma + ', que é '+ maiorMenorA + ' que 10 e ' + maiorMenorB + ' que 20'
    console.log(msg);
}
