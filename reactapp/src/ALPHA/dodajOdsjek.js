import React, { Component } from 'react'
import Forma from './FormaOdsjek'
import Prikaz from './prikazOdsjeka'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class DodajOdsjek extends Component {
    render () {
        return (
            <div className="dodajOdsjek" style={{color: "#2C3E50"}} id="content">
                <h1 style={{color: "#fff", background: "#2C3E50"}} id="h1">Odsjek</h1>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">

                <Tab eventKey="home" title="Dodaj odsjek">
                    <Forma />
                </Tab>

                <Tab eventKey="profile" title="Prikaz odsjeka">
                    <Prikaz />
                </Tab>
            </Tabs>
                
            </div>
        )
    }
}

export default DodajOdsjek
