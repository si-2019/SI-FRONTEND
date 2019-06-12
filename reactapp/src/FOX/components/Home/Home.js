import React from 'react';
import Header from '../Header/Header';
import DanDatum from '../DanDatum/DanDatum';
import Predmet from '../Predmet/Predmet';
import Footer from '../Footer/Footer';
import PozdravnaPoruka from '../PocetnaStranica/PozdravnaPoruka';
import '../../ZajednickiCSS.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <div className="footerDno" style={{paddingBottom: "50px"}}>
            <Container fluid style={{padding:"0", margin: "0"}}>
                <Row noGutters>
                    <Col md="3">
                        <Header isPocetna={true}/>
                    </Col>
                    <Col style={{textAlign: "center"}}>
                        <div className="Home" style={{padding: "15px"}}>
                            <PozdravnaPoruka/>
                            <DanDatum/>
                            <Predmet/>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default Home;
