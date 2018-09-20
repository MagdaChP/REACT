import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {

    class ChatHeader extends React.Component {
        render() {
            return (
                <header>
                    <h1>Chat prywatny</h1>
                </header>
            )
        }
    }

    class ChatMessages extends React.Component {
        render() {
            return (
                <div>
                    <ul>
                        <ChatMessage number={1} />
                        <ChatMessage number={2} />
                        <ChatMessage number={3} />
                    </ul>
                </div>
            )
        }
    }

    class ChatMessage extends React.Component {
        render() {
            return (
                <li>Wpis z chatu {this.props.number}</li>
            )
        }
    }

    class NewChatMessage extends React.Component {
        render() {
            return (
                <footer>
                    <input type="text" />
                    <button>Wyślij</button>
                </footer>
            )
        }
    }

    class App extends React.Component {
        render() {
            return <div className="chat">
                <ChatHeader />
                <ChatMessages />
                <NewChatMessage />
            </div>;
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});