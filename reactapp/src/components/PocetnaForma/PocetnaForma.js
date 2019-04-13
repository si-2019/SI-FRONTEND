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
                    <option>Predmet 1</option>
                    <option>Predmet 2</option>
                    <option>Predmet 3</option>
                    <option>Predmet 4</option>
                </select>
            
                
                <label htmlFor="odabirTipIspita">Tip Ispita: </label>
                <select className="form-control2" id="odabirTipIspita" >
                    <option>Prvi parcijalni</option>
                    <option>Drugi parcijalni</option>
                    <option>Integralni</option>
                    <option>Usmeni</option>
                    <option>Uvid</option>
                </select>
            </div>   
          </div>  

      </form>
    </div>)
  }
}

export default PocetnaForma