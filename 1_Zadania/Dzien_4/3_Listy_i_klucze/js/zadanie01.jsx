import React from 'react';
import ReactDOM from 'react-dom';
import people from './zadanie01';

document.addEventListener('DOMContentLoaded', function () {

    class PeopleList2 extends React.Component {
        constructor(props) {
            super(props);
            console.log(this.props.list);
            this.state = {
                list: this.props.list
            }
        }
        reverseList = () => {
            this.setState({
                list: this.state.list.reverse()
            })
        }
        render() {
            return (
                <div>
                    <ul>
                        {this.state.list.map((elem, index) => {
                            return <li key={`people-${index}`}> {elem.name} </li>
                        })}
                    </ul>
                    <button onClick={this.reverseList}> odwróć listę </button>
                </div>

            )
        }
    }

    ReactDOM.render(
        <PeopleList2 list={people} />,
        document.getElementById('app')
    );
});