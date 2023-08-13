const subhanAllah = document.getElementById('subhanAllah');
const Alhamdulillah = document.getElementById('Alhamdulillah');
const allahuAkbar = document.getElementById('allahuAkbar');

const subhanAllahdc = document.getElementById('subhanAllahdc');
const Alhamdulillahdc = document.getElementById('Alhamdulillahdc');
const allahuAkbardc = document.getElementById('allahuAkbardc');


const subhanAllahch = document.getElementById('subhanAllahch');
const Alhamdulillahch = document.getElementById('Alhamdulillahch');
const allahuAkbarch = document.getElementById('allahuAkbarch');


const reset = document.getElementById('reset');

let subhanAllahvalue = 0;
let Alhamdulillahvalue = 0;
let allahuAkbarvalue = 0;

reset.addEventListener('click', function () {
    allahuAkbarch.innerText = 0
    Alhamdulillahch.innerText = 0
    subhanAllahch.innerText = 0
    subhanAllahvalue = 0;
    Alhamdulillahvalue = 0;
    allahuAkbarvalue = 0;

})

subhanAllah.addEventListener('click', function () {
    if (subhanAllahvalue === 33) {
        return alert("Subhan Allah Complete. Please Fillup anoter one")
    }
    subhanAllahvalue += 1
    subhanAllahch.innerText = subhanAllahvalue

})
subhanAllahdc.addEventListener('click', function () {
    if (subhanAllahvalue <= 0) {
        return alert("Can't Decresce")
    }
    subhanAllahvalue -= 1
    subhanAllahch.innerText = subhanAllahvalue

})

Alhamdulillah.addEventListener('click', function () {
    if (Alhamdulillahvalue === 33) {
        return alert("Subhan Allah Complete. Please Fillup anoter one")
    }
    Alhamdulillahvalue += 1
    Alhamdulillahch.innerText = Alhamdulillahvalue

})
Alhamdulillahdc.addEventListener('click', function () {
    if (Alhamdulillahvalue <= 0) {
        return alert("Can't Decresce")
    }
    Alhamdulillahvalue -= 1
    Alhamdulillahch.innerText = Alhamdulillahvalue

})
allahuAkbar.addEventListener('click', function () {
    if (allahuAkbarvalue === 34) {
        return alert("Subhan Allah Complete. Please start again first")
    }
    allahuAkbarvalue += 1
    allahuAkbarch.innerText = allahuAkbarvalue

})

allahuAkbardc.addEventListener('click', function () {
    if (allahuAkbarvalue <= 0) {
        return alert("Can't Decresce")
    }
    allahuAkbarvalue -= 1
    allahuAkbarch.innerText = allahuAkbarvalue

})

