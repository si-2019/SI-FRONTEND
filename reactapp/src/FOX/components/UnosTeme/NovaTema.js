import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class NovaTema extends Component {
  render() {
    return (
      <div className="TemeZavrsnih">
        <Container fluid>
          <Row>
            <Col>
              <Header isPocetna={false}/>
            </Col>
          </Row>
          <Row>
            <Col>
            <br></br>
            <h4 className="justify-content-center">Dodavanje nove teme</h4>
            <br></br>
            </Col> 
          </Row>
          <Row className="justify-content-center">
          {/*Dodaj formu*/}
          </Row>
          
          
          <Row>
            <Footer/>
          </Row>
        </Container>
        
      </div>

    );

  }
}


export default NovaTema;
