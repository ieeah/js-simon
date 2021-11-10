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
let timeID;

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
// setTimeout(() => numbers.innerText = '', 10000);
setTimeout(getUserNumbers, 7000);


// chiedere 5 volte un input numerico all'utente
function getUserNumbers() {
    console.log(randNumbers);
    numbers.innerText = '';
    for(let i = 0; i < 5; i++) {
        let num = 0;
        do {
            num = parseInt(prompt(
                `Inserisci i numeri che ricordi! hai solo cinque tentativi. I numeri doppi non vengono conteggiati. Se inserisci un numero diverso da un numero, ti diamo un'altra possibilità`));
        } while (isNaN(num)) 
// se il numero inserito dall'utente è presente nella lista deinumeri E se non è già presente nella lista dei numeri utente, allora lo inserisce nella lista dei numeri utente
        if (randNumbers.includes(num) && (!userNum.includes(num))) {
            userNum.push(num);
            console.log(userNum);
        }
    }

    // se hai indoviato tutti i numeri hai vinto
        if (randNumbers.length === userNum.length) {
            numbers.innerText = `complimenti! ti sei ricordato tutti e 5 i numeri!`;
    // se ne hai indovinati meno, hai perso
        } else if (randNumbers.length > userNum.length) {
            numbers.innerText = `peccato! non hai ricordato tutti e 5 i numeri!`;
        } else if ((randNumbers.length < userNum.length)) {
            numbers.innerText = `ti sei ricordato più numeri di quanti fossero all'inizio, sei un genio!`;
        }

}
