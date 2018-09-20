import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    let birthYear = prompt('Podaj rok urodzenia');
    let actualYear = (new Date()).getFullYear();
    ReactDOM.render(
        <h1>{actualYear - Number(birthYear)}</h1>,
        document.getElementById('app')
    );
});

// Za pomocą ```prompt()``` przyjmij rok urodzenia użytkownika. Odpowiedź przechowuj w zmiennej. Nie zapomnij 
// o użyciu ```Number(str)```, aby zmienić wartość typu string w zmienną typu number.

// Następnie za pomocą metody ```(new Date()).getFullYear()``` pobierz aktualny rok.

// Za pomocą JSX wyświetl tag `h1`, w którym wypiszesz wiek użytkownika. 
// Odejmowanie wykonaj bezpośrednio w wyrażeniu w tagu JSX.