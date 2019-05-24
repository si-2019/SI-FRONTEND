import React, {Component} from 'react'

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
        var xhttp = new XMLHttpRequest();
        var self = this;

        xhttp.onreadystatechange = function(){
            if (xhttp.readyState === 4 && xhttp.status === 200){
                self.setState({
                lista: JSON.parse(this.response)
                });
            }
        }

        
        if(param!=='') xhttp.open("get", "https://jsonplaceholder.typicode.com/posts?userId="+param, true);
        else xhttp.open("get", "https://jsonplaceholder.typicode.com/posts", true);
        xhttp.send();
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
            <form  onSubmit={this.handleSubmit} className="container-fluid">
                
                <br />
                <label>Unesite broj indexa za pretraživanje studenta:(ako ostavite ovo prazno, ispisat ce se svi studenti)</label>    
              
                <div className='row'>
                    <br>
                    </br>
                    
                    <div className ='col-md-1'>
                        <input className="form-control " type="number" name="index" value={index} onChange={this.handleChange} />     
                    </div> 
                    
                    <div className='col-md-1'>
                        <input type="submit" value="Pretraži" className="btn btn-success btn-block" onClick={()=>this.componentDidMount(index)}/> <br /><br /> 
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
            </form>  
        );
    }
}

export default FormaPrikazStud