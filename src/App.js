import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import DodajStudenta from './dodajStudenta'
import DodajOdsjek from './dodajOdsjek'
import Navigation from './Navigation'

//rutiranje, prebacivanje sa student na odsjek page i obrnuto
//izmjenje-> treba napraviti home page
class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
             <Navigation />
                <Switch>
                    <Route path="/" component={DodajStudenta} exact/>
                    <Route path="/odsjek" component={DodajOdsjek} />
                </Switch>
            </div>
            </BrowserRouter>
        )
    }
}

export default App;