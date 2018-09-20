import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    let color = prompt('Podaj kolor ramki');
    let borderStyle = {
        width: '100px',
        height: '100px',
        borderWeight: '5px',
        borderStyle: 'solid',
        borderColor: color
    };
    let result;

    if (color == 'red' || color == 'green' || color == 'blue') {
        result = <div style={borderStyle}> </div>
    } else {
        result = <div> Nieprawidłowy kolor </div>
    }


    const imageUrl = 'http://www.nice.com/PublishingImages/Career%20images/J---HR_Page-4st-strip-green-hair%20(2).png';
    ReactDOM.render(
        <div> <img src= {imageUrl} /> {result} </div>,
        document.getElementById('app')
    );
});

// Za pomocą ```prompt()``` zapytaj użytkownika o kolor ramki i przechowaj odpowiedź w zmiennej.

// Sprawdź, czy odpowiedź to `red`, `green` lub `blue` (możesz wykorzystać metodę ```.indexOf()``` tablicy), 
// jeżeli nie to wyrenderuj w elemencie o id ```app``` element ```div``` z napisem `Nieprawidłowy kolor`.

// Jeżeli podany kolor był poprawny to za pomocą React wyrenderuj w elemencie o id ```app``` element ```div```, 
// ze stylami ustawionymi na:
// - Szerokość: 100px,
// - Wysokość: 100px,
// - Grubość ramki: 5px,
// - Styl ramki: solid,
// - Kolor ramki: ten podany przez użytkownika.