import React, { Component } from 'react'
import Forma from './Forma'
import FormaUpis from './FormaUpis'
import EditForm from './EditStudentForma'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class DodajStudenta extends Component {
    render () {
        return (
            <div className="dodajStudenta" style={{color: "#2C3E50"}} id="content">
                <h1 style={{color: "#fff", background: "#2C3E50"}} id="h1">Student</h1>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">

                <Tab eventKey="home" title="Dodaj studenta">
                    <Forma />
                </Tab>

                <Tab eventKey="profile" title="Upiši studenta">
                    <FormaUpis />
                </Tab>

                <Tab eventKey="edit" title="Izmjene podataka">
                    <EditForm />
                </Tab>
            </Tabs>
            
            </div>
        )
    }
}

export default DodajStudenta
