import React, { Component } from 'react'
import axios from 'axios'
import OPredmetuStudent from './oPredmetuStudent'
import LiteraturaStudent from './literaturaStudent'
import ObjavaStudent from './objavaStudent'
import Sedmica from './sedmica'

class stranicaPredmetaStudent extends Component {

    state = {
      idPredmeta: 0,
      idKorisnika: 0,
      dodano: 0,
      text: "",
      naziv: "",
      sedmice: []
    }
  
    componentDidMount(){
      axios.get(`http://localhost:31907/r1/semestar/${this.props.match.params.idPredmeta}`).then(res4 =>{
        axios.get(`http://localhost:31907/r5/dajNaziv/${this.props.match.params.idPredmeta}`).then(res =>{
            const naziv = res.data.naziv;
            axios.get(`http://localhost:31907/r1/sedmice/${res4.data.semestar}`).then(res3 => {
              const sedmicee = res3.data.sedmice
              axios.get(`http://localhost:31907/r6/provjera/${this.props.match.params.idKorisnika}/${this.props.match.params.idPredmeta}`).then(res2 =>{
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
                  sedmice: sedmicee
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
            <div>
              <div class='row'>
                <div class='col-9'>
                  <h1>  {this.state.naziv}</h1>
                </div>
                <div class='col-3'>
                  <button id='dd'type="button" class="btn btn-success" onClick={this.klikNaDugme}>{this.state.text}</button>
                </div>
              </div>
              <OPredmetuStudent opis='sdsf' fileovi={['prvi.pdf','drugi.pdf','treci.pdf']}></OPredmetuStudent>
              <LiteraturaStudent/>
              {this.state.sedmice.map(sedmica => <Sedmica naslov={sedmica.pocetakSedmice+' - '+sedmica.krajSedmice}></Sedmica>)}

            </div>
        )
    }
}

export default stranicaPredmetaStudent