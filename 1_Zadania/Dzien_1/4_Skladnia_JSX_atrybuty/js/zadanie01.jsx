import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Nie modyfikuj kodu powyżej

    const redColor = 'red';
    const greenColor = 'green';
    const blueColor = 'blue';
    const redDiv = <div style={{height: "100px", backgroundColor: redColor}}></div>;
    const greenDiv = <div style={{height: "100px", backgroundColor: greenColor}}></div>;
    const blueDiv = <div style={{height: "100px", backgroundColor: blueColor}}></div>;

    //Nie modyfikuj kodu poniżej
    ReactDOM.render(
        <div>
            {redDiv}{greenDiv}{blueDiv}
        </div>,
        document.getElementById('app')
    );
});