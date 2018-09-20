import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

document.addEventListener('DOMContentLoaded', function () {

    class Home extends React.Component {
        render() {
            return <h1>Witaj na stronie</h1>
        }
    }

    class Blog extends React.Component {
        render() {
            return <h1>Blog</h1>
        }
    }

    class Pricing extends React.Component {
        render() {
            return <h1>Cennik</h1>
        }
    }

    class App extends React.Component {
        render() {
            return (
                <HashRouter>
                    <div>
                        <div>
                            <h1>Aplikacja React z React Router</h1>
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/pricing'>Pricing</Link></li>
                            </ul>
                        </div>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/blog' component={Blog} />
                            <Route path='/pricing' component={Pricing} />
                        </Switch>
                    </div>
                </HashRouter>
            )
        }
    }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});