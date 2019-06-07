import React, { Component } from 'react'
import FormaAsistent from './FormaAsistent'
import FormaAsistentPred from './FormaAsistentPred'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class DodajAsistenta extends Component {
    render () {
        return (
            <div className="dodajAsistenta">
                <h1>Asistent</h1>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">

                <Tab eventKey="home" title="Dodaj asistenta">
                    <FormaAsistent />
                </Tab>

                <Tab eventKey="profile" title="Dodaj asistenta na predmet">
                    <FormaAsistentPred />
                </Tab>
            </Tabs>
</div>
        )
    }
}

export default DodajAsistenta