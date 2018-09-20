import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
class Buttons extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        btnText: 'klik',
        style: 'auto'
    }
}
firstClickHandler = () => {
    console.log('Pierwszy przycick kliknięty')
}
secondClickHandler = () => {
    this.setState({
        btnText: 'click'
    })
}
thirdClickHandler = () => {
    this.setState({
        style: '300px'
    })
}

    render() {
        return (
        <div>
            <button onClick={this.firstClickHandler}>{this.state.btnText}</button>
            <button onClick={this.secondClickHandler}>{this.state.btnText}</button>
            <button onClick={this.thirdClickHandler} style={{width: this.state.style}}>{this.state.btnText}</button>
        </div>
        )
    }
}
    ReactDOM.render(
        <Buttons />,
        document.getElementById('app')
    );
});