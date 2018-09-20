import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {

    class InteractiveDiv extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: '50'
            }
        }
        sizeChange = (e) => {
            this.setState({
                value: e.target.value
            })
        }
        render() {
            return (
                <div>
                    <input type="number" value={this.state.value} onChange={this.sizeChange}/>
                    <div style={{
                        height: '100px',
                        width: Number(this.state.value)+ 'px',
                        backgroundColor: "red"
                    }}> </div>
                </div>
            )
        }
    }

    ReactDOM.render(
        <InteractiveDiv />,
        document.getElementById('app')
    );
});