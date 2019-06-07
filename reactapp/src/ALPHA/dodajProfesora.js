import React, { Component } from 'react'
import FormaPr from './FormaPr'
import FormaProfPred from './FormaProfPred'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class DodajProfesora extends Component {
    render () {
        return (
            <div className="dodajProfesora">
                <h1>Profesor</h1>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">

                <Tab eventKey="home" title="Dodaj profesora">
                    <FormaPr />
                </Tab>

                <Tab eventKey="profile" title="Dodaj profesora na predmet">
                    <FormaProfPred />
                </Tab>
            </Tabs>
</div>
        )
    }
}

export default DodajProfesora