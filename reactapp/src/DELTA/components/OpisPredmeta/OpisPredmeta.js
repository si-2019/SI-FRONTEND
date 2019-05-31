import React, { Component } from "react";
import DrugiModuli from "../DrugiModuli/DrugiModuli";
import Ispiti from "../Ispiti/Ispiti";
import Zadace from "../Zadace/Zadace";
import KonacnaOcjena from "../KonacnaOcjena/KonacnaOcjena";
import axios from 'axios';

class OpisPredmeta extends Component {
//    state = { postotakBodovaZadace: 33, postotakBodovaIspiti: 70 };

    constructor() {
        super();
      
        this.state = {
          nazivPredmeta:'',
          opisPredmeta: '',
          profesor: '',
          brojECTS: ''
        }
    
      }
    
      dohvatiProfesoraPrekoID(idProfesor){
        setTimeout(() => {
          axios.get("http://localhost:31904/dohvatiProfesora/"+idProfesor)
          .then(response => {
            const profesor = response.data;
                this.setState({
                  profesor: profesor.ime + ' ' + profesor.prezime
                })
          })
          . catch (error =>{
              console.log(error)
          })
        }, 100)
      }
    
      dohvatiSI(){
        setTimeout(() => {
          axios.get("http://localhost:31904/SI")
          .then(response => {
              const predmetSI = response.data;
              this.setState({
                nazivPredmeta: predmetSI.naziv,
                opisPredmeta: predmetSI.opis,
                brojECTS: predmetSI.ects
              })           
              this.dohvatiProfesoraPrekoID(predmetSI.idProfesor);
          })
        }, 100)
      }
    
     componentDidMount(){
      this.dohvatiSI();
    }


  render() {
    return (
        <div className="col-8">
        <div className="row">
          <b>Predmet:</b> {this.state.nazivPredmeta}
        </div>
        <div className="row">
          <b>Odgovorni nastavnik:</b> {this.state.profesor}
        </div>
        <div className="row">
          <b>Opis predmeta:</b>
          {this.state.opisPredmeta}
        </div>
        <div className="row">
          <b>Broj ETCS bodova: </b> {this.state.brojECTS}
        </div>

        <br />

        <Zadace />
        <br />
        <Ispiti />
        <br />
        <div className="row">
          <div className="col-4" />

          <div>
            <KonacnaOcjena />
          </div>
        </div>
        <div className="row">
          <div col-2>
            <DrugiModuli />
          </div>
        </div>
      </div>
    );
  }
}

export default OpisPredmeta;
