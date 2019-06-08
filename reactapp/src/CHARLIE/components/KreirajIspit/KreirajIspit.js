import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class KreirajIspit extends Component{

  state = {response:[], brojStudenata:0, validationError: false, validationErrorMessage: ""}


  async componentDidMount(){
    const {data} = await axios.get('http://localhost:31903/api/predmeti')
    //const {data1} = await axios.get('http://localhost:31903/api/brojStudenata') - kad se napravi na BE
    const data1=15 // hardkodirana vrijednost
    this.setState({response:data})
    this.setState({brojStudenata:data1})
  }

  renderOptions = () => {
    if(!this.state.response) return
    return this.state.response.map(element => 
      <option>{element.naziv}</option>
    );
  }

  brojStudenata = () => {
    if(!this.state.brojStudenata) return
    return this.state.brojStudenata
  }


  validate = (e) => {
    const subjectNAme = this.refs.odabirPredmeta.value
    const typeOfExam = this.refs.odabirTipIspita.value
    if(typeOfExam != "Usmeni" && typeOfExam != "Uvid") {
      const {data} = axios.get('http://localhost:31903/predmet/' + subjectNAme + '/' + typeOfExam)
      if(data > 4 || (data > 3 && typeOfExam == "Integralni")){
        e.preventDefault();
        this.setState({validationError: true})
        this.setState({validationErrorMessage : "Odabrani tip ispita je kreiran maksimalno puta"})
      }
    }
  }


  render(){
    return(
    <div className='container'>
      <form>
        <div className='row'>
            
        <div class="card" style={{marginLeft:"16px"}}>
          <div class="card-body" style={{textAlign:"left"}}>
            <h4 class="card-title">Kreiranje ispita</h4>
            <label class="col-form-label" htmlFor="odabirPredmeta">Odaberite predmet: </label>
            <select class="custom-select"  id="odabirPredmeta" >
              {this.renderOptions()}
            </select>
              <label class="col-form-label" htmlFor="odabirTipIspita">Tip Ispita: </label>
                <select class="custom-select" id="odabirTipIspita" >
                    <option>Prvi parcijalni</option>
                    <option>Drugi parcijalni</option>
                    <option>Integralni</option>
                    <option>Usmeni</option>
                    <option>Uvid</option>
                </select>
                <br />  
            
            <label class="col-form-label" htmlFor="brojStudenata">Broj studenata na predmetu: </label>
              <br />
              <label class="col-form-label" id="brojStudenata">{this.brojStudenata()}</label>
            <br />
            
            <Link to="/charlie">
                  <button type="button" class="btn btn-primary" id="kreirajDugme" style={{float:"right"}}>Kreiraj</button>
              </Link>
             
            <Link to="/fox/ispiti"> 
              <button type="button" class="btn btn-primary" id="nazadDugme" style={{float:"right", marginTop: "10px"}}>Nazad</button>
            </Link>
            </div> 
            </div>
              

            

            </div>
            
            
      </form>
    </div>)
  }
}

export default KreirajIspit