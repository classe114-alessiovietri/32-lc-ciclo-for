if (true) {
    // 1) Stampa in console i numeri da 1 a 5, uno alla volta
    // let i = 1;
    // console.log(i); // Qua mi stampa i che ha valore 1
    // i = i + 1;      // Qua incremento i di 1
    // console.log(i); // Qua mi stampa i che ha valore 2
    // i += 1;         // Qua incremento i di 1 
    // console.log(i); // ...
    // i++;
    // console.log(i);
    // i++;
    // console.log(i);
    // i++;

    for (
        let pasquale = 1;           // Dichiaro ed inizializzo la variabile contatore
        pasquale <= 5;              // Definisco la condizione di permanenza
        pasquale++                  // Definisco la modalità di avanzamento
    ) {
        console.log(pasquale);
    }
}

if (true) {
    // 2) Stampa in console i numeri da 10 a 20, ogni 2
    // let i = 10;
    // console.log(i);
    // i = i + 2;
    // console.log(i);
    // i = i + 2;
    // console.log(i);
    // i = i + 2;
    // console.log(i);
    // i = i + 2;
    // console.log(i);
    // i = i + 2;
    // console.log(i);
    // i = i + 2;

    for (let i = 10; i <= 20; i = i + 2) {
        console.log(i);
    }
}

if (true) {
    // 3) Stampa in console i numeri da 20 a 10, ogni 2
    // let i = 20;
    // console.log(i);
    // i = i - 2;
    // console.log(i);
    // i = i - 2;
    // console.log(i);
    // i = i - 2;
    // console.log(i);
    // i = i - 2;
    // console.log(i);
    // i = i - 2;
    // console.log(i);
    // i = i - 2;

    for (let i = 20; i >= 10; i = i - 2) {
        console.log(i);
    }
}


let pasquale = 9;

for (
    pasquale = 1;               // Inizializzo solamente la variabile contatore
    pasquale <= 5;              // Definisco la condizione di permanenza
    pasquale++                  // Definisco la modalità di avanzamento
) {
    console.log(pasquale);
}

console.log('Pasquale fuori', pasquale);


let ciro = 9;

for (
    let ciro = 1;           // Dichiaro ed inizializzo la variabile contatore
    ciro <= 5;              // Definisco la condizione di permanenza
    ciro++                  // Definisco la modalità di avanzamento
) {
    console.log(ciro);
}

console.log('Ciro fuori', ciro);








if (true) {
    // let x = 2;
    // y = x++; 
    // EQUIVALENTI A:
    let x = 2;
    y = x;
    x++;
    // EQUIVALENTI A:
    // let x = 2;
    // (y = x) EPPOI (x++);

    // Qui il risultato è che y = 2 e x  = 3
}

// ------------------------------------------------------

if (true) {
    // let x = 2;
    // y = ++x; 
    // EQUIVALENTI A:
    let x = 2;
    x++;
    y = x;
    // EQUIVALENTI A:
    // let x = 2;
    // y = (x += 1);

    // Qui il risultato è che y = 3 e x  = 3
}


/* 
    ------------------------------------------------------------
*/
const list = document.getElementById('elements');
// list.innerHTML += '<li>Elemento 1</li>';
// list.innerHTML += '<li>Elemento 2</li>';
// list.innerHTML += '<li>Elemento 3</li>';
// list.innerHTML += '<li>Elemento 4</li>';
// list.innerHTML += '<li>Elemento 5</li>';

for (let i = 0; i < 5; i++) {
    // list.innerHTML = '<li>Elemento ' + (i + 1) + '</li>';
    // list.innerHTML = list.innerHTML + '<li>Buon Natale ' + (i + 1) + '</li>';
    // list.innerHTML += `
    //                         <li>
    //                             Buon Natale ${i + 1}
    //                         </li>
    //                 `;

    const newLi = document.createElement('li');
    console.log('newLi', newLi, typeof newLi);

    // newLi.innerHTML = `Buon Natale ${i + 1}`;
    // OPPURE
    newLi.append(`Buon Natale ${i + 1}`);
    list.append(newLi);

    // console.log(i);
}

// Operatore modulo -> %
console.log('Resto della divisione 16 / 3', 16 % 3);
console.log('Resto della divisione 24 / 5', 24 % 5);

const numeroUno = 27;
console.log('resto', resto, typeof resto);

if (numeroUno % 3 == 0) {
    console.log('Si, 27 è multiplo di 3');
}
else {
    console.log('No, 27 NON è multiplo di 3');
}
