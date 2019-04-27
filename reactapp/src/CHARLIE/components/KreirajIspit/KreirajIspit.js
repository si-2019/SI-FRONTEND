import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class KreirajIspit extends Component{
  state = {response:[]}

  async componentDidMount(){
    const {data} = await axios.get('http://localhost:3001/api/predmeti')
    console.log(data)
    this.setState({response:data})
  }

  renderOptions = () => {
    if(!this.state.response) return
    return this.state.response.map(element => 
      <option>{element.naziv}</option>
    );
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