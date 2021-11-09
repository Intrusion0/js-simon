/* Simon Says!
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/*

--DONE  1. Creo una funzione per generare 5 numeri random univoci
    --DONE  1.1 Creo un array vuoto in cui conterrà i 5 numeri random univoci => randomNum = [];
    --DONE  1.2 Creo un ciclo while finchè l'array non conterrà 5 numeri random univoci => while (randomNum.length < 5)
    --DONE  1.3 Creo un variabile in salverò i numeri generati ad ogni ciclo che verrà effettuato => let generateNum = Math.floor(Math.random()x) + x;
    --DONE  1.4 Creo una condizione all'interno del ciclo per controllare se il numero generato è univoco => utilizzando .indexOf === -1
        --DONE  1.4.1 Se il numero generato non è presente, quindi la condizione sarà true, il numero generato verrà pushato all'interno dell'array.
        --DONE  1.4.2 Se il numero generato è presente, la condizione sarà false e verrà effettuato un altro giro del ciclo while

*/

const contResult = document.getElementById('result');

contResult.innerHTML += genRandNum(100);
console.log(randomNum);

// FUNZIONI

// Genera 5 numeri casuali univoci
function genRandNum(rangeNum) {

    let i = 0;
    randomNum = [];

    while (randomNum.length < 5) {
        let generateNum = Math.floor(Math.random() * rangeNum) + 1;

        if (randomNum.indexOf(generateNum) === -1) {
            randomNum.push(generateNum);
        }
        i++
    }
    return randomNum;
}