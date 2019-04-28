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
                    <Nav className="mr-auto">
                         <Nav.Link href="fox/StranicaPredmeta"><li>Grupa1</li></Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                         <Nav.Link href="fox/StranicaPredmeta"><li>Grupa2</li></Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                         <Nav.Link href="fox/StranicaPredmeta"><li>Grupa3</li></Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                         <Nav.Link href="fox/StranicaPredmeta"><li>Grupa4</li></Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                         <Nav.Link href="fox/StranicaPredmeta"><li>Grupa5</li></Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                         <Nav.Link href="fox/StranicaPredmeta"><li>Grupa6</li></Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                         <Nav.Link href="fox/StranicaPredmeta"><li>Grupa7</li></Nav.Link>
                    </Nav>

                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Predmet;