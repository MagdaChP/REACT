import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    class SecretStuff extends React.Component {
        constructor(props) {
            super(props);
            this.state = {

            }
        }
        render() {
            if (this.props.pwd == this.props.correctPwd) {
                return (<div>{this.props.secret}</div>)
            } else null        
        }
    }
    ReactDOM.render(
        <SecretStuff pwd="134" correctPwd="1234" secret="xxx" />,
        document.getElementById('app')
    );
});