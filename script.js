/*
Gioco dei dadi
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.

Mail
    Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
*/

const dadiComputer = [];
const dadiGiocatore = [];

for(i = 0 ; i < 6 ; i++){
    const randomNumber = Math.floor(Math.random() * 6);
    dadiComputer.push(randomNumber);

}

for(i = 0 ; i < 6 ; i++){
    const randomNumber = Math.floor(Math.random() * 6);
    dadiGiocatore.push(randomNumber);

}
console.log(dadiComputer);

console.log(dadiGiocatore);

if(dadiComputer > dadiGiocatore){
    console.log('dadiComputer vince !!');
}else{
    console.log('dadiGiocatore vince !!');
}


