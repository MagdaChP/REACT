import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class SearchForm extends React.Component {
        render () {
            return (
                <form>
                    <input type='text'/>
                    <button type='button'> Wyślij </button>
                </form>
            )
        }
    }
    ReactDOM.render(
        <SearchForm />,
        document.getElementById('app')
    );
});