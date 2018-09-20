import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {
    class TextTyper extends React.Component {
        constructor(props) {
            super(props);
            this.textArray = [...this.props.text];
            this.state = {
                text: this.textArray[0],
                counter: 0
            }
        }
        componentDidMount() {
            setInterval(() => {
                console.log('test', this.textArray)
                if (this.state.counter < this.textArray.length - 1) {
                    this.setState({
                        text: this.state.text + this.textArray[this.state.counter + 1],
                        counter: this.state.counter + 1
                    })
                }
            }, 1000)

        }
        render() {
            return (
                <h1>{this.state.text}</h1>
            )
        }
    }
    ReactDOM.render(
        <TextTyper text="Witaj!" />,
        document.getElementById('app')
    );
});