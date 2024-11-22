// - - - - - Exercício 1: Exibição de Lista de Alunos - - - - - //

const names = ["Dona Rose", "Dona de casa", "Dono da rua", "Dona maria", ""];


for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// - - - - - Exercício 2: Tabuada de Multiplicação - - - - - //

let nub = 2

for (let i = 1; i <= 10; i++) {
    let total = nub * i;
    console.log(`${nub} x ${i} = ${total}`);
}
// - - - - - Exercício 3: Calculadora de Média de Notas - - - - - //

let notas = [10,7,5,6];

soma = 0;

for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    
    let media = soma / notas.length;

console.log(media);

// - - - - - Exercício 4: Sistema de Contagem Regressiva - - - - - //

let Contagem = 10;

for (let i = Contagem; i >= 1; i--) {
    console.log(i);
}

// - - - - - Exercício 5: Verificação de Número Par - - - - - //

for (let i = 1; i <= 20; i++){
    if (i % 2 == 0 ){
        console.log(i)
    }   
}

// - - - - - Exercício 6: Lista de Materiais - - - - - //

materiais = [
    "caderno", 
    "caneta", 
    "lápis", 
    "borracha", 
    "mochila"
]

for (let i = 0; i < materiais.length; i++) {
    console.log(materiais[i]);

}

// - - - - - Exercício 7: Soma dos Números de 1 a N - - - - - //
let N = 20;

let soma2 = 0;

for (let i = 1; i <= N; i++) {
     soma2 += i;  
}

console.log(soma2);  

// - - - - - Exercício 8: Fatorial de um Número - - - - - //

let F =4;

let fatorial = 1;

for (let i = 1; i <= F; i++) {
     fatorial *= i;  
}

console.log(fatorial);  

// - - - - - Exercício 9: Contagem de Vogais em uma Palavra - - - - - //

let palavra = "Banana";
let voga = 0;

for (let i = 0; i < palavra.length; i++) {
    
    if (palavra.charAt(i) === "a" || palavra.charAt(i) === "e" || palavra.charAt(i) === "i" || palavra.charAt(i) === "o" || palavra.charAt(i) === "u") {
        voga++; 
    }
}

console.log(voga); 

// - - - - - Exercício 10: Multiplicação de Array - - - - - //

let arroiz =[5,8,9,4,7]

for (let i = 1; i <= arroiz; i++) {
    let vezes = nub * i;


}
console.log(`${nub} x ${i} = ${total}`);

// - - - - - Exercício 11: Inversão de String - - - - - //


// - - - - - Exercício 12: Soma de Números Pares em um Intervalo - - - - - //

let num1 = 10;

let num2 = 20

let soma4 = 0;

for (let i = num1; i <= num2; i++) {
     soma4 += i;  
}
