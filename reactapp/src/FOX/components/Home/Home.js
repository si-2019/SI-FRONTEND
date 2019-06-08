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
import NavbarFox from '../Navbar/Navbar';

const Home = () => {
    return (
        <div className="footerDno">
        <Container fluid style={{padding:"0", margin: "0"}}>
            <Row>
                <Col md="3">
                    <Header isPocetna={true}/>
                </Col>
                <Col>
                    <div className="Home">
                        
                        <div style={{textAlign: "center"}}>
                            <br/>
                            <PozdravnaPoruka/>
                            <DanDatum/>
                            <Predmet/>
                        </div>
                        
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer/>
        {/* <div className="Home">
            <Header isPocetna={true}/>
            <div style={{padding: "25px", textAlign: "center"}}>
                <PozdravnaPoruka/>
                <DanDatum/>
                <Predmet/>
            </div>
            <Footer className="footerDno"/>
        </div> */}

        </div>
    );
}

export default Home;
