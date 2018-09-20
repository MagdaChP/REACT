import React from 'react';
import ReactDOM from 'react-dom';
import people from './zadanie00_02';

document.addEventListener('DOMContentLoaded', function () {
    let peopleDivs = people.map(e => {
        return (
            <div className='person'>
                <img src={e.avatar} />
                <div className="info">
                    <h1>{e.title} {e.name} {e.surname}</h1>
                    <p>{e.bio}</p>
                </div>
            </div>
        )
    })

    ReactDOM.render(
        <div> {peopleDivs} </div>,
        document.getElementById('app')
    );
});