import React, { Component } from 'react'
import Forma from './Forma'
import FormaUpis from './FormaUpis'
import { Tab, Tabs, TabList} from 'react-tabs';

class DodajStudenta extends Component {
    render () {
        return (
            <div className="dodajStudenta">
                <h1>Student</h1>

                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <TabList>
                    <Tab eventKey="home" title="Home">
                        <Forma />
                    </Tab>
                    
                    <Tab eventKey="profile" title="Profile">
                        <FormaUpis />
                    </Tab>
                    </TabList>
                </Tabs>
                
            </div>
        )
    }
}

export default DodajStudenta