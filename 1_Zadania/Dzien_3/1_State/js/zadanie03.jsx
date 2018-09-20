import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {
    class StrobeLight extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                color: this.props.color,
                frequency: this.props.frequency
            }
        }
        componentDidMount() {
            setInterval(() => {
                this.setState({
                    color: (this.state.color == "red") ? "white" : "red"
                })
            }, this.state.frequency)
        }
        render() {
            return <div style={{ width: "100px", height: "50px", backgroundColor: this.state.color }}></div>
        }
    }
    ReactDOM.render(
        <StrobeLight color="red" frequency={100} />,
        document.getElementById('app')
    );
});