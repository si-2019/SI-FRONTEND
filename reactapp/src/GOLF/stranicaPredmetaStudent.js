import React, { Component } from 'react'
import axios from 'axios'
class stranicaPredmetaStudent extends Component {

    state = {
      idPredmeta: 0,
      idKorisnika: 0,
      dodano: 0,
      text: "",
      naziv: ""
    }
  
    componentDidMount(){
        axios.get(`http://localhost:31907/r5/dajNaziv/${this.props.match.params.idPredmeta}`).then(res =>{
            console.log(res)
            const naziv = res.data.naziv;
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
                  text: tekst
                })
            })
        })

        /*axios.get(`http://localhost:31907/r6/provjera/${this.props.match.params.idKorisnik}/${this.props.match.params.id}`).then(res =>{
            const odgovor = res.data;

            if(odgovor.veza == 1){
                var pom1 = "Ukloni iz mojih predmeta";
                this.setState({
                  text: pom1
                })
              }
              else if(odgovor.veza == 0) {
                var pom2 = "Dodaj u moje predmete";
                this.setState({
                  text: pom2
                })
              }
           
          })

          this.setState({
            idKorisnik: idKorisnika,
            idPredmet: idPredmeta
          })*/
    }

    klikNaDugme() {
        if (this.state.text.includes("Dodaj u moje predmete")) {
            //poziva se funkcija dodaj
        }
        else if (this.state.text.includes("Ukloni iz mojih predmeta")) {
            axios.get(`http://localhost:31907/r6/obrisi/${this.state.idKorisnika}/${this.state.idPredmeta}`).then(res =>{
            const odgovor = res.data;

            console.log(odgovor);
             if(odgovor.obrisano == 1){
               var pom1 = "Dodaj u moje predmete";
               this.setState({
                 text: pom1
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
                  <button id='dd'type="button" class="btn btn-success">{this.state.text}</button>
                </div>
              </div>
            </div>
        )
    }
}

export default stranicaPredmetaStudent