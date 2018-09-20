import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Button extends React.Component {
        render () {
            return <button>{this.props.text}</button>
        }
    }

    class Message extends React.Component {
        render () {
            return (
                <div>
                    <Button text={this.props.btn1}/>
                    <Button text={this.props.btn2}/>
                    <p>{this.props.messageText}</p>
                </div>
            )
        }
    }

    class App extends React.Component {
        render () {
            return (
                <div>
                    <Message messageText="Komunikat 1" btn1="Tak" btn2="Nie"/>
                    <Message messageText="Komunikat 2" btn1="Zaloguj" btn2="Zarejestruj"/>
                </div>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});