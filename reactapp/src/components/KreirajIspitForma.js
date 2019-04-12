import React, {Component} from 'react'
import './KreirajIspitForma.css'

class KreirajIspitForma extends Component{
  render(){
    return(
    <div>
      <form>
        <div className='form-group'>
          <label htmlFor="ispitnaNapomena">Napomena za ispit</label>
          <input type="text" className="form-control" id="ispitnaNapomena" placeholder="Nemojte zaboraviti indeks..."/>
        </div>
      </form>
    </div>)
  }
}

export default KreirajIspitForma