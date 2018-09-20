import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {

    class NumberRandomInfo extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                text: 0
            }
        }
        componentDidMount() {
            setInterval(() => {
                this.setState({
                    text: Math.ceil(Math.random() * 5)
                })
            }, 1000)
        }
        render() {
            return (
                <div>
                <span> {this.state.text < 3 ? 'Mniejsze od 3':'Większe od 3'} </span>
                {this.state.text > 4 && <span> Większe od 4 </span>}
                </div>
            )
        }
    }

    ReactDOM.render(
        <NumberRandomInfo />,
        document.getElementById('app')
    );
});