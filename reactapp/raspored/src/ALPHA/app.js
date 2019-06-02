import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import DodajStudenta from './dodajStudenta'
import DodajOdsjek from './dodajOdsjek'
import DodajProfesora from './dodajProfesora'
import DodajAsistenta from './dodajAsistenta'
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
                    <Route path="/Alpha" component={DodajStudenta} exact/>
                    <Route path="/Alpha/odsjek" component={DodajOdsjek} />
                    <Route path="/Alpha/profesor" component={DodajProfesora} />
                    <Route path="/Alpha/asistent" component={DodajAsistenta} />
                </Switch>
            </div>
            </BrowserRouter>
        )
    }
}

export default App;