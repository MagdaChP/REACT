import React from 'react';
import ReactDOM from 'react-dom';
/* 
document.addEventListener('DOMContentLoaded', function () {
    class LifeCyclesTester extends React.Compoment {
        constructor(props) {
            super(props);
            this.state = {
                text: ''
            }
            console.log('Constructor');
        }
        componentWillMount() {
            console.log('Component will be mounted');
        }
        componentDidMount() {
            console.log('Component was maunted');
        }
        componentWillUnmount() {
            console.log('Component will be unmounted');
        }
        render() {
            console.log('renderowanie');
            return <div> {this.state.text} </div>
        }


    }
    ReactDOM.render(
        <LifeCyclesTester />,
        document.getElementById('app')
    );
}); */



document.addEventListener('DOMContentLoaded', function () {
    class LifeCyclesTester extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                text: ''
            }
            console.log('Konstruktor');
        }
        componentWillMount() {
            console.log('Komponent będzie zamontowany');
        }
        componentDidMount() {
            console.log('Komponent jest zamontowany');
        }
        componentWillUnmount() {
            console.log('Komponent będzie odmontowywany');
        }
        render() {
            console.log('Renderowanie');
            return <div>{this.state.text}</div>
        }
    }

    ReactDOM.render(
        <LifeCyclesTester/>,
        document.getElementById('app')
    );
});