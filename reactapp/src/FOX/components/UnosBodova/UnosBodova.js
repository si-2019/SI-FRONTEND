import React, { Component} from 'react';
import Col from 'react-bootstrap/Col';
import TabelaUnosa from '../TabelaUnosa/TabelaUnosa';
import Form from 'react-bootstrap/Form';
import ReturnButton from '../ReturnButton/ReturnButton';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nav from 'react-bootstrap/Nav';


class UnosBodova extends  Component {
state = {
        ispit: [
            {
             prvirok1: "I parcijalni",
             datum1:   "10.4.2019.",
             prvirok2:  "II parcijalni",
             datum2: "20.5.2019",
             drugirok1: "Popravni I parcijalni",
             datum3: "20.6.2019.",
             drugirok2:  "Popravni II parcijalni",
             datum4: "20.7.2019",
             trecirok: "Septembarski popravni",
             datum: "1.9.2019"
            }
        ]
}
render() {
    return(
        <div>
            <Header isPocetna={false}/>
          <Form>
              <Form.Row>
                  <Col md={{ span: 5, offset: 4}}>
                   </Col>
               </Form.Row>
               <Form.Row>
                    <Col md= {{ span: 5, offset : 4}}>
                    <TabelaUnosa/>
                    </Col>
               </Form.Row>
               <Form.Row>
                    <Col md={{ span: 8, offset: 6}}>
                    <Nav.Link href= "/fox/Ispiti"> Nazad na listu ispita </Nav.Link>
                    <Footer/>
                    </Col>
                    
                </Form.Row>
          </Form>
          </div>
        );
    }
}
export default UnosBodova;






