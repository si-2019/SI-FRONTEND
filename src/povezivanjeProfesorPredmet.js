import React, {Component} from 'react'
import axios from 'axios'

class FormaProfPred extends Component {
    constructor(props) {
        super(props)
  
        this.initialState = {
          profesor: '',
          predmet: '',
          listaProfesora: [],
          listaPredmeta: []
        }
    
        this.state = this.initialState
      }

      componentDidMount(){
        axios.get ('http://localhost:31901/api/korisnik/getAllProfessors')
        .then(response => {
            console.log("Lista: ", response.data);
            this.setState({listaProfesora: response.data});
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

    onChangeProfesor = (e) => {
        var split=e.target.value.split(" - ");     
        this.setState({
          profesor: split[0]
         })  
    }

    onChangePredmet = (e) => {
        var split=e.target.value.split(" - ");     
        this.setState({
          predmet: split[0]
         })  
    }

    spoji(profesor, predmet){
        console.log(profesor,predmet);
        const json={"idUloga":profesor, "idPredmet":predmet, "godina":null, "ciklus":null, "obavezan":null}
        axios.post("http://localhost:31901/api/povezivanje/linkProfessorSubject", json)
        .then(response => {
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render() {
        const {profesor, predmet, listaProfesora, listaPredmeta} = this.state;

        return (
          <div className="col-md-2">
              <p>Prikaz svih profesora: </p><br />
                <select className="custom-select" value={profesor} onChange={this.onChangeProfesor}> 
                {
                  listaProfesora.length ? listaProfesora.map(list => 
                  <option key={list.idUloga}>{list.ime}  {list.prezime}</option>
                  ): null
                }
                </select><br /><br />

                <p>Prikaz svih predmeta: </p><br />
                <select className="custom-select" value={predmet} onChange={this.onChangePredmet}> 
                {
                  listaPredmeta.length ? listaPredmeta.map(list => 
                  <option key={list.id}> {list.naziv}</option>
                  ): null
                }
                </select><br /><br />

                <button className="btn btn-success btn-block" onClick={()=>this.spoji(profesor,predmet)}>Dodaj</button>

          </div>
        );
    }
}

export default FormaProfPred