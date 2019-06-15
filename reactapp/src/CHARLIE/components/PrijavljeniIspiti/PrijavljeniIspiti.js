import React from "react";
import Notifikacija from '../SharedComponents/Notifikacija'
import { Link } from "react-router-dom";
import axios from 'axios'
import "../SharedComponents/tabeleCharlie.css";
import { FormGroup, Table } from "reactstrap";
import Modal2 from "../SharedComponents/Modal2";

class PrijavljeniIspiti extends React.Component {
  constructor () {
    super();

    this.state = {
      ispiti: [
        {
          idIspit: '',
          idPredmet: '',
          tipIspita: '',
          termin: ''
        }
      ],

      notifikacija: false, notifikacijaPoruka:'', severity:''
    };
}
 // state = { notifikacija: false, notifikacijaPoruka:'', severity:'' };

  renderNotification = () => {
    const {severity, notifikacija} = this.state
    let background
    if(severity === 'high')
      background = 'red';
    else 
      background = severity === 'medium' ? 'orange' : 'green'
    return notifikacija && (<div>
      <Notifikacija 
        poruka={this.state.notifikacijaPoruka}
        background={background} 
        onClick={() => this.setState({
          notifikacija: false,
          notifikacijaPoruka: '',
          background:''
        })} 
      />
    </div>)
  }

  odjavaSaIspita = () => {
    // await axios.delete(`/prijava/${el.idPredmet}/:studentID`)
    // Dobaviti status iz axiosa
    const status = 201;
    status === 200 && this.setState({
      notifikacija:true, 
      notifikacijaPoruka:"Uspjesna odjava sa ispita"
    })
    status !== 200 && this.setState({
      notifikacija:true, 
      notifikacijaPoruka:"Neuspjesna odjava sa ispita",
      severity: 'high'
    })
  }

  async componentDidMount() {
    const studentID = 250;
    const ispiti = await axios.get(`http://si2019charlie.herokuapp.com/prijavljeniIspiti/${studentID}`);
    this.setState({ ispiti: ispiti.data });
  } 

  renderPrijavljeniIspiti = () => {
    return this.state.ispiti.map(el => (
      <tr>
        <td class="tabtip1">{el.idPredmet}</td>
        <td class="tabtip1">{el.tipIspita}</td>
        <td class="tabtip1">{new Date(el.termin).toUTCString()}</td>
        <td  class="tabtip1"></td>
        <button
            type="button"
            className="btn btn-primary"            
        >
            Odjavi
          </button>
      </tr>
    ));
  };

  handleSubmit = async() => {
    try {
      const {status}=await axios.delete(`http://si2019charlie.herokuapp.com/prijava/${ispitID}/${predmetID}`)  
    } catch (error) {
      console.log(error.message)
    }
    
  }

  render() {
    return (
      <div class="container-fluid" style={{marginTop: "30px"}}>
      <h2 style={{marginBottom: "30px"}}>Prijavljeni ispiti</h2>
        {this.renderNotification()}

        <div>
      <FormGroup className="px-4" style={{marginTop: "20px"}}>
          <Table className="table table-bordered text-center bg-active border-solid">
            <thead>
              <tr className="bg-primary text-light">
                <th class="tabtip">Predmet</th>
                <th class="tabtip">Tip ispita</th>
                <th class="tabtip">Datum ispita</th>
                <th class="tabtip" />
              </tr>
            </thead>
            <tbody>{this.renderPrijavljeniIspiti()}</tbody>
          </Table>
          </FormGroup> 
 
 
 

        <br />

        </div>
        
        <button
            type="button"
            className="btn btn-primary"            
            
        >
            Nazad
          </button>
          <Modal2
            saveState={this.saveState}
            show={this.state.modalShow}
            naslovModala="Jeste li sigurni da želite odjaviti ispit?"
            obrisiIspit={this.state}
            potvrdiBtnCharlie="Potvrdi"
            onConfirm={
              this.obrisiIspit
            }
            onClose={this.toggleModal}
            handleSubmit={this.handleSubmit}
          />
      </div>
    );
  }
}


export default PrijavljeniIspiti;

