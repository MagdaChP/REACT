import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    class Button extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                text: ''
            }
        }
        handleClick = () => {  //po zmianie stanu uruchami asię renderowanie z nowym stanem
            this.setState({
                text: 'Kliknięto!'
            })
        }
        render() {
            return (
                <div>
                    <button onClick={this.handleClick}>Kliknij</button>
                    <span>{this.state.text}</span>
                </div>
            )
        }
    }
    ReactDOM.render(
        <Button/>,
        document.getElementById('app')
    );
});

