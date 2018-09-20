import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    class Menu extends React.Component {
        render() {
            return (
                <ul>
                    <li> <a href="#">strona główna</a> </li>
                    <li> <a href="#">blog</a> </li>
                    <li> <a href="#">cennik</a> </li>
                    <li> <a href="#">kontakt</a> </li>
                </ul>
            )
        }
    }
    ReactDOM.render(
        <Menu/>,
        document.getElementById('app')
    );
});