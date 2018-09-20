import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {
    class ShopItemHeader extends React.Component {
        render() {
            return (
                <div>
                    <h1>{this.props.element.title}</h1>
                    <img src={this.props.element.image} />
                </div>
            )
        }
    }
    class ShopList extends React.Component {
        constructor(props) {
            super(props);
            this.result = this.props.menu.map(e => {
                return <ShopItemHeader element={e} />
            });
        }
        render() {
            return (
                <div className="shopList"> {this.result} </div>
            )
        }
    }
    ReactDOM.render(
        <ShopList menu={[
            {
                title: 'Mysz komputerowa',
                image: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg'
            },
            {
                title: 'Klawiatura',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png'
            },
            {
                title: 'Laptop programisty',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg'
            }
        ]} />,
        document.getElementById('app')
    );
});