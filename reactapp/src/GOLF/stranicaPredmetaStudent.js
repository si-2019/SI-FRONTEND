import React, { Component } from 'react'
import axios from 'axios'
class stranicaPredmetaStudent extends Component {
    constructor(props){
        super(props);
        this.state = {          
          idPredmeta: props.match.params.idPredmeta,
          naziv: "",
          text: "",
          idKorisnik: 0,
          idPredmet: 0
        };
    }    
    componentDidMount(){
        axios.get(`http://localhost:31907/r5/dajNaziv/${this.state.idPredmeta}`).then(res =>{
            this.setState({naziv:res.data.naziv})
        })

        var url = window.location.href;
        
        var idKorisnika = 0;
        var pom1 = 1;
        var i;
        for(i = url.length-1; i >= 0; i--) {
            if(url.charAt(i).includes('/')) break;
            idKorisnika = idKorisnika + parseInt(url.charAt(i)) * pom1;
            pom1 = pom1 * 10;
        }

        i = i-1;
        var idPredmeta = 0;
        var pom2 = 1;
        var j = 0;
        for(j = i; j>=0; j--) {
            if(url.charAt(j).includes('/')) break;
            idPredmeta = idPredmeta + parseInt(url.charAt(j)) * pom2;
            pom2 = pom2 * 10;
        }

        axios.get(`http://localhost:31907/r6/provjera/${idKorisnika}/${idPredmeta}`).then(res =>{
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
          })
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
            <div className="card border-info mb-3">
                <h1 className="card-header">  {this.state.naziv}</h1>
                <button onClick={this.klikNaDugme.bind(this)}>{this.state.text}</button>
            </div>
        )
    }
}

export default stranicaPredmetaStudent