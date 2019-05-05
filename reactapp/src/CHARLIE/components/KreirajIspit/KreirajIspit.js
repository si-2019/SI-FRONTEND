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

  render(){
    return(
    <div className='container'>
      <form>
        <div className='row'>
            
            <div className='col-3'>
            <label htmlFor="odabirPredmeta">Odaberite predmet: </label>
                <select className="form-control" id="odabirPredmeta" >
                    {this.renderOptions()}
                </select>
                <button type="button" class="btn btn-primary" id="nazadDugme" onClick={() => window.open( 'http://www.google.ba')}>Nazad</button>
           </div> 
            <div className='col-3'>
              <label htmlFor="odabirTipIspita">Tip Ispita: </label>
                <select className="form-control2" id="odabirTipIspita" >
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
                  <button type="button" class="btn btn-primary" id="kreirajDugme">Kreiraj</button>
              </Link>
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