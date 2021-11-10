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

// creare 5 numeri randomici
const randNumbers = [];
for (let i = 1; i < 6; i++) {
    randNumbers.push(Math.floor(Math.random() * 99) +1);
}

// stampare nel display tutti i numeri generati
randNumbers.forEach((x, i) => {
    numbers.innerText += ` ${randNumbers[i]}   `;
});

// dopo 30 secondi resettare il contenuto del display
// setTimeout(() => numbers.innerText = '', 10000);
setTimeout(getUserNumbers, 5000);


// chiedere 5 volte un input numerico all'utente
function getUserNumbers() {
    numbers.innerText = '';
    for(let i = 0; i < 5; i++) {
        let num = 0;
        do {
            num = parseInt(prompt('Inserisci i numeri che ricordi!'));
        } while (isNaN(num)) 
    
        if (randNumbers.includes(num)) {
            userNum.push(num);
        }
        console.log(userNum);
    }
}
