import React, {Component} from 'react'
import axios from 'axios'

class FormaPrikazStud extends Component{
    constructor(props){
        super(props)
        
        this.initialState={
            lista: [],
            index: ''
        }
        this.state = this.initialState
    }
    componentDidMount(param){
        if(search==''){
        axios.get ('http://localhost:31901/api/korisnik/getAllStudents')
        .then(response => {
            console.log("Lista: ", response.data);
            this.setState({lista: response.data});
        })
        . catch (error =>{
            console.log(error)
        })
      }
      else{
        axios.get ('http://localhost:31901/api/korisnik/searchStudent?ime='+param)
        .then(response => {
            console.log("Lista: ", response.data);
            this.setState({lista: [response.data]});
        })
        . catch (error =>{
            console.log(error)
        })
      }
    };

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
          index: event.target.value
        })
    }

    render(){

        const{lista, index} = this.state;

        return(
            <div> 
                <br />
                <label>Unesite broj indexa za pretraživanje studenta:(ako ostavite ovo prazno, ispisat ce se svi studenti)</label>    
              
                <div className='row'>
                    <br>
                    </br>
                    
                    <div className ='col-md-1'>
                        <input className="form-control " type="number" name="index" value={index} onChange={this.handleChange} />     
                    </div> 
                    
                    <div className='col-md-1'>
                        <button className="btn btn-success btn-block" onClick={()=> this.componentDidMount(index)}>Search</button>
                        <br /><br /> 
                    </div>
                </div>

               
                <label > Tabelaran prikaz studenata:</label> <br />
                
                <table className="table table-sm table-primary"> 
                <tr>
                    <th >ID</th>
                    <th >IME</th>
                    <th >PREZIME</th>
                    <th >INDEX</th>
                    <th >DATUM ROĐENJA</th>
                    <th >JMBG</th>
                    <th >EMAIL</th>
                    <th >MJESTO ROĐENJA</th>
                    <th >KANTON</th>
                    <th >DRŽAVLJANSTVO</th>
                    <th >TELEFON</th>
                    <th >SPOL</th>
                    <th >IME RODITELJA</th>
                    <th >ADRESA</th>
                </tr>
                {               
                    lista.length ? lista.map(list => 
                        <tr key={list.id}>
                            <th><input className="form-control" type="text"  readOnly value={list.id}></input></th>
                            <th><input className="form-control" type="text" value={list.body} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={list.title} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                            <th><input className="form-control" type="text" value={''} onChange={this.handleChange}></input></th>
                        </tr>)
                    : null
                }
                </table><br /><br />
            </div>    
        );
    }
}

export default FormaPrikazStud