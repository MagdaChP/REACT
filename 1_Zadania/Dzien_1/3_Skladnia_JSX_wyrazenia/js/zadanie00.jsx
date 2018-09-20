import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    let firstNumber = prompt('Podaj iczbę A');
    let secondNumber = prompt('Podaj liczbę B');

    ReactDOM.render(
        <h1>{ Number(firstNumber) + Number(secondNumber)}</h1>,
        document.getElementById('app')
    );

});