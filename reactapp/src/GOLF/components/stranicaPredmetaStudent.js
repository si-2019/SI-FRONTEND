import React, { Component } from 'react'
import axios from 'axios'
import OPredmetuStudent from './oPredmetuStudent'
import LiteraturaStudent from './literaturaStudent'
import ObjavaStudent from './objavaStudent'
import Sedmica from './sedmica'
import Dropdown from './dropdown'
import { Replay5Sharp } from '@material-ui/icons';

class stranicaPredmetaStudent extends Component {

    state = {
      idPredmeta: 0,
      idKorisnika: 0,
      dodano: 0,
      text: "",
      naziv: "",
      sedmice: [],
      oPredmetu: [],
      literatura: [],
      objave: [],
      niz: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
      dropdownAk: []
    }
  
    componentDidMount(){
      axios.get(`http://localhost:31907/r1/semestar/${this.props.match.params.idPredmeta}`).then(res4 =>{
        axios.get(`http://localhost:31907/r5/dajNaziv/${this.props.match.params.idPredmeta}`).then(res =>{
            const naziv = res.data.naziv;
            axios.get(`http://localhost:31907/r8/getAkademskaGodina/`).then(res =>{
              const dropdownAkademske = res.data.prethodne2AG
            axios.get(`http://localhost:31907/r1/sedmice/${res4.data.semestar}`).then(res3 => {
              const sedmicee = res3.data.sedmice
              axios.get(`http://localhost:31907/r6/provjera/${this.props.match.params.idKorisnika}/${this.props.match.params.idPredmeta}`).then(res2 =>{
                axios.get(`http://localhost:31907/r3/dajOPredmetu/${this.props.match.params.idPredmeta}`).then(res5 =>{
                  axios.get(`http://localhost:31907/r3/dajLiteraturu/${this.props.match.params.idPredmeta}`).then(res6 =>{
                      const odg = res2.data;
                      let tekst = "";
                      if(res2.data.veza == '1'){
                      tekst='Ukloni iz mojih predmeta'
                      }
                      else{
                        tekst='Dodaj u moje predmete'
                      }
                      this.setState({
                        naziv: naziv,
                        idPredmeta: this.props.match.params.idPredmeta,
                        idKorisnika:this.props.match.params.idKorisnika,
                        dodano: res2.data.veza,
                        text: tekst,
                        sedmice: sedmicee,
                        oPredmetu: res5.data.file,
                        literatura: res6.data.file,
                        dropdownAk: dropdownAkademske
                      })
                    })
                  })
                })
              })
            }) 
        })
      })
    }

    klikNaDugme = () => {
        if(this.state.dodano==0){
          axios.post(`http://localhost:31907/r1/dodajMojPredmet/${this.props.match.params.idKorisnika}/${this.props.match.params.idPredmeta}`).then(res => {
            if(res.data.message=='OK'){
              let tekst = 'Ukloni iz mojih predmeta'
              let dodano = 1
              this.setState({
                text:tekst,
                dodano:dodano
              })
            }
          })
        }
        else{
          axios.get(`http://localhost:31907/r6/obrisi/${this.props.match.params.idKorisnika}/${this.props.match.params.idPredmeta}`).then(res => {
            if(res.data.obrisano==1){
              let tekst = 'Dodaj u moje predmete'
              let dodano = 0
              this.setState({
                text:tekst,
                dodano:dodano
              })
            }
          })
        }
    }




    render(){
        return(
            <div key = "1"> 
              <div class='row' key = "2">
                <div class='col-9'>
                  <h1>  {this.state.naziv}</h1>
                </div>
                
                <div class='col-3'>
                  <button id='dd'type="button" class="btn btn-success" onClick={this.klikNaDugme}>{this.state.text}</button>
                </div>
              </div>
              <OPredmetuStudent predmet={this.state.oPredmetu} idpredmeta={this.state.idPredmeta}></OPredmetuStudent>
              <LiteraturaStudent nesto={this.state.literatura}></LiteraturaStudent>
              {this.state.sedmice.map(sedmica => <Sedmica naslov={sedmica.pocetakSedmice+' - '+sedmica.krajSedmice}  sedmice={sedmica.redniBrojSedmice} idPredmet={this.props.match.params.idPredmeta} student="student" key = "4"></Sedmica>)}
              
              {/* {this.state.objave.map(file => [<a href='#' class='card-link' key='6'>{file.naziv}</a>,<br key='7'></br>])} */}
            </div>
        )
    }
}

export default stranicaPredmetaStudent