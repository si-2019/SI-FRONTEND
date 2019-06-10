import React, {Component} from 'react'
import axios from 'axios'

class FormaProfPred extends Component {
    constructor(props) {
        super(props)
  
        this.initialState = {
          odsjek: '',
          predmet: '',
          selectedValueO: '',
          selectedValueP: '',
          godina: '', 
          semestar: '',
          ciklus: '',
          obavezan: '',
          listaOdsjeka: [],
          listaPredmeta: []
        }
    
        this.state = this.initialState
      }

      componentDidMount(){
        axios.get ('http://localhost:31901/api/odsjek/GetOdsjeci')
        .then(response => {
            console.log("Lista: ", response.data);
            this.setState({listaOdsjeka: response.data});
        })
        . catch (error =>{
            console.log(error)
        })

        axios.get ('http://localhost:31901/api/predmet/GetPredmeti')
        .then(response => {
            console.log("Lista: ", response.data);
            this.setState({listaPredmeta: response.data});
        })
        . catch (error =>{
            console.log(error)
        })
      }

    onChangeOdsjek = (e) => {
        var split=e.target.value.split(",");   
        console.log(split[0]);  
        this.setState({
          odsjek: split[0],
          selectedValueO: e.target.value
         })  
    }

    onChangePredmet = (e) => {
        var split=e.target.value.split(","); 
        console.log(split[0]);    
        this.setState({
          predmet: split[0], 
          selectedValueP: e.target.value
         })  
    }

    spoji(odsjek, predmet){
        console.log(odsjek, predmet);
        const body={"idOdsjek": this.state.odsjek, "idPredmet": this.state.predmet, "godina": this.state.godina, "ciklus": this.state.ciklus, "semestar": this.state.semestar, "obavezan": this.state.obavezan}
        const json=JSON.stringify(body);
        console.log(json);
        axios.post("http://localhost:31901/api/povezivanje/SpojiOdsjekPredmet", json)
        .then(response => {
            console.log(response);
        })
        .catch(error=>{
            console.log(error.response);
            alert(error.response.data.message);
            
        })
    }

    handleChange = (event) => {
      event.preventDefault()
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    render() {
        const {odsjek, predmet, listaOdsjeka, listaPredmeta, selectedValueO, selectedValueP, godina, semestar, ciklus, obavezan}= this.state;
        console.log(godina, semestar, ciklus, obavezan);
        return (
          <div className="card">
          <div className="card-body col-md-2">
              <p>Prikaz svih odsjeka: </p><br />
                <select className="custom-select" value={selectedValueO} onChange={this.onChangeOdsjek}> 
                {
                  listaOdsjeka.length ? listaOdsjeka.map(list => 
                  <option key={list.idOdsjek} value={[list.idOdsjek, list.naziv]}>{list.naziv}</option>
                  ): null
                }
                </select><br /><br />

                <p>Prikaz svih predmeta: </p><br />
                <select className="custom-select" value={selectedValueP} onChange={this.onChangePredmet}> 
                {
                  listaPredmeta.length ? listaPredmeta.map(list => 
                  <option key={list.id} value={[list.id, list.naziv]}>{list.naziv}</option>
                  ): null
                }
                </select><br /><br />

                <label>Godina:</label>
                <input className="form-control" type="number" name="godina" value={godina} onChange={this.handleChange}  /><br />

                <label>Ciklus:</label>
                <input className="form-control" type="number" name="ciklus" value={ciklus} onChange={this.handleChange}  /><br />

                <label>Semestar:</label>
                <input className="form-control" type="number" name="semestar" value={semestar} onChange={this.handleChange}  /><br />

                <label>Obavezan:</label>
                <input className="form-control" type="number" name="obavezan" value={obavezan} onChange={this.handleChange}  /><br />
                
                <button className="btn btn-primary btn-block" onClick={()=>this.spoji(odsjek, predmet)}>Dodaj</button>

           </div>
          </div>
        );
    }
}

export default FormaProfPred