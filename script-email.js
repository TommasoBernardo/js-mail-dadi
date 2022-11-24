/*
    Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
    stampa un messaggio appropriato sull’esito del controllo.
*/


const userEmail =  ['mariorossi@hotmail.com' , 'lino@mail.com' , 'pino@alice.it' , 'silvestro@gmail.com' ];

console.log(userEmail);

const bottone = document.getElementById('info');


bottone.addEventListener('click', function(){

    const user = document.getElementById('users').value;

    let trovato = false;
    
    
    for(i = 0 ; i < userEmail.length ; i++){

        if( user == userEmail[i]){
            trovato = true;
        }
    }
    
    if(trovato){
        console.log('la tua email è nella nostra lista , benvenuto!!');
    }else{
        console.log('la tua email non è nella nostra lista!');
    }

})

