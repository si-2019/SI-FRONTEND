import React, { Component} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Tabela from './Tabela';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../ZajednickiCSS.css';

class Ispiti extends  Component {
  constructor(props){
    super(props);
    this.state = {
      test: '',
    }
  }
render() {
    return(
      <div className="footerDno">
        <Container fluid style={{padding:"0", margin: "0"}}>
          <Row>
            <Col md="3">
              <Header/>
            </Col>
            <Col>
              <br></br>
              <h4>Pregled ispita</h4>
              <br></br>
              <Tabela/>
            </Col>
          </Row>
        </Container>
      
      <Footer/>
      </div>
        );
    }
}

export default Ispiti;






