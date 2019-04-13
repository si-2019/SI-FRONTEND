import React, {Component} from 'react'

class PocetnaForma extends Component{
  
  render(){
    return(
    <div className='container'>
      <form>
        <div className='row'>
            
            <div className='col-3'>
                <label htmlFor="odabirPredmeta">Odaberite predmet: </label>
            </div>    
            <div className='col-3'>
                
            </div>  
        </div>
      </form>
    </div>)
  }
}

export default PocetnaForma