import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {
    class Shop extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                list: []
            }
        }
        addToCart = (text) => {
            const prevState = this.state;
            this.setState({
                list: [...prevState.list, text] //dodawanie elementów do tablicy w R eact
            })
        }
        render() {
            return (
                <div>
                    <ShopItem title="skarpetki" onBuy={this.addToCart} />
                    <ShopItem title="koszula" onBuy={this.addToCart} />
                    <ShopItem title="pończochy" onBuy={this.addToCart} />
                    <ul>
                        {this.state.list.map(item => {
                            return <li>{item}</li>
                        })}
                    </ul>
                </div>
            )
        }
    }
    class ShopItem extends React.Component {
        handleStartClick = () => {
            if (typeof this.props.onBuy === 'function') {
                this.props.onBuy(this.props.title);
            }
        }
        render() {
            return (
                <div>
                    <h1>{this.props.title}</h1>
                    <button onClick={this.handleStartClick}>Kup</button>
                </div>
            )
        }
    }
    ReactDOM.render(
        <Shop />,
        document.getElementById('app')
    );
});