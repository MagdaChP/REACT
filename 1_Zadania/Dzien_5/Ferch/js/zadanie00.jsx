// https://dev-back.webbat-p-1.srv.pride.gl/api/main?_format=json
import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: {}
            }
        }
        componentDidMount() {
            fetch('https://dev-back.webbat-p-1.srv.pride.gl/api/main?_format=json')
                .then(r => r.json())
                .then(data => {
                    console.log(data);
                    fetch('https://dev-back.webbat-p-1.srv.pride.gl/' + data.gate.gateContent + '?_format=json')
                        .then(r => r.json())
                        // .then(data => {
                        //     console.log(data);
                        //     this.setState({
                        //         data 
                        //     })
                        // })
                        .then(resp => {
                            console.log(resp);
                            this.setState({
                                data: resp
                            })
                        })
                });
        }
        render() {
            if (this.state.data == {}) {
                return <p>Oczekuje na dane</p>
            } else {
                return (
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: this.state.data.copyright }}></div>
                        <br />
                        <div dangerouslySetInnerHTML={{ __html: this.state.data.login_url }}></div>
                        <br />
                        <div dangerouslySetInnerHTML={{ __html: this.state.data.text1 }}></div>
                        <br />
                        <div dangerouslySetInnerHTML={{ __html: this.state.data.text2 }}></div>
                        <br />
                        <div dangerouslySetInnerHTML={{ __html: this.state.data.text3 }}></div>
                        <br />
                        <img src={'https://dev-back.webbat-p-1.srv.pride.gl/' + this.state.data.bg}></img>
                        <br />
                        <img src={'https://dev-back.webbat-p-1.srv.pride.gl/' + this.state.data.img}></img>
                        <br />
                        <button>{this.state.data.button1}</button>
                        <br />
                        <button>{this.state.data.button2}</button>
                    </div>
                )
            }
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});