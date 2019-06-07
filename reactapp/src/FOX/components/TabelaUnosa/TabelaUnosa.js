import React, {Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../ZajednickiCSS.css';
import Container from 'react-bootstrap/Container';

class TabelaUnosa extends Component {

    constructor(props) {
        super();
        this.state = {
            greskaVis: "hidden",
            greska: "hidden"
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleCli = this.handleCli.bind(this);
    }

    handleClick() {
        if (this.state.temaId == null) {
           this.setState({
               greskaVis: "visible",
           })
        }
        else if (this.state.temaId != null) {
        }
    }
    
    handleCli() {
        if (this.state.temaId == null) {
           this.setState({
               greska: "visible",
           })
        }
        else if (this.state.temaId != null) {
        }
    }

  
    async componentDidMount(){
       //const {data} = await axios.get('http://localhost:31900/api/fox/bodovi')
       const {data} = " ispit, datum";
        this.setState({response:data})
      }
      renderOptions = () => {
        if(!this.state.response) return
        return this.state.response.map(element => 
          <option>{element.naziv}</option>
        );
      }
      handleChange= (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }


    render() {
        return(
                <Container fluid>
                    <Row>
                        <Col sm={{span: 4}} style={{textAlign: "left"}}>
                            <Card>
                                <Card.Body>
                                    <Card.Title style={{ display: "inline-block", fontSize: '30px', textAlign: "center"}} >Unos bodova ispita </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">U ovoj formi možete unijeti bodove pojedinačnom studentu</Card.Subtitle>
                                    <Form.Group as={Col} sm={{span: 6, offset: 2}}>
                                    <select class="custom-select">
                                        <option selected="">Otvori za odabir ispita</option>
                                        <option value="1">I parcijalni, 20.4.2019.</option>
                                        <option value="2">II parcijalni, 20.6.2019.</option>
                                        <option value="3">Popravni I parcijalni, 1.7.2019.</option>
                                        <option value="3">Popravni II parcijalni, 1.7.2019.</option>
                                        <option value="3">Integralni ispit 1.9.2019.</option>
                                    </select>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId = "index">
                                        <Col lg="6" style={{textAlign: "left"}} > 
                                        <Form.Label>Index:</Form.Label>
                                            <Form.Control 
                                                required 
                                                type="text" 
                                                placeholder="Unesi index"
                                            />
                                        <br/>
                                        <Button variant="primary" type="submit" style ={{padding:'10px'}} onClick={this.handleClick} >Pretrazi</Button> 
                                        </Col>   
                                    </Form.Group>
                                    <Form.Row>
                                        <Col style={{textAlign: "center"}}>
                                            <label style={{ visibility: this.state.greskaVis}}>
                                                Pero Perić, 12345
                                            </label> 
                                        </Col>
                                    </Form.Row>
                                    <Form.Group as={Row} controlId = "formNoviOpis">
                                        <Col style={{textAlign: "left"}}>
                                                    <Form.Label>Bodovi:</Form.Label>
                                                    <Form.Control 
                                                        required 
                                                        type="text" 
                                                        placeholder="Unesi bodove"
                                                    />
                                                    <br/>
                                                    <Button variant="primary" type="submit" onClick={this.handleCli}>Unesi </Button> 
                                        </Col>
                                        <Col></Col>
                                    </Form.Group>
                                    <Form.Row>
                                        <Col style={{textAlign: "center"}}>
                                            <br/>
                                            <label style={{ visibility: this.state.greska}}>
                                                Uspješan unos
                                            </label>
                                            <br/>
                                            <label style={{ visibility: this.state.greska}}>
                                                Pero Perić, 12345
                                            </label>
                                            <br/>
                                            <label style={{ visibility: this.state.greska}}>
                                                20
                                            </label>
                                            <br/>
                                        </Col>
                                    </Form.Row>
                                </Card.Body>  
                            </Card>
                        </Col>
                    </Row>
            </Container>
        );
    }
}
export default TabelaUnosa;