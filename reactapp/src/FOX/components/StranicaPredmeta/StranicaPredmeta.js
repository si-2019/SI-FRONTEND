import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TabelaStudenti from '../TabelaStudenti/TabelaStudenti';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../ZajednickiCSS.css'

class StranicaPredmeta extends Component {
  render() {
    return (
      <div className="StranicaPredmeta" className="footerDno">
        <Header isPocetna={false}/>
        <Container fluid>
          <Row>
            <Col style={{textAlign: "center"}}>
            <br></br>
            <h4>Stranica predmeta</h4>
            <br></br>
            </Col> 
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <TabelaStudenti/>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    );

  }
}


export default StranicaPredmeta;
