import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    class HelloWorld extends React.Component {
        constructor (props) {
            super(props);
            this.state = {
                text: 'Hello World'
            }
            console.log('konstruktor');
        }
        componentDidMount(){
            console.log('po renderowaniu')
            setTimeout(() => {
                this.setState({
                    text: 'Hi, Everyone!'
                }, () => {console.log('stan 2 ', this.state)})
                console.log('stan ', this.state)
            }, 5000)
            
        }
        render() {
            console.log('render');
            return <h1>{this.state.text}</h1>
        }
    }
    ReactDOM.render(
        <HelloWorld />,
        document.getElementById('app')
    );
});