import React, { Component } from 'react'
import FormaPr from './FormaPr'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class DodajProfesora extends Component {
    render () {
        return (
            <div className="dodajProfesora" style={{color: "#2C3E50"}}>
                <h1 style={{color: "#18BC9C"}}>Profesor</h1>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Dodaj profesora">
                        <FormaPr />
                    </Tab>

                  
                </Tabs>
</div>
        )
    }
}

export default DodajProfesora