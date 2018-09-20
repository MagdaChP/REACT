import React from 'react';
import ReactDOM from 'react-dom';
import people from './zadanie00_02';

document.addEventListener('DOMContentLoaded', function(){
    let peopleDivs = people.map(e => {
        return <div> {e.name} {e.surname} </div>
    })
    ReactDOM.render(
        <div> {peopleDivs} </div>,
        document.getElementById('app')
    );
});