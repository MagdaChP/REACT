import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {
    class AddTwoNumbers extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                firstNumber: '',
                secondNumber: ''
            }
        }
        showNumber1 = (event) => {
            this.setState({
                firstNumber: event.target.value
            })
        }
        showNumber2 = (event) => {
            this.setState({
                secondNumber: event.target.value
            })
        }
        render() {
            return (
                <div>
                    <input type="text" value={this.state.firstNumber} onChange={this.showNumber1} />
                    <input type="text" value={this.state.secondNumber} onChange={this.showNumber2} />
                    <h1>{Number(this.state.firstNumber) + Number(this.state.secondNumber)}</h1>
                </div>
            )
        }
    }
    ReactDOM.render(
        <AddTwoNumbers />,
        document.getElementById('app')
    );
});