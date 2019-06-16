import React, { Component } from 'react'
import axios from 'axios'

class FileUredjivanje extends Component {

  constructor(props){
    super(props)
    this.state = {
      klasa: "btn btn-danger btn-sm",
      tekst: "Obriši",
      obrisano: false,
      kliknuto: false,
      brisanjeUspjelo: true
  }
  }

  sakrij() {
    this.setState({
      brisanjeUspjelo: !this.state.brisanjeUspjelo
    })
  }

    obrisi() {
        axios.delete(`http://si2019golf.herokuapp.com/r1/obrisiFil/${this.props.id}`).then(res => {
            if (res.data.loginError) {
                window.location.href = window.location.origin + '/romeo/login'
            }
            else {
              if(res.data.error || res.status==404){
                this.setState({
                  brisanjeUspjelo: true
                })
              }
              else{
                if (!this.state.obrisano) {
                    this.setState({
                        tekst: "Obrisano",
                        klasa: "btn btn-danger disabled btn-sm",
                        obrisano: true,
                        brisanjeUspjelo: true
                    })
                }
              }
            }
        }).catch(function(err){
          console.log(err)
        })
    }

    skiniFile(naziv, id){
        axios({
          url: `http://si2019golf.herokuapp.com/r1/dajFile?id=${id}`,
          method: 'GET',
          responseType: 'stream'
        }).then((res) => {
          if(res.data.loginError) {
            window.location.href = window.location.origin + '/romeo/login'
          }
          else{
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', naziv);
            document.body.appendChild(link);
            link.click();
          }
        });
      }

    render() {
        return (
            <div>
                <a href="#" onClick={() => this.skiniFile(this.props.naziv, this.props.id)}  class='card-link'>{this.props.naziv} </a> <button type="button" class={this.state.klasa} onClick={() => this.obrisi()}>{this.state.tekst}</button>
                {!this.state.brisanjeUspjelo && <div class="alert alert-dismissible alert-danger golfw">
          <button type="button" class="close" onClick={() => this.sakrij()} data-dismiss="alert">&times;</button>
          Brisanje datoteke {this.props.naziv} nije uspjelo!
        </div>}
            </div>
        )
    }
}

export default FileUredjivanje
