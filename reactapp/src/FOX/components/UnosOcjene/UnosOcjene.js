import React, { Component} from 'react';
import Ocjena from '../Ocjena/Ocjena';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../ZajednickiCSS.css';


class UnosOcjene extends Component {
     render()
     {
         return (
            <div className="footerDno">
                <Container fluid style={{padding:"0", margin: "0"}}>
                    <Row>
                        <Col md="3">
                            <Header isPocetna={false}/>
                        </Col>
                        <Col>
                            <br/>
                            <Ocjena/>
                        </Col>
                    </Row>
                </Container>

                <br/>
                <br/>
                
                <Footer/>
            </div>        
         );
     }
}
export default UnosOcjene;