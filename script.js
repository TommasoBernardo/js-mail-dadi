/*
Gioco dei dadi
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/


let dadiGiocatore = Math.floor(Math.random() * 6) + 1;
let dadiComputer = Math.floor(Math.random() * 6)  + 1;

console.log(dadiGiocatore);

console.log(dadiComputer);

if(dadiComputer > dadiGiocatore){
    console.log('dadiComputer vince !!');
}else{
    console.log('dadiGiocatore vince !!');
}
