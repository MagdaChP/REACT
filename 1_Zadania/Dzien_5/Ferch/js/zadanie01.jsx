import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {

    class TextField extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                select: 'opcja A'
            }
        }
        changeOption = (e) => {
            this.setState({
                select: e.target.value
            })
        }
        render() {
            return (
                <div>
                    <p> {this.state.select} </p>
                    <select value={this.state.select} onChange={this.changeOption}>
                        <option>opcja A</option>
                        <option>opcja A i B</option>
                        <option>opcja A, B i C</option>
                    </select>
                    <span> {this.state.select.length} </span>
                </div>
            )
        }
    }

    ReactDOM.render(
        <TextField />,
        document.getElementById('app')
    );
});