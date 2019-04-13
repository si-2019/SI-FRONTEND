import React, {Component} from 'react'

class PocetnaForma extends Component{
  
  render(){
    return(
    <div className='container'>
      <form>
        <div className='row'>
            
            <div className='col-3'>
                
            </div> 
            <div className='col-3'>
              <label htmlFor="brStudenata">Broj studenata na predmetu: </label><br/>
              <label id="brStudenata" class='float-right'>14 </label>
            </div> 
            <div className='col-3'>
                
            </div> 
            <div className='col-3'>
                
            </div>    

        </div>
      </form>
    </div>)
  }
}

export default PocetnaForma