import React from 'react';
import ReactDOM from 'react-dom';

class MathQuestionGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: Math.floor(Math.random() * (max - min) + min ),
            b: Math.floor(Math.random() * (max - min) + min ),
            result: ''
        }
    }
    pick() {
        const mathOperations = ['*', '-', '+']
        return mathOperations[Math.floor(Math.random() * (max - min) + min )]
    }
    randomNumbers() {
        const buttons = [
            `<button></button>`
        ]
        return buttons
    }
    render() {
        return (
            <div>
                <h1>2 * 3 =</h1>
                <div>
                    <button>3</button>
                    <button>6</button>
                    <button>8</button>
                    <button>7</button>
                </div>
                <h2>00:08</h2>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <MathQuestionGame />,
        document.getElementById('app')
    );
});