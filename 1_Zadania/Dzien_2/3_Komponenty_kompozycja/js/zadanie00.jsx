import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {
    class ShopItem extends React.Component {
        render() {
            return (
                <div>
                    <ShopItemHeader 
                        title={this.props.title} 
                        img={this.props.img}/>
                    <ShopItemDescription 
                        description={this.props.description}/>
                    <ShopItemPricing
                        price={this.props}/>
                </div>
            )
        }
    }
    class ShopItemHeader extends React.Component {
        render() {
            return (
                <div>
                    <h1>{this.props.title}</h1>
                    <img src={this.props.img} />
                </div>
            )
        }
    }
    class ShopItemDescription extends React.Component {
        render() {
            return (
                <article>
                    <p>{this.props.description}</p>
                </article>
            )
        }
    }
    class ShopItemPricing extends React.Component {
        render() {
            return (
                <div>
                    Cena: {this.props.price.price} {/* w shop item za price {this.props.price} podstawiliśmy wszystkie propsy, więc z nich wybieramy price */}
                    <button>Kup!</button>
                </div>
            )
        }
    }
    ReactDOM.render(
        <ShopItem title="tytuł" description="opis" price="cena" img="img/zadanie02.png" />,
        document.getElementById('app')
    );
});