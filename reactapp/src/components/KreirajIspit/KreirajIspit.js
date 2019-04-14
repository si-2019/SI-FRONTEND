import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class KreirajIspit extends Component{
  
  render(){
    return(
    <div className='container'>
      <form>
        <div className='row'>
            
            <div className='col-3'>
            Kreiranje ispita
            </div> 
            <div className='col-3'>
                
            </div> 
            <div className='col-3'>
                
            </div> 
            <div className='col-3'>
                  <Link to="/kreiraj-ispit-detalji">
                      <button type="button" class="btn btn-primary" id="kreirajDugme">Kreiraj</button>
                  </Link>
            </div>    

        </div>
      </form>
    </div>)
  }
}

export default KreirajIspit