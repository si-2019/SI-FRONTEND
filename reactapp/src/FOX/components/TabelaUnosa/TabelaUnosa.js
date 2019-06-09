import React, {Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
// this.state.ispiti.map(ispit => {ispit.name} ) }>
class TabelaUnosa extends Component {

    constructor(props){
        super(props);
        this.state ={
            validated: false,
            greskaBaza: 0
        }
        this.ocjena=React.createRef();
    }
    handleSubmit(event) {
        const form = event.currentTarget;
        console.log(event.currentTarget.checkValidity());
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            //Poziv API-a
            //Promise
            /* 3. Get Ref Value here (or anywhere in the code!) */
           
            console.log(this.ocjena.current.value);
            let reqBody = {
                idStudent: 2, //pristup lokalnom storage-u
                idPredmet: 64,
                idAkademskaGodina: 11,
                ocjena: this.ocjena.current.value
            };
            if(this.ocjena.current.value>10 || this.ocjena.current.value<6)   this.setState({ greskaBaza: 1 });
            console.log(this.ocjena.current.value);
            axios.post('http://localhost:31906/api/fox/bodovi/', reqBody)
            .then((res) => {
                console.log(res);
                this.setState({greskaBaza: 2});
            })
            .catch((err)=> {
                console.log("Greska:" + err);
                this.setState({greskaBaza: 1});
            });
       }
        this.setState({ validated: true });
        event.preventDefault();
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
                                    <Button style= {{paddingLeft: '10px' }} > Pretrazi </Button>
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
                                <Button style= {{paddingLeft: '10px' }} > Unesi </Button>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col style={{textAlign: "center"}}>
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