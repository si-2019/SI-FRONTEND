import React, { Component } from 'react'
import Forma from './Forma'
import FormaUpis from './FormaUpis'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class DodajStudenta extends Component {
    render () {
        return (
            <div className="dodajStudenta" style={{color: "#2C3E50"}}>
                <h1 style={{color: "#18BC9C"}}>Student</h1>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">

                <Tab eventKey="home" title="Dodaj studenta">
                    <Forma />
                </Tab>

                <Tab eventKey="profile" title="Upiši studenta">
                    <FormaUpis />
                </Tab>
            </Tabs>
            
            </div>
        )
    }
}

export default DodajStudenta
