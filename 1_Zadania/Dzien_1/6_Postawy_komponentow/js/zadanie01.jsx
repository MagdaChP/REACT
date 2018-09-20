import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {
    class LikeBox extends React.Component {
        render() {
            return (
                <div>
                    <p>100 likes </p>
                </div>
            )
        }
    }
    ReactDOM.render(
        <LikeBox/>,
        document.getElementById('app')
    );
});