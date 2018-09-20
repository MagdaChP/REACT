import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    class Link extends React.Component {
        constructor (props) {
            super(props);
        }
        handleClickButton (event, text) {
            event.preventDefault();
            console.log(text);
        }
        render() {
            return <a href="#" 
            onClick={e => this.handleClickButton(e, 'dowolny tekst')}> link </a>
        }
    }

    ReactDOM.render(
        <Link />,
        document.getElementById('app')
    );
});