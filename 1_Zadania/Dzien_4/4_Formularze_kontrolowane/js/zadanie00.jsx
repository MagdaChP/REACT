import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class HelloName extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: 'Ty'
            }
        }
        setName = (e) => {
            this.setState({
                name: e.target.value
            })
        }
        render() {
            return(
                <div> 
                <input type="text" value={this.state.name} 
                onChange={this.setName}
                />
                <h1> HelloName, {this.state.name} </h1>
                </div>
            )
        }
    }

    ReactDOM.render(
        <HelloName />,
        document.getElementById('app')
    );
});