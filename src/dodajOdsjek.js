import React, { Component } from 'react'
import Forma from './FormaOdsjek'
import FormaOdsjekPred from './FormaOdsjekPred'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class DodajOdsjek extends Component {
    render () {
        return (
            <div className="dodajStudenta" style={{color: "#2C3E50"}} id="content">
                <h1 style={{color: "#fff", background: "#2C3E50"}} id="h1">Odsjek</h1>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Dodaj Odsjek">
                        <Forma />
                    </Tab>
                   
                  
                </Tabs>               

            </div>
        )
    }
}

export default DodajOdsjek