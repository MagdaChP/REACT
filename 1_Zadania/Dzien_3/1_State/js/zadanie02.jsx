import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {
    class TextTyper extends React.Component {
        constructor(props) {
            super(props);
            this.textArray = [...this.props.text];
            this.state = {
                text: this.props.reversed ? this.props.text : this.textArray[0],
                counter: this.props.reversed ? 1 : 0
            }
        }
        componentDidMount() {
            let ourinterval = setInterval(() => {
                console.log('interval check');
                let textUp = this.state.text + this.textArray[this.state.counter + 1];
                let textDown = this.state.text.slice(0, this.textArray.length - this.state.counter)
                this.setState({
                    text: this.props.reversed ? textDown : textUp,
                    counter: this.state.counter + 1
                }, () => {
                    if (this.state.counter > this.textArray.length && this.props.reversed) {
                        clearInterval(ourinterval);
                    } else if (this.state.counter == this.textArray.length - 1 && !this.props.reversed) {
                        clearInterval(ourinterval)
                    }

                })

            }, 1000)

        }
        render() {
            return (
                <h1>{this.state.text}</h1>
            )
        }
    }
    ReactDOM.render(
        <TextTyper text="Witaj!" reversed={true} />,
        document.getElementById('app')
    );
});