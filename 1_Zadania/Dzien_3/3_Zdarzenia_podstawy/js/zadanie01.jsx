import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {
    class AllEvents extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                text: '',
            }
        }
        clickEvent = () => {
            this.setState({
                text: 'Kliknięto'
            })
        }
        onEvent = () => {
            this.setState({
                text: 'Najechanie'
            })
        }
        outEvent = () => {
            this.setState({
                text: 'Zjechanie'
            })
        }
        render() {
            return (
            <div 
                onClick={this.clickEvent}
                onMouseEnter={this.onEvent}
                onMouseLeave={this.outEvent}> Cokolwiek
                <span> {this.state.text} </span>
            </div>)
        }
    }
    ReactDOM.render(
        <AllEvents />,
        document.getElementById('app')
    );
});