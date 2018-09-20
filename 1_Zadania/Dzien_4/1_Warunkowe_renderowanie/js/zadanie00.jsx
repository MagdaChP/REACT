import React from 'react';
import ReactDOM from 'react-dom';

class MyCheckbox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: 'NIE'
        }
    }
    changeText = () => {
        this.setStatus({
            
        })
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <h1>Hello, World!</h1>,
        document.getElementById('app')
    );
});