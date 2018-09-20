import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {

    class Invites extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                list: []
            }

        }
        handleClick = () => {
            this.person = prompt('Enter your name and surname')
            if (!this.state.list.includes(person)) {
                this.setState({
                    list: [...this.state.list, person]
                })
            }

        }
        render() {
            return (
                <div>
                    <ul>
                        {this.state.list.map((elem, index) => {
                            <li key={`people-${index}`}> {elem} </li>
                        }) }
                    </ul>
                    <button onClick={this.handleClick}> Nowy </button>
                </div>
            )
        }
    }

    ReactDOM.render(
        <Invites />,
        document.getElementById('app')
    );
});