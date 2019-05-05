import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class KreirajIspit extends Component{
  state = {response:[], brojStudenata:0, validationError: false, validationErrorMessage: ""}

  async componentDidMount(){
    const {data} = await axios.get('http://localhost:31903/api/predmeti')
    //const {data1} = await axios.get('http://localhost:31903/api/brojStudenata') - kad se napravi na BE
    const data1=15 // hardkodirana vrijednost
    this.setState({response:data})
    this.setState({brojStudenata:data1})
  }

  renderOptions = () => {
    if(!this.state.response) return
    return this.state.response.map(element => 
      <option>{element.naziv}</option>
    );
  }

  brojStudenata = () => {
    if(!this.state.brojStudenata) return
    return this.state.brojStudenata
  }

  validate = (e) => {
    const subjectNAme = this.refs.odabirPredmeta.value
    const typeOfExam = this.refs.odabirTipIspita.value
    if(data > 4 || (data > 3 && typeOfExam == "Integralni")){
      
      this.setState({validationError: true})
      this.setState({validationErrorMessage : "Odabrani tip ispita je kreiran maksimalno puta"})
    }
  }

  render(){
    return(
    <div className='container'>
      <form>
        <div className='row'>
            
            <div className='col-3'>
            <label htmlFor="odabirPredmeta">Odaberite predmet: </label>
                <select className="form-control" id="odabirPredmeta" ref="odabirPredmeta">
                    {this.renderOptions()}
                </select>
                <button type="button" class="btn btn-primary" id="nazadDugme" onClick={() => window.open( 'http://www.google.ba')}>Nazad</button>
           </div> 
            <div className='col-3'>
              <label htmlFor="odabirTipIspita">Tip Ispita: </label>
                <select className="form-control2" id="odabirTipIspita" ref="odabirTipIspita">
                    <option>Prvi parcijalni</option>
                    <option>Drugi parcijalni</option>
                    <option>Integralni</option>
                    <option>Usmeni</option>
                    <option>Uvid</option>
                </select>
            </div> 
            <div className='col-3'>
              <label htmlFor="brojStudenata">Broj studenata na predmetu: </label>
              <label id="brojStudenata">{this.brojStudenata()}</label>
            </div> 
            <div className='col-3'>
            <Link to="/charlie/kreiraj-ispit-detalji">
                  <button type="button" class="btn btn-primary" id="kreirajDugme" onClick={this.validate}>Kreiraj</button>
              </Link>
              {this.state.validationError && (
                <div className="alert alert-danger" role="alert">
                  <i
                    className="fas fa-exclamation-triangle"
                    style={{ marginRight: "5px" }}
                  />
                  {this.state.validationErrorMessage}
                </div>
              )}
              <br />
              <Link to="/charlie/kreirani-ispiti">
                <button type="button" class="btn btn-primary">Kreirani ispiti</button>
              </Link>
            </div>

            </div>
            
            
      </form>
    </div>)
  }
}

export default KreirajIspit