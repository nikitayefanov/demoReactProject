import React, {Component} from 'react';
import style from './App.css';
import ScriptForm from "./containers/ScriptForm/ScriptForm";
import {BrowserRouter} from 'react-router-dom';
import {Redirect, Route, Switch} from "react-router";
import Scripts from "./containers/Scripts/Scripts";
import Layout from "./components/Layout/Layout";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <div className={style.App}>
                        <Switch>
                            <Route path='/create-script' component={ScriptForm}/>
                            <Route path='/scripts' exact component={Scripts}/>
                            {/*<Route path='/scripts/:id' component={Script}/>*/}
                            <Route path='/' render={() => (<h1>Hello, this is a script application!</h1>)}/>
                            <Redirect to='/'/>
                        </Switch>
                    </div>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
