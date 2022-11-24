/*
Gioco dei dadi
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.

Mail
    Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
*/


let dadiGiocatore = Math.floor(Math.random() * 6);
let dadiComputer = Math.floor(Math.random() * 6);

console.log(dadiGiocatore);

console.log(dadiComputer);

if(dadiComputer > dadiGiocatore){
    console.log('dadiComputer vince !!');
}else{
    console.log('dadiGiocatore vince !!');
}


