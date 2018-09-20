import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {
    class ClickSpeedGame extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                time: this.props.time,
                score: 0,
                disabled: false
            }
        }
        componentDidMount() {
            this.timeout = setTimeout(() => {
                this.setState({
                    disabled: true
                })
            }, this.state.time)
        }
        addScore = () => {
            clearTimeout(this.timeout)
            this.setState({
                time: this.state.time - 50,
                score: this.state.score + 1
            }, () => {
                this.timeout = setTimeout(() => {
                    this.setState({
                        disabled: true
                    })
                }, this.state.time)
            })

        }
        render() {

            return (
                <div>
                    <h1>Actual time: {this.state.time}</h1>
                    <h2>Score: {this.state.score}</h2>
                    <button onClick={this.addScore}
                        disabled={this.state.disabled}>click me</button>

                </div>
            )
        }
    }
    ReactDOM.render(
        <ClickSpeedGame time={1000} />,
        document.getElementById('app')
    );
});