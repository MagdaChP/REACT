import React from 'react';
import ReactDOM from 'react-dom';
import person from './zadanie02';

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <div>{person.title} {person.name} {person.surname}, age:{person.age}, height: {person.height}cm</div>,
        document.getElementById('app')
    );
});

//W pliku `js/zadanie02.js` znajduje się obiekt reprezentujący osobę. Zaimportuj go do pliku `js/app.jsx` np. za pomocą:

// ```import person from './zadanie02';```

//Następnie za pomocą React wyrenderuj w elemencie o id ```app``` element ```div```, w którym będzie się wyświetlał tytuł, 
//imię, nazwisko oraz wiek tej osoby. Nazwy tych właściwości obiektu znajdziesz w importowanym pliku.