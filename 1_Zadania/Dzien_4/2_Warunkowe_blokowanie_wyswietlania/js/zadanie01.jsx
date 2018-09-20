import React from 'react';
import ReactDOM from 'react-dom';
import fakeAPI from './zadanie01';

document.addEventListener('DOMContentLoaded', function () {
    class AccountData extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: false
            }
        }
        componentDidMount() {
            fakeAPI.load().then((resp) => {
                console.log(resp)
                this.setState({
                    data: resp
                })
            });
        }
        render () {
            if (this.state.data == false) {
               return null
            } else {
                return (
                    <div> {this.state.data[0].day} </div>
                )
            }
           
        }
    }

    ReactDOM.render(
        <AccountData />,
        document.getElementById('app')
    );
});