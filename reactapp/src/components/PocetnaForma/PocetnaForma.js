import React, {Component} from 'react'

class PocetnaForma extends Component{
  
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
                <button type="button" class="btn btn-primary" onClick={() => window.open( 'http://www.google.com')}>Kreiraj</button>
            </div>    

        </div>
      </form>
    </div>)
  }
}

export default PocetnaForma