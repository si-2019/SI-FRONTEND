import React, {Component} from 'react'

class KreirajIspitDetalji extends Component{
  
  render(){
    return(
    <div className='col-4'>
      <form>
        <div className='form-group'>
          <label htmlFor="ispitnaNapomena">Napomena za ispit</label>
          <input type="text" className="form-control" id="ispitnaNapomena" placeholder="Nemojte zaboraviti indeks..."/>
        </div>
      </form>
    </div>)
  }
}

export default KreirajIspitDetalji