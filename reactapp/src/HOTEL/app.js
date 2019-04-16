import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './pocetnaStranica/pocetna'
import Kreiranje from './kreiranje/app'
import Popunjavanje from './popunjavanje/app.js'
import Rezultati from './rezultati/app.js'
import Liste from './liste/app.js'

export default class Hotel extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/hotel" component={Home} />
                    <Route path="/hotel/kreiranje/" component={Kreiranje} />
                    <Route path="/hotel/popunjavanje" component={Popunjavanje} />
                    <Route path="/hotel/rezultati" component={Rezultati} />
                    <Route path="/hotel/liste" component={Liste} />
                </div>
            </Router>
        )
    }
}