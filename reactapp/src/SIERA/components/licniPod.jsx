
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

class LicniPod extends Component {
    state = { 
        ime: "DamirMasina",
        prezime: "Nekic",
        datumRodjenja: "30.07.1997",
        mjestoRodjenja: "Sarajevo",
        Index: "17807",
        imePrezimeOca: "Nekila",
        imePrezimeMajke: "Nekic",
        Drzavljanstvo: "Bih",
        StudentID: 1
     }
     componentDidMount() {
        axios
          .get(
            `http://localhost:31918/studenti/` +
              this.state.StudentID
          )
          .then(res => {
            const ime = res.data.map(obj => obj.ime);
            this.setState({ ime: ime });
            const prezime = res.data.map(obj => obj.prezime);
            this.setState({ prezime: prezime });
            const datumRodjenja = res.data.map(obj => obj.datumRodjenja);
            this.setState({ datumRodjenja: datumRodjenja });
            const mjestoRodjenja = res.data.map(obj => obj.mjestoRodjenja);
            this.setState({mjestoRodjenja:    mjestoRodjenja });

            //const mjestoRodjenja = res.data.map(obj => obj.JMBG);
            //this.setState({   JMBG:   mjestoRodjenja });

            const index = res.data.map(obj => obj.indeks);
            this.setState({Index: index });

            const imePrezimeOca = res.data.map(obj => obj.imePrezimeOca);
            this.setState({imePrezimeOca: imePrezimeOca });

            const imePrezimeMajke = res.data.map(obj => obj.imePrezimeMajke);
            this.setState({imePrezimeMajke: imePrezimeMajke });

            const drz = res.data.map(obj => obj.drzavljanstvo);
            this.setState({Drzavljanstvo: drz });
          });
      }
    
    render() { 
        return ( 
            <Form style={{width:"400px", border:'2px solid #A9A9A9', height:"650px" }}>
            <Form.Group >
                <Form.Label style={{fontWeight: "bold"}}>Lični podaci:   </Form.Label>
            </Form.Group>
            <Form.Group >
                <Form.Label style={{fontWeight: "bold"}}>Ime i prezime:   </Form.Label>
            </Form.Group>
            <Form.Group >
            <Form.Label>{this.state.ime} {this.state.prezime}</Form.Label>
            </Form.Group>            <Form.Group >
            <Form.Label style={{fontWeight: "bold"}}>Datum i mjesto rođenja:   </Form.Label>
            </Form.Group>
            <Form.Group >
            <Form.Label>{this.state.datumRodjenja} {this.state.mjestoRodjenja}</Form.Label>
            </Form.Group>
           
            <Form.Group >
            <Form.Label style={{fontWeight: "bold"}}>Index:   </Form.Label>
            </Form.Group>
            <Form.Group >
            <Form.Label>{this.state.Index}</Form.Label>
            </Form.Group>
            <Form.Group >
            <Form.Label style={{fontWeight: "bold"}}>Ime i prezime oca:   </Form.Label>
            </Form.Group>
            <Form.Group >
            <Form.Label>{this.state.imePrezimeOca}</Form.Label> 
            </Form.Group>
            <Form.Group >
            <Form.Label style={{fontWeight: "bold"}}>Ime i prezime majke:   </Form.Label>
            </Form.Group>
            <Form.Group >
            <Form.Label>{this.state.imePrezimeMajke}</Form.Label> 
            </Form.Group>
            <Form.Group >
            <Form.Label style={{fontWeight: "bold"}}>Državljanstvo:   </Form.Label>    
            </Form.Group>
            <Form.Group >
                <Form.Label>{this.state.Drzavljanstvo}</Form.Label>
            </Form.Group>
        </Form>
        );
    }
}
 

export default LicniPod;
  