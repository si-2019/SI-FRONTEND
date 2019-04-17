import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';

class Predmet extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <div>
                   
                    <Nav className="mr-auto">
                         <Nav.Link href="predmet"> <h3>PREDMET</h3></Nav.Link>
                    </Nav>
                </div>
                <div>
                    <ul>
                        <li>Grupa1</li>
                        <li>Grupa2</li>
                        <li>Grupa3</li>
                        <li>Grupa4</li>
                        <li>Grupa5</li>
                        <li>Grupa6</li>

                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Predmet;