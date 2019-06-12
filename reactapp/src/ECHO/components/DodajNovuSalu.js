import React, { Component }from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import "./DodajNovuSalu.css";
class DodajNovuSalu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          naziv: "",
          kapacitet: 1,
          namjena:true
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNazivInput = this.handleNazivInput.bind(this);
        this.handleKapacitetInput = this.handleKapacitetInput.bind(this);

    }

    handleNazivInput(event) {
      this.setState({ naziv: event.target.value });
    }
    
    handleKapacitetInput(event) {
      this.setState({ kapacitet: event.target.value });
    }

    handleSubmit(event) {
       
          this.postSala();
          
      }
      postSala(event) {
        fetch("http://localhost:31905/si2019/echo/unesiSalu", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            
            kapacitet: this.state.kapacitet, 
            naziv: this.state.naziv,
           namjena: this.state.namjena
          })
        }).then(
         
        );
      }
    render() {

    return (

            <div class="card" id="kartica">
              <div class="card-body" id="karticaBody">
              <h4 class="card-title" >Unos sale</h4>
              <form>
              <Form.Row>
                                <Col style={{textAlign: "left"}}>
                                    <Form.Label> Naziv sale: </Form.Label>
                                    <Form.Control type="text" name="name" onChange={this.handleNazivInput}>
                                    </Form.Control>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col style={{textAlign: "left"}}>
                                    <Form.Label> Kapacitet: </Form.Label>
                                    <Form.Control min="1"
            max="200" type="number"  name="name" onChange={this.handleKapacitetInput}>
                                    </Form.Control>
                                </Col>
                            </Form.Row>
              <div className="form-group" id="check">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck1" ></input>
                  <label class="custom-control-label" for="customCheck1">Sala posjeduje računare</label>
                </div>
              </div>
              <div className="form-group">
              <button
                id="dugme1"
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                Unesi salu
              </button>
              </div>
          </form>
          </div>
            </div>

    );
 }
}
export default DodajNovuSalu;