import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', function(){

class Main extends React.Component{
    render(){
        return <h1>Witamy na stronie</h1>
    }
}

class HelloYou extends React.Component{
    render(){
        return <h1>Witaj, {this.props.match.params.name}</h1>
    }
}

class CheckAge extends React.Component{
    render(){
        if (this.props.match.params.age > 18) {
            return <h1>Pełnoletni</h1>
        } else {
            return <h1>Niepełnoletni</h1>
        }
    }
}

class App extends React.Component{
    render(){
        return <HashRouter>
            <div>
                <ul>
                    <li><Link to='/'>Cześć</Link></li>
                    <li><Link to='/hello/Jan'>Imię</Link></li>
                    <li><Link to='/checkage/50'>Wiek</Link></li>
                </ul>
                <Switch>
                    <Route exact path='/' component={Main}></Route>
                    <Route exact path='/hello/:name' component={HelloYou}></Route>
                    <Route exact path='/checkage/:age' component={CheckAge}></Route>
                </Switch>
            </div>

        </HashRouter>
    }
}
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});