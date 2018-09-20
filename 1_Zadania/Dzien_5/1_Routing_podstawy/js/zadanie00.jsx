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
    class Main extends React.Component {
        render() {
            return <h1> Witaj na stronie! </h1>
        }
    }
    class AboutUs extends React.Component {
        render() {
            return <p> Więcej o nas....</p>
        }
    }

    class AboutCompany extends React.Component {
        render() {
            return <p> Trochę więcej o naszej firmie </p>
        }
    }

    class App extends React.Component {
        render() {
            return (
                <HashRouter>
                    <div>
                        <h1> Aplikacja React z React Router </h1>
                        <Switch>
                            <Route exact path='/' component={Main} />
                            <div>
                                <h2> O nas </h2>
                                <Route path='/aboutus' component={AboutUs} />
                                <Route path='/aboutcompany' component={AboutCompany} />
                            </div>

                        </Switch>
                    </div>
                </HashRouter >)
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});