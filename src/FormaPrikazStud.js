import React, {Component} from 'react'

class FormaPrikazStud extends Component{
    constructor(props){
        super(props)
        
        this.inistalState={
            index: '19999'
        }
        this.state = this.inistalState
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    render(){
        const{index} = this.state;
        
        return(
            <div className='col-md-4'>
                <form  onSubmit={this.handleSubmit} className="container-fluid">
                    <label>Unesite broj indexa za pretraživanje studenta:</label>    
                    <intput className="form-control " type="text" name="index" value={index} onChange={this.handleChange} /> <br /> 
               

                </form>  
            </div>
        );
    }
}


export default FormaPrikazStud