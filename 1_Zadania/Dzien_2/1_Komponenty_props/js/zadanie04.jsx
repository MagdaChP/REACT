import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    class Menu extends React.Component {
        constructor(props) {
            super (props);
            this.menuElem = this.props.menu.map( e => {
                return <li> <a href={e.urL}> {e.text} </a> </li>
            })
        }
        render() {
            return (
                <ul>
                    {this.menuElem}
                </ul>
            )
        }
    }
    ReactDOM.render(
        <Menu menu={[
            {
                urL     :   '/',
                text    :   'Strona główna'
            },
            {
                urL     :   '/blog',
                text    :   'Blog'
            },
            {
                urL     :   '/pricing',
                text    :   'Cennik'
            },
            {
                urL     :   '/contact',
                text    :   'Kontakt'
            }
        ]}/>,
        document.getElementById('app')
    );
});