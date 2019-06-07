import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import DodajStudenta from './dodajStudenta'
import DodajOdsjek from './dodajOdsjek'
import DodajProfesora from './dodajProfesora'
import DodajAsistenta from './dodajAsistenta'
import DodajPredmet from './dodajPredmet'
import Navigation from './Navigation'

//rutiranje, prebacivanje sa student na odsjek page i obrnuto
class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
             <Navigation />
                <Switch>
                    <Route path="/student" component={DodajStudenta} exact/>
                    <Route path="/odsjek" component={DodajOdsjek} />
                    <Route path="/profesor" component={DodajProfesora} />
                    <Route path="/asistent" component={DodajAsistenta} />
                    <Route path="/predmet" component={DodajPredmet} />
                </Switch>
            </div>
            </BrowserRouter>
        )
    }
}

export default App;