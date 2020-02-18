//Quanto costa il biglietto ?
//1 Quanti km devi fare?
//2 Quanti anni hai ?
//3 1 km costa 0,21
//4 Quanto costa il biglietto totale?
//5 Al prezzo del biglietto calcolare il -20% per i minorenni
//6 al prezzo del biglietto calcolare il -40% pri gli over 65

//1 Quanti km devi fare?
var kmDaPercorrere = prompt ('Quanti Km devi percorrere ?');
document.getElementById ('Km-percorrere').innerHTML = kmDaPercorrere;
console.log(kmDaPercorrere);
//2 Quanti anni hai ?
var quantiAnni = prompt ('Quanti anni hai ?');
document.getElementById ('quanti-anni').innerHTML = quantiAnni;
console.log(quantiAnni);
//3 1 km costa 0,21
var km = (0,21);
console.log(km);
//4 Quanto costa il biglietto totale?
var biglietto = (km * kmDaPercorrere);
console.log(biglietto);
