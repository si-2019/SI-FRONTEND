import React, {Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
// this.state.ispiti.map(ispit => {ispit.name} ) }>
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
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title text-center" >Unos bodova ispita</h4>
                    <h6 class="card-subtitle mb-2 text-muted text-center">Omogućava pretraživanje studenata i unos bodova.</h6>
                    <br/>
                    <div>
                        <Form>

                            <Form.Row>
                                <Form.Group as={Col} sm={{span: 4, offset: 4}}>
                                    <Form.Control
                                        as="select">
                                        <option>I parcijalni, 20.4.2019.</option>
                                        <option> II parcijalni, 20.6.2019.</option>
                                        <option>Popravni I parcijalni, 1.7.2019.</option>
                                        <option>Popravni II parcijalni, 1.7.2019.</option>
                                        <option>Integralni ispit 1.9.2019.</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>

                            <hr/>

                            <Form.Row>
                                <Col style={{textAlign: "right"}}>
                                    <Form.Label> Index: </Form.Label>
                                </Col>
                                <Col lg="2">
                                    <Form.Control type="text" name="name">
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Button style= {{paddingLeft: '10px' }} onClick={this.handleClick}> Pretrazi </Button>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col style={{textAlign: "center"}}>
                                    <br/>
                                    <label style={{ visibility: this.state.greskaVis}}>
                                        Pero Perić, 12345
                                    </label> 
                                </Col>
                            </Form.Row>

                            <hr/>

                            <Form.Row>
                                <Col style={{textAlign: "right"}}>
                                    <Form.Label> Bodovi: </Form.Label>
                                </Col>
                                <Col lg="2">
                                    <Form.Control type="text" name="name">
                                    </Form.Control>
                                </Col>
                                <Col>
                                <Button style= {{paddingLeft: '10px' }} onClick={this.handleCli}> Unesi </Button>
                                </Col>
                            </Form.Row>

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
                    </Form>
                    </div>    
                </div>
            </div>
            
        );
    }
}
export default TabelaUnosa;