import React, { Component, Fragment } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
    showContentMenu = (routes) => {
        var result = null;
        if (routes.length) {
            result = routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            ))
        }
        return <Switch>{result}</Switch>;
    }
    render() {
        return (
            <Router>
                <Fragment>
                    <Menu />
                    <div className="container">
                        <div className="row">
                            {this.showContentMenu(routes)}
                        </div>
                    </div>
                </Fragment>
            </Router>
        );
    }
}

export default App;
