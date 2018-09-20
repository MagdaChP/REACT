import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {

    class LikeBox extends React.Component {
        render() {
            return (
                <div>
                    <p> {this.props.default} likes</p>
                    <button>Like</button>
                </div>
            )
        }
    }

    ReactDOM.render(
        <LikeBox default={105}/>,
        document.getElementById('app')
    );
});
// Zmodyfikuj komponent `LikeBox` z poprzedniego działu. Niech przyjmuje w `props` 
// początkową liczbę polubień (`likes`).

// Wyrenderuj go na stronie podając w atrybucie do props przykładową liczbę polubień.
