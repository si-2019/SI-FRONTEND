import React, { Component } from 'react'
import FormaAsistent from './FormaAsistent'
import Povezivanje from './FormaAsistentPred'
import FormaUrediAsistenta from './FormaUrediAsistenta'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class DodajAsistenta extends Component {
    render () {
        return (
            <div className="dodajAsistenta" style={{color: "#2C3E50"}}>
                <h1 style={{color: "#18BC9C"}}>Asistent</h1>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Dodaj asistenta">
                        <FormaAsistent />
                    </Tab>

                    <Tab eventKey="profile" title="Dodaj asistenta na predmet">
                        <Povezivanje />
                    </Tab>

                    <Tab eventKey="profile2" title="Uredi asistenta">
                        <FormaUrediAsistenta />
                    </Tab>


                </Tabs>
</div>
        )
    }
}

export default DodajAsistenta