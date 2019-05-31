import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TabelaStudenti from '../TabelaStudenti/TabelaStudenti';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../ZajednickiCSS.css';

class StranicaPredmeta extends Component {
  state = {
    predmet: null,
    grupaId: null
  }
  async componentDidMount(){
    const predmetId = this.props.match.params.predmetId;
    const params = new URLSearchParams(this.props.location.search);
    const grupaId = (params.get('grupaId'))
    console.log(predmetId, grupaId)
    this.setState({
      predmet:predmetId,
      grupaId:grupaId
    })
  }
  render() {
    const params = new URLSearchParams(this.props.location.search);
    let predmetIgrupa = (params.get('predmetId'));
    var res = predmetIgrupa.split("?");
    console.log(predmetIgrupa, res);
    const predmet = res[0];
    const grupa = res[1];
    return (
      <div className="StranicaPredmeta" className="footerDno">
        <Header isPocetna={false}/>
        <Container fluid>
          <Row>
            <Col>
            <br></br>
            <h1>{predmet && predmet}</h1>
            <h2>{grupa && grupa}</h2>
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
