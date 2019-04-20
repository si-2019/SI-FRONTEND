import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';

class Predmet extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <div>
                   
                    <Nav className="mr-auto">
                         <Nav.Link href="fox/StranicaPredmeta"> <h3>PREDMET</h3></Nav.Link>
                    </Nav>
                </div>
                <div>
                    <ul>
                    <li>Grupa1</li>
                    <Nav className="mr-auto">
                         <Nav.Link href="predmet">Grupa1</Nav.Link>
                    </Nav>
                        <li>Grupa2</li>
                    <Nav className="mr-auto">
                         <Nav.Link href="predmet">Grupa2</Nav.Link>
                    </Nav>
                        <li>Grupa3</li>
                    <Nav className="mr-auto">
                         <Nav.Link href="predmet">Grupa3</Nav.Link>
                    </Nav>
                        <li>Grupa4</li>
                    <Nav className="mr-auto">
                         <Nav.Link href="predmet">Grupa4</Nav.Link>
                    </Nav>
                        <li>Grupa5</li>
                    <Nav className="mr-auto">
                         <Nav.Link href="predmet">Grupa5</Nav.Link>
                    </Nav>
                        <li>Grupa6</li>
                    <Nav className="mr-auto">
                         <Nav.Link href="predmet">Grupa6</Nav.Link>
                    </Nav>
                        <li>Grupa7</li>a
                    <Nav className="mr-auto">
                         <Nav.Link href="predmet">Grupa7</Nav.Link>
                    </Nav>

                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Predmet;