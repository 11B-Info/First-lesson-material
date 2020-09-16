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

function Osszead() {
    let a = window.prompt('Kérem az első számot: ', 1);
    let b = window.prompt('Kérem a második számot: ', 1);
    document.getElementById('ered').innerText = a * b;
}

Osszead();