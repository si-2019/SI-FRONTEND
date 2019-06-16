import React, { Component } from "react";
import axios from 'axios';
import ListaPredmeta from "../ListaPredmeta/ListaPredmeta";
import DrugiModuli from "../DrugiModuli/DrugiModuli";
import Ispiti from "../Ispiti/Ispiti";
import Zadace from "../Zadace/Zadace";
import KonacnaOcjena from "../KonacnaOcjena/KonacnaOcjena";
import Prisustvo from "../PrisustvoTabela/prisustvoTabela"
import "./AppDelta.css";

class Predmet extends Component {

  state = {predmet:{naziv : "Kardkodirani", idProfesora : 1, opis : "nista", etcs: 23 }, 
          profesor:"",
          idPredmeta: 100,
          idStudenta: 230};

  constructor(props) {
    super(props);
    this.state = {predmet:{naziv : "Kardkodirani", idProfesora : 1, opis : "nista", etcs: 23 }, 
    profesor:"",
    idPredmeta: 100,
    idStudenta: 230};
  }
    async componentDidMount(){
     
      const idPredmet=64;
      console.log(idPredmet);
      //console.log(this.props.idPredmeta);
      //const idPredmet=64;

      const {data} = await axios.get('http://si2019kilo.herokuapp.com/dohvatiPredmet/'+idPredmet); 
      this.setState({predmet:data});
      const idProf = this.state.predmet.idProfesora;
      const {data1} = await axios.get('http://si2019kilo.herokuapp.com/dohvatiProfesora/'+this.state.predmet.idProfesora); 
      this.setState({profesor:data1});
      
      
    }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <b>Predmet:</b> {this.state.predmet.naziv}
            </div>
            <div className="row">
              <b>Odgovorni nastavnik:</b> {this.state.predmet.idProfesora}
            </div>
            <div className="row">
              <b>Opis predmeta:</b>{this.state.predmet.opis}
            </div>
            <div className="row">
              <b>Broj ETCS bodova: </b>{this.state.predmet.ects} 
            </div>
            <br />
            <Zadace />
            <br />
            <Ispiti />
            <br />
            <Prisustvo idStudenta = {this.state.idStudenta} idPredmeta = {this.state.idPredmeta}/>
            <br/>
            <div className="row">
              <div className="col-3" />

              <div>
                <KonacnaOcjena />
              </div>
            </div>
            <div className="row">
              <div>
                <DrugiModuli />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Predmet;
