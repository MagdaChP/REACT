import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class NumberInfo extends React.Component {
        isPrime(num) {
            for(let i = 2; i < num; i++)
              if(num % i === 0) return false;
            return true;
          }
        render() {
            return (
                <div>
                <h1> {this.props.number}</h1>
               <span> {this.props.number%2 === 0 ? 'parzysta' : 'nieparzysta'}</span>
               { this.isPrime(this.props.number) && <span>jest liczba pierwsza</span>}
                </div>
            )
        }
    }


    ReactDOM.render(
        <NumberInfo number={8}/>,
        document.getElementById('app')
    );
});