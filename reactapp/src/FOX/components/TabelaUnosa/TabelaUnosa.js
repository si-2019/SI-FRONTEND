import React, {Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";

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
        <Form>
                <div class="row" style={{ margin: "0px" }}>
                    <div class="col"></div>
                    <div class="col" style={{ textAlign: "center", minWidth: "400px" }}>
                        <div class="card" style={{ display: "inline-block" }}>
                            <div class="card-body">
                                <h3 class="card-title">Unos bodova za ispit</h3>
                                <h6 class="card-subtitle mb-2 text-muted">Ovdje možete vidjeti sve profesore koje možete odabrati za svog mentora, kao i teme koje nude.</h6>
                                <div style={{ textAlign: "left" }}>
                                    <label class="col-form-label col-form-label-lg" for="inputLarge">Index</label>
                                </div>
                                <button 
                                    type="button" 
                                    className="btn btn-primary left-buttons"
                                    onClick={this.handleClick}>Pretrazi
                                </button>
                                <Form.Row>
                                    Col style={{textAlign: "center"}}>
                                        <br/>
                                        <label style={{ visibility: this.state.greskaVis}}>
                                            Pero Perić, 12345
                                        </label> 
                                    </Col>
                                </Form.Row>
                                <div style={{ textAlign: "left" }}>
                                    <label class="col-form-label col-form-label-lg" for="inputLarge">Bodovi</label>
                                </div>
                               
                                <div style={{ visibility: this.state.greskaVis}}><p class="text-danger">Morate odabrati temu!</p></div>

                                <button type="button" class="btn btn-primary btn-lg btn-block" onClick={this.handleClick}>Prijavi završni</button>

                            </div>
                        </div>
                    </div>
                    <div class="col"></div>
                </div>

              
             
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
        );
    }
}
export default TabelaUnosa;