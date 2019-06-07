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
                        <Col style={{textAlign: "left"}}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Unos bodova ispita </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">U ovoj formi možete unijeti bodove pojedinačnom studentu</Card.Subtitle>
                                    <Form.Group as={Row} controlId = "formNovi">
                                                <Col lg="2"style={{textAlign: "left"}}>
                                                    <Form.Label>Index:</Form.Label>
                                                    <Form.Control 
                                                         required 
                                                        type="text" 
                                                        placeholder="Unesi bodove"
                                                    />
                                                    <Button variant="primary" type="submit">Pretrazi </Button> 
                                                </Col>
                                                <Col></Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId = "formNoviOpis">
                                                <Col lg="2"style={{textAlign: "left"}}>
                                                    <Form.Label>Bodovi:</Form.Label>
                                                    <Form.Control 
                                                         required 
                                                        type="text" 
                                                        placeholder="Unesi bodove"
                                                    />
                                                    <Button variant="primary" type="submit">Unesi </Button> 
                                                </Col>
                                                <Col></Col>
                                    </Form.Group>
                                </Card.Body>  
                            </Card>
                        </Col>
                    </Row>
                
            </Container>
        

        );
    }
}
export default TabelaUnosa;