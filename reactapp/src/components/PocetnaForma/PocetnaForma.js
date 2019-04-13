import React, {Component} from 'react'

class PocetnaForma extends Component{
  
  render(){
    return(
    <div className='container'>
      <form>
        <div className='row'>
            
            <div className='col-3'>
                
                <label htmlFor="odabirPredmeta">Odaberite predmet: </label>
                <select className="form-control" id="odabirPredmeta" >
                </select>
            </div>     
        </div>
      </form>
    </div>)
  }
}

export default PocetnaForma