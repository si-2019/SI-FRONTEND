import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class KreirajIspit extends Component{

  state = {response:[], brojStudenata:0, validationError: false, validationErrorMessage: ""}


  async componentDidMount(){
    const {data} = await axios.get('http://si2019charlie.herokuapp.com/api/predmeti')
    //const {data1} = await axios.get('http://si2019charlie.herokuapp.com/api/brojStudenata') - kad se napravi na BE
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
      const {data} = axios.get('http://si2019charlie.herokuapp.com/predmet/' + subjectNAme + '/' + typeOfExam)
      if(data > 4 || (data > 3 && typeOfExam == "Integralni")){
        e.preventDefault();
        this.setState({validationError: true})
        this.setState({validationErrorMessage : "Odabrani tip ispita je kreiran maksimalno puta"})
      }
    }
  }


  render(){
    return(
    <div className='col'>
      <form>
        <div style={{padding: "15px"}}>
            
        <div class="card" style={{margin:"0px"}}>
          <div class="card-body" style={{textAlign:"left"}}>
            <h4 class="card-title" style={{textAlign: "center"}}>Kreiranje ispita</h4>
            <label class="col-form-label" htmlFor="odabirPredmeta">Odaberite predmet: </label>
            <select class="custom-select"  id="odabirPredmeta" >
              {this.renderOptions()}
            </select>
              <label class="col-form-label" htmlFor="odabirTipIspita">Tip ispita: </label>
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
            
            <Link to="/charlie/kreiraj-ispit-detalji">
                  <button type="button" class="btn btn-primary" id="kreirajDugme" style={{float:"right"}}>Kreiraj</button>
              </Link>
             
            <Link to="/fox/ispiti"> 
              <button type="button" class="btn btn-primary" id="nazadDugme" style={{float:"right", marginRight: "10px"}}>Nazad</button>
            </Link>
            </div> 
            </div>
              

            

            </div>
            
            
      </form>
    </div>)
  }
}

export default KreirajIspit