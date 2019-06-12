import React, { Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

function Poruka(props) {
    const greska = props.greska;
    const student= props.student;
    if (greska==1) {
        return <Alert variant='danger'>
            <Alert.Heading>Nespješan unos!</Alert.Heading>
            <p>Došlo je do greške sa bazom</p>
        </Alert>
    }
    if (greska===2) {
        return <Alert variant='success'>
            <Alert.Heading>Uspješno uneseni bodovi!</Alert.Heading>
        </Alert>
    }
    return ""
}
class TabelaUnosa extends Component {
    constructor(props){
        super(props);
        this.state ={
            validated: false,
            greskaBaza: 0,
            student: undefined
        }
        this.ocjena=React.createRef();
        this.indeks=React.createRef();
        this.bodovi=React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("Clicked");
        //Poziv apija /fox/getStudentInfo/:id
        axios.get("http://localhost:31906/fox/getStudentInfo/1").then((res)=> {
            this.setState({ student: res.data });
        })
    }
    handle() {
        console.log("Clicked");
        //Poziv apija /fox/getStudentInfo/:id
        axios.get("http://localhost:31906/api/fox/ispiti/:idPredmet").then((res)=> {
            this.setState({ student: res.data });
        })
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
           
            console.log(this.bodovi.current.value);
            let reqBody = {
               /* idKorisnika: 3,
                bodovi: this.bodovi.current.value,
                idIspita: 4*/
            };
          //  if(this.ocjena.current.value>10 || this.ocjena.current.value<6)   this.setState({ greskaBaza: 1 });
            console.log(this.bodovi.current.value);
            axios.post('http://localhost:31906/api/fox/ispiti', reqBody)
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
        const {validated} = this.state;
        const {greskaBaza}= this.state;
        const student = this.state.student;
        let rezPretrage;

        if (student!=undefined) {
            rezPretrage = <div>
                <Col style={{textAlign: "center"}}>
                    <div class="alert alert-dismissible alert-success">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        Student sa indeksom {this.indeks.current.value} je pronađen! <br></br>
                        {student.ime + " " + student.prezime}
                    </div>
                </Col>
                
            </div>
        }
        return(
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title text-center" >Unos bodova ispita</h4>
                    <h6 class="card-subtitle mb-2 text-muted text-center">Omogućava pretraživanje studenata i unos bodova.</h6>
                    <br/>
                <div>
                        <Form>
                            <Form.Row>
                                <Col></Col>
                                <Form.Group as={Col} sm={{span: 4}}>
                                    <select class="custom-select">
                                       
                                        <option selected="">Otvori za odabir ispita</option>
                                        <option value="1">I parcijalni, 20.4.2019.</option>
                                        <option value="2">II parcijalni, 20.6.2019.</option>
                                        <option value="3">Popravni I parcijalni, 1.7.2019.</option>
                                        <option value="3">Popravni II parcijalni, 1.7.2019.</option>
                                        <option value="3">Integralni ispit 1.9.2019.</option>
                                    </select>
                                </Form.Group>
                                <Col></Col>
                            </Form.Row>

                            <Form.Row>
                                <Col style={{textAlign: "left"}}>
                                    <Form.Label> Index: </Form.Label>
                                    <Form.Control  ref={ this.indeks } required type="text" name="name">
                                    </Form.Control>
                                    <Form.Control.Feedback> Validan indeks </Form.Control.Feedback> 
                                   <Form.Control.Feedback type= "invalid"> Indeks nije validan </Form.Control.Feedback> 
                                </Col>
                            </Form.Row>

                           
                            <Form.Row style={{paddingTop: "10px"}}>
                                <Col></Col>
                                <Col md="auto" style={{textAlign: "right"}}>
                                    <Button onClick={this.handleClick}> Pretrazi </Button>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col style={{textAlign: "center"}}>
                                {rezPretrage}
                                </Col>
                            </Form.Row>

                            <hr/>

                            <Form.Row>
                                <Col style={{textAlign: "left"}}>
                                    <Form.Label> Bodovi: </Form.Label>
                                    <Form.Control  ref={ this.bodovi } required type="text" name="name">
                                    </Form.Control>
                                    <Form.Control.Feedback> Validni bodovi </Form.Control.Feedback> 
                                   <Form.Control.Feedback type= "invalid"> Bodovi nisu validni </Form.Control.Feedback> 
                                </Col>
                            </Form.Row>

                            <Form.Row style={{paddingTop: "10px"}}>
                                <Col></Col>
                                <Col md="auto" style={{textAlign: "right"}}>
                                    <Button variant="primary" type="submit" > Unesi </Button>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Col style={{textAlign: "center"}}>
                                <Poruka greska={this.state.greskaBaza} />
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