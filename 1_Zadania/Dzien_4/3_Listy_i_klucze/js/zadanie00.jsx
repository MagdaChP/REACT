import React from 'react';
import ReactDOM from 'react-dom';
import people from './zadanie00';

document.addEventListener('DOMContentLoaded', function () {

    class PeopleList extends React.Component {
        constructor(props) {
            super(props);
            console.log(this.props.list);
        }
        render() {
            return (
                <ul>
                    {this.props.list.map((elem, index) => {
                        console.log(elem);
                        return <li key={`people-${index}`}>{elem.name}</li>
                    })}
                </ul>)
        }
    }

    ReactDOM.render(
        <PeopleList list={people} />,
        document.getElementById('app')
    );
});