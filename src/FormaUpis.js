import React, {Component} from 'react'
import axios from 'axios'

const naziviOdsjeka=["RI", "AiE", "EE", "TK"];
const opcije = naziviOdsjeka.map((naziv)=>{ 
  return <option>{naziv}</option>; 
});

class FormaUpis extends Component {
    constructor(props) {
        super(props)
  
        this.initialState = {
          ime: '',
          prezime:'',
          id:'',
          ciklus: '',
          sem: '',
          tip: '',
          odsjek: '', 
          lista: [], 
          selectedValue:'',
          search:''
        }
    
        this.state = this.initialState
      }

      componentDidMount(param){
        //Promijeniti URL
        //http://localhost:31901/api/korisnik/getAllStudents
        //"http://localhost:31901/api/korisnik/searchStudent?ime="+param
        axios.get ("https://jsonplaceholder.typicode.com/posts?userId="+param)
        .then(response => {
            console.log("Lista: ", response.data);
            this.setState({lista: response.data});     
        })
        . catch (error =>{
            console.log(error)
        })
      }

      onChange = (e) => {
        var split=e.target.value.split(" - ");     
        
        this.setState({selectedValue: e.target.value, id: split[0], ime: split[1], prezime: split[2]})  
    }

    handleChange = (e) =>{
      this.setState({
        search:e.target.value
      }) 
    }

      handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
          [event.target.name]: event.target.value
        })
      }

//Funkcija za backend
      OnSubmit = (event) =>{
        event.preventDefault()
        const data=this.state
        console.log("Svi potrebni podaci: ", data)    
        
        const xhr = new XMLHttpRequest();
        const body = JSON.stringify(data);

        //NOVI SERVIS CE BITI
        xhr.open('POST', 'http://localhost:31901/api/korisnik/AddNewAssistent', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
          if(xhr.status === 200) {
            const resp = xhr.responseText;
            alert(resp);
          }
        }
        xhr.onerror = () => {
          console.log(xhr.statusText);
        }
        xhr.send(body);
    }
     
    


    render() {
        const { ime, prezime, id, ciklus, sem, tip, odsjek,lista, selectedValue,search } = this.state;

        return (
          <div className="col-md-2">
            <br />
            <input type="text" className="form-control" value={search} onChange={this.handleChange}></input> <br />
            <button className="btn btn-success btn-block" onClick={()=> this.componentDidMount(search)}>Search</button>

            <br />
            <p>Prikaz studenata: </p><br />
            <select className="custom-select" value={selectedValue} onChange={this.onChange}> 
              {
                  
                //paziti sta se prikazuje, nece biti list.title!!!
                //ako je length!=0 prikazati listu, u suprotnom vratiti null
                lista.length ? lista.map(list => <option key={list.id}>{list.id} - {list.title} - {list.body}</option>): null
              }
            </select><br /><br />
          
              
            <form  onSubmit={this.OnSubmit}>
              <label>ID</label>
              <input className="form-control" type="text" name="name"  readOnly value={id}/><br />

              <label>Ime studenta </label>
              <input className="form-control" type="text" name="name"  readOnly value={ime}/><br />

              <label>Prezime studenta </label>
              <input className="form-control" type="text" name="name"  readOnly value={prezime}/><br />

              <label>Ciklus </label>
              <input className="form-control" type="number" name="ciklus" value={ciklus} onChange={this.handleInputChange} /><br />
              
              <label>Semestar </label>
              <input className="form-control" type="number" name="sem" value={sem} onChange={this.handleInputChange} /><br />

              <label >Tip studenta </label>
              <input className="form-control" type="number" name="tip" value={tip} onChange={this.handleInputChange} /><br />

              <label >Odsjek </label><br />
              <select className="custom-select" name="odsjek" value={odsjek} onChange={this.handleInputChange}>{opcije}</select><br /><br />
              
              
              <input type="submit" value="Upiši" className="btn btn-success btn-block" />
            </form>
          </div>
        );
    }
}

export default FormaUpis


/*<input className="form-control" type="number" name="odsjek" value={odsjek} onChange={this.handleInputChange} /><br />*/