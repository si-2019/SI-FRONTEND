import React, { Component } from 'react'
import FormaPredmet from './FormaPredmet'
import FormaProfPred from './FormaProfPred'
import Forma from './editPredmeta'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class DodajPredmet extends Component {
    render () {
        return (
            <div className="dodajPredmet" style={{color: "#2C3E50"}}>
                <h1 style={{color: "#18BC9C"}}>Predmet</h1>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Dodaj predmet">
                        <FormaPredmet />
                    </Tab>
                    
                    <Tab eventKey="profile" title="Dodaj profesora na predmet">
                        <FormaProfPred />
                    </Tab>
                    <Tab eventKey="profile2" title="Izmjeni predmet">
                        <Forma />
                    </Tab>
                  
                </Tabs>
</div>
        )
    }
}

export default DodajPredmet