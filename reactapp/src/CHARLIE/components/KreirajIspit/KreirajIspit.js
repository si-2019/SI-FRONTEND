import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class KreirajIspit extends Component{
  
  render(){
    return(
    <div className='container'>
      <form>
        <div className='row'>
            
            <div className='col-3'>
            <label htmlFor="odabirPredmeta">Odaberite predmet: </label>
                <select className="form-control" id="odabirPredmeta" >
                    <option>Predmet 1</option>
                    <option>Predmet 2</option>
                    <option>Predmet 3</option>
                    <option>Predmet 4</option>
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
                
            </div> 
            <div className='col-3'>
            </div>

            </div>
              <Link to="/kreiraj-ispit-detalji">
                  <button type="button" class="btn btn-primary" id="kreirajDugme">Kreiraj</button>
              </Link>

              <Link to="/kreirani-ispiti">
                <button type="button" class="btn btn-primary">Kreirani ispiti</button>
              </Link>
            
      </form>
    </div>)
  }
}

export default KreirajIspit