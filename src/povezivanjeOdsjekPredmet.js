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
        console.log(split[1]);  
        this.setState({
          odsjek: split[1],
          selectedValueO: e.target.value
         })  
    }

    onChangePredmet = (e) => {
        var split=e.target.value.split(","); 
        console.log(split[1]);    
        this.setState({
          predmet: split[1], 
          selectedValueP: e.target.value
         })  
    }

    spoji(odsjek, predmet){
        console.log(odsjek,predmet);
        const json={"idOdsjek":odsjek, "idPredmet":predmet, "godina":null, "ciklus":null, "obavezan":null}
        console.log(json);
        axios.post("http://localhost:31901/api/povezivanje/SpojiOdsjekPredmet", json)
        .then(response => {
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render() {
        const {odsjek, predmet, listaOdsjeka, listaPredmeta, selectedValueO, selectedValueP}= this.state;

        return (
          <div className="col-md-2">
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

                <button className="btn btn-success btn-block" onClick={()=>this.spoji(odsjek,predmet)}>Dodaj</button>

          </div>
        );
    }
}

export default FormaProfPred