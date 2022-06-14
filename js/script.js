// Chiedo all'utente i due dati, km da percorrere e l'età
const userDistance = parseInt( prompt ("Inserisci il numero di chilometri che vuoi percorrere"));
console.log("Distanza in km: " + userDistance);
const userAge = parseInt( prompt ("Inserisci la tua età"));
console.log("Età dell'utente: " + userAge);

//Prezzo del biglietto in base ai km
let ticketPrice = 0.21 * userDistance;
console.log("Prezzo in base ai km: €" + ticketPrice);

//Sconti: 20% minorenne e 40% over 65
if (userAge < 18){
    ticketPrice = ticketPrice - (ticketPrice * 20) / 100;
    console.log("Sconto 20% per minorenni");
}   else if (userAge >= 65){
        ticketPrice = ticketPrice - (ticketPrice * 40) / 100;
        console.log("Sconto 40% per over65");
    }

//Output prezzo finale
ticketPrice = ticketPrice.toFixed(2);
console.log("Il prezzo del tuo biglietto è: €" + ticketPrice);    