import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {
    class MobileMenu extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                firstDiv: true,
                secondDiv: false
            }
        }
        hideDiv = () => {
            this.setState({
                firstDiv: !this.state.firstDiv,
                secondDiv: !this.state.secondDiv
            })
        }
        render() {
            return (
                <menu>
                    <div style={{display: this.state.firstDiv ? 'block' : 'none'}}>
                        <img onClick={this.hideDiv} src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="Otwórz menu" />
                    </div>
                    <div style={{display: this.state.secondDiv ? 'block' : 'none'}}>
                        <ul>
                            <li>Menu 1...</li>
                            <li>Menu 2...</li>
                            <li>Menu 3...</li>
                            <li>Menu 4...</li>
                        </ul>
                        <div onClick={this.hideDiv}>Schowaj menu</div>
                    </div>
                </menu>
            )
        }
    }
    ReactDOM.render(
        <MobileMenu />,
        document.getElementById('app')
    );
});