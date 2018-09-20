import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Funkcja generuje pseudolosowe liczby całkowite z zakresu 1-10.
    function genNumber(){
        return Math.round( Math.random() * 9 + 1 );
    }
    //Nie modyfikuj kodu powyżej
    let firstNumber = genNumber();
    let secondNumber = genNumber();
    let promptWindow = prompt(`Jaki jest wynik dodawania liczby ${firstNumber} i ${secondNumber}`);
    let result;
    let wrongColor = 'red';
    let rightColor = 'green';
    let wrongText = 'Odpowiedź błędna!';
    let rightText = 'Odpowiedź poprawna!';

    /* if (firstNumber + secondNumber == promptWindow){
        result = <div style={{backgroundColor:rightColor}}> {rightText} </div>
    } else {
        result = <div style={{backgroundColor:wrongColor}}> {wrongText} </div>
    } */
    ReactDOM.render(
        <div style={
            {backgroundColor:(firstNumber + secondNumber == promptWindow)?rightColor:wrongColor}}> 
        {(firstNumber + secondNumber == promptWindow)?rightText:wrongText} 
        </div>,
        document.getElementById('app')
    );
});