/* Ismerkedés a függvényekkel! 

function Osszead(a, b) {
    return a + b;
}

let osszeg = Osszead(12, 25);

document.getElementById('ered').innerText = osszeg;

function Szorzas(a, b) {
    return a * b;
}

document.getElementById('ered').innerText = Szorzas(15, 25.7); */

/* function Osszead() {
    let a = window.prompt('Kérem az első számot: ', 1);
    let b = window.prompt('Kérem a második számot: ', 1);
    document.getElementById('ered').innerText = a * b;
}

Osszead(); */

/* Lokális és globális változókra példa. */

/* let nev = 'Huszta Levente'; Ez egy globális változó! */

/* function NevKiir() {
    let nev = 'Kovács Bence'; Ez egylokális változó!
    console.log(nev);
}

NevKiir();

function Feltolt() {
    let tomb = [];
    tomb.push(nev);
    console.log(tomb[0]);
}

Feltolt();

let nev = 'Bácskai Péter'; */

/* function MasodpercToPerc() {
    let masodperc = window.prompt('Kérem a másodpercek számát: ', 0);
     
    Az egész osztás adja vissza a percek számát,
    a maradékos osztás adja vissza a másodpercek számát.  
    95 = 1 * 60 + 35, ahol
    1 = 95 / 60 egész osztás
    35 = 95 % 60 maradékos osztás    
     
    let perc = parseInt(+masodperc / 60);
    let maradekMasodperc = +masodperc % 60;
    
    console.log(`Az eredmény: ${masodperc} = ${perc} perc + ${maradekMasodperc} másodperc`);
}

MasodpercToPerc(); */

/* function KovetkezoEgesz() {
    let egeszSzam = window.prompt('Kérek egy egész számot: ', 189);
    let kiiras = `A rákövetkező egész szám: ${+egeszSzam + 1}`
    console.log(kiiras);
}

KovetkezoEgesz(); */

/* function ElojelEldontes(adat) {
    if (adat < 0) {
        console.log(`Az adat: ${adat} negatív.`);
    } else if (adat == 0) {
        console.log(`Az adat: ${adat} nulla.`);
    } else {
        console.log(`Az adat: ${adat} pozitív.`);
    }
}

let bekertSzam = window.prompt('Kérek egy számot: ', 0);
ElojelEldontes(+bekertSzam); */

function KevesebbMint100(adat_1, adat_2) {
    let osszeg = +adat_1 + +adat_2;
    if (osszeg < 100) {
        console.log(`A két szám összege: ${osszeg} kisebb, mint száz.`);
    } else if (osszeg == 100) {
        console.log(`A két szám összege: ${osszeg} egyenlő száz.`);
    } else {
        console.log(`A két szám összege: ${osszeg} nagyobb, mint száz.`);
    }
}

let bekertSzam_1 = window.prompt('Kérek egy számot: ', 0);
let bekertSzam_2 = window.prompt('Kérek egy másik számot: ', 0);
KevesebbMint100(bekertSzam_1, bekertSzam_2);