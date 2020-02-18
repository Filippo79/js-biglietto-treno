//Quanto costa il biglietto ?
//1 Quanti km devi fare?
//2 Quanti anni hai ?
//3 1 km costa 0,21
//4 Quanto costa il biglietto totale?
//5 Condizione -20% per i minorenni
//6 Condizione -40% per gli over 65

//1 Quanti km devi fare?
var kmDaPercorrere = prompt ('Quanti Km devi percorrere ?');
document.getElementById ('km-percorrere').innerHTML = kmDaPercorrere;
console.log(kmDaPercorrere);

//2 Quanti anni hai ?
var quantiAnni = prompt ('Quanti anni hai ?');
document.getElementById ('quanti-anni').innerHTML = quantiAnni;
console.log(quantiAnni);

//3 1 km costa 0,21
var km = (0.21);
console.log(km);

//4 Quanto costa il biglietto totale?
var biglietto = (km * kmDaPercorrere);
document.getElementById ('prezzo-biglietto').innerHTML = biglietto;
console.log(biglietto);

// mi sono perso qui....... AIUTOOOOOOOOOOOO !!!!!!!!!!!!!!!!!!!!!!!!
//5 Condizione -20% per i minorenni
if (quantiAnni < 18){ // calcolo sconto per minori
    biglietto -= biglietto * 0.2; // non sono riuscito chiesto a Fabiola cosa significa -= perchè???????
    console.log('Prezzo scontato 20%');
    document.getElementById ('prezzo-biglietto-scontato').innerHTML = biglietto;
}

//6 Condizione -40% per gli over 65
else if (quantiAnni > 65) { // calcolo sconto maggiori 65
    biglietto -= biglietto * 0.4;// non sono riuscito chiesto a Fabiola cosa significa -= perchè???????
    console.log('Prezzo scontato 40%');
    document.getElementById ('prezzo-biglietto-scontato').innerHTML = biglietto;
}
else {
}
document.getElementById('container').setAttribute('class' , 'visible');
