import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './pocetnaStranica/pocetna'
import Kreiranje from './kreiranje/app.js'
import Popunjavanje from './popunjavanje/app.js'
import Rezultati from './rezultati/app.js'
import Liste from './liste/app.js'

export default class Hotel extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/kreiranje" component={Kreiranje} />
                    <Route path="/popunjavanje" component={Popunjavanje} />
                    <Route path="/rezultati" component={Rezultati} />
                    <Route path="/liste" component={Liste} />
                </div>
            </Router>
        )
    }
}