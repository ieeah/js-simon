// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

// refs to DOM
const display = document.querySelector('.display');
const numbers = display.querySelector('.numbers');
const userNum = [];
const resetBtn = document.querySelector('#reset');
let timeID;

resetBtn.addEventListener('click', () => window.location.reload(true));
// creare 5 numeri randomici tra 1 e 100
const randNumbers = [];
for (let i = 1; i < 6; i++) {
    let n = Math.floor(Math.random() * 99) +1;
    if (!randNumbers.includes(n)) {
        randNumbers.push(n);
    } else {
        i--;
    }
}

// stampare nel display tutti i numeri generati
randNumbers.forEach((x, i) => {
    numbers.innerText += ` ${randNumbers[i]}   `;
});

// dopo 30 secondi resettare il contenuto del display
setTimeout(() => numbers.innerHTML = ``, 5000);
setTimeout(getUserNumbers, 5050);


// chiedere 5 volte un input numerico all'utente
function getUserNumbers() {
    for(let i = 0; i < 5; i++) {
        let num = 0;
        do {
            num = parseInt(prompt(
                `Inserisci i numeri che ricordi! hai solo cinque tentativi. I numeri doppi non vengono conteggiati. Se inserisci un numero diverso da un numero, ti diamo un'altra possibilità`));
        // se il valore inserito non è un numero, verrà richiesto l'inserimento di un numero
        } while (isNaN(num)) 
        // se il numero inserito dall'utente è presente nella lista dei numerioriginali E se non è già presente nella lista dei numeri utente, allora lo inserisce nella lista dei numeri utente
        if (randNumbers.includes(num) && (!userNum.includes(num))) {
            userNum.push(num);
            console.log(userNum);
            console.log(randNumbers);
        }
    }

        // se hai indoviato tutti i numeri hai vinto
        if (randNumbers.length === userNum.length) {
            numbers.innerHTML = `<h2>Complimenti!<br> ti sei ricordato tutti e 5 i numeri!</h2>`;
        // se ne hai indovinati meno, hai perso
        } else if (randNumbers.length > userNum.length) {
            numbers.innerHTML = `<h2>Peccato non hai vinto!<br> hai ricordato ${userNum.length} numeri!</h2>`;
        // se hai indovinato più numeri di quelli all'inizio sei un genio! è ovviamente uno scherzetto, non si può mai verificare questa condizione!
        } else if ((randNumbers.length < userNum.length)) {
            numbers.innerHTML = `<h2>Ii sei ricordato più numeri di quanti fossero all'inizio!<br> SEI UN GENIO!</h2>`;
        }
}

