import React, {Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Button';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios';
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
            <Form>
                <Form.Row>
                     <Form.Label style={{fontWeight: "bold", paddingLeft: '180px', fontSize: 25, marginTop:"30px", marginBottom: "30px"}}> Unos bodova za ispit  </Form.Label>  
                </Form.Row>
                <Form.Row>
                    <Col md= {{ span: 3, offset: 4}}>
                    <select style={{placeholder: "Odaberite ispit" }}>
                        <option>I parcijalni, 20.4.2019.</option>
                        <option> II parcijalni, 20.6.2019.</option>
                        <option>Popravni I parcijalni, 1.7.2019.</option>
                        <option>Popravni II parcijalni, 1.7.2019.</option>
                        <option>Integralni ispit 1.9.2019.</option>
                    </select>
                    </Col>
                </Form.Row>
            <Form style={{ border:'2px solid', height:"300px",marginTop:"30px", paddingLeft: '80px'}}>
                <Form.Row style={{padding: '30px'}}>
                    <Form.Label> Index: </Form.Label>
                     <input type="text" name="name" />

                    <Button style= {{paddingLeft: '10px', }} onClick={this.handleClick}> Pretrazi </Button>  
               
                </Form.Row>
                
               <Form.Row style={{paddingLeft: '100px'}}>
                <label style={{ visibility: this.state.greskaVis}}>
                    Pero Perić, 12345
                </label> 

                </Form.Row>
                <Form.Row style={{padding: '20px' }}>
                <Form.Label> Bodovi: </Form.Label>
                <input type= "text" name="name" />
                <Button onClick={this.handleCli}> Unesi </Button>
                </Form.Row>
                <Form.Row style={{paddingLeft: '80px'}}>
                    <label style={{ visibility: this.state.greska}}>
                        Uspješan unos
                    </label>
                </Form.Row>
                <Form.Row style={{paddingLeft: '80px'}}>
                    <label style={{ visibility: this.state.greska}}>
                        Pero Perić, 12345
                    </label>
                </Form.Row>
                <Form.Row style={{paddingLeft: '80px'}}>
                    <label style={{ visibility: this.state.greska}}>
                        20
                    </label>
                </Form.Row>
            
            </Form>
           </Form>
        );
    }
}
export default TabelaUnosa;