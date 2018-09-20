import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    let firstNumber = prompt('Podaj iczbę A');
    let sign = prompt('Podaj znak działania');
    let secondNumber = prompt('Podaj liczbę B');
    let result;
    if (sign == '+') {
        result = <h1>{Number(firstNumber) + Number(secondNumber)}</h1>;
    } else if (sign == '-') {
        result = <h2>{Number(firstNumber) - Number(secondNumber)}</h2>;
    } else if (sign == '*') {
        result = <h3>{Number(firstNumber) * Number(secondNumber)}</h3>;
    } else {
        result = <h4>{Number(firstNumber) / Number(secondNumber)}</h4>;
    }

    ReactDOM.render(
        <div> {result} </div>,
        document.getElementById('app')
    );

});

// Stwórz prosty kalkulator, który liczy wynik dodawania, odejmowania, mnożenia lub dzielenia.

// Zmodyfikuj zadanie z wykładowcą w ten sposób, aby wyświetlać jeszcze jeden ```prompt()```, 
// który ma pobierać jeden ze znaków: `+`, `-`, `*` lub `/` - odpowiada on operacjom matematycznym jakie zostaną 
// wykonane dla liczb A i B.
 
//  Zadanie wykonaj w ten sposób, aby w zależności od operacji był renderowany inny element: dla dodwania element `h1`, 
//  dla odejmowania element `h2`, dla mnożenie element `h3`, a dla dzielenia element `h4`. Operacje matematyczne wykonuj 
//  bezpośrednio w wyrażeniu w danym tagu JSX.