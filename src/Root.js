/**
 * Created by Walter on 2017/5/12.
 */
import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home';
import GithubSearch from './GithubSearch';

//bootstrap import
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class Root extends React.Component {


    render() {

        return (

            <Router>
                <div className="container">
                    <Route path="/" component={Home}/>
                    <Route exact path="/" component={GithubSearch}/>
                </div>
            </Router>
        );

    }


}

export default Root;