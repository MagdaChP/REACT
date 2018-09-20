import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    class Hello extends React.Component {
        render() {
            return (
                <h1> Witaj {this.props.name} {this.props.surname}</h1>
            )
        }
    }
    ReactDOM.render(
        <Hello name="MAgda" surname="Chorzępa"/>,
        document.getElementById('app')
    );
});