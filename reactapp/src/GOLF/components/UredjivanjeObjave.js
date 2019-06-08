import React, { Component } from 'react'
import './golf.css'

class EditovanjeObjave extends Component{

    constructor(props) {
        super(props);
        this.state = {
          name: null
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    render(){
        return(
            <div className="card border-success mb-3">
                <div className="card-header">
                    <a href="#"><h4>Editovanje objave</h4></a>
                </div>
                <div className="card-body">
                    <form>
                        <label>
                            Objava sakrivena:
                            <input id="checkBox" name="objavaSakrivena" type="checkbox" 
                            checked={this.state.objavaSakrivena} onChange={this.handleInputChange} />
                            <br></br>
                            Opis: <br></br>
                            <textarea rows="4" id="opisPredmeta"  name="opisPredmeta" class="form-control mr-sm-2"cols="2000"></textarea>
                            <br></br>
                            </label>
                            <br />
                            </form>
                            </div>
                            </div>
        )
    }
}

export default EditovanjeObjave