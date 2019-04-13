import React, { Component } from 'react'
import Forma from './Forma'
import FormaUpis from './FormaUpis'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class DodajStudenta extends Component {
    render () {
        return (
            //Ove tabove dodajete u neki svoj .js
            
            <div className="dodajStudenta">
                <h1>Student</h1>
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
