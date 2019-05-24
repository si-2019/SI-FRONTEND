import React, { Component }from 'react';
import './DodajNovuSalu.css';

class DodajNovuSalu extends Component {

    render() {

    return (

        <div className ="container" > 
      
            <form >       
                <div className="row" style={{marginTop:'10px'}}>
                    <button type="button" className="btn btn-danger float-right" id="zatvoriDugme" style={{ marginLeft: '90%',width:'47px'}}>X</button>

                </div>
                
                <div className="form-group row col-5" placeholder="Default input" style={{marginTop:'2%',marginLeft:'10px'}}>
                     <label id="naziv">Naziv sale:</label>
                     <input type="text" className="form-control" id="naziv"></input>
                      <label id="kapacitet">Kapacitet:</label>
                     <input type="number" className="form-control" id="naziv"></input>
                    
                    
                </div>
                <div className="form-group row col-5" placeholder="Default input" style={{marginTop:'3%',marginLeft:'10px'}}>
                    <label> Sala posjeduje računare: </label>
                    
                </div>
                <div className="form-group row col-5" placeholder="Default input" style={{marginTop:'2%',marginLeft:'10px',marginBottom:'10%'}}>
                    <label id="da" style={{marginRight:'20px'}}><input type="radio" id = "da"></input>Da</label>
                    <label id="ne"><input type="radio" id = "ne"></input>Ne</label>        
                </div>
                <div className="form-group row col-12">
                    <button type="submit" className="btn btn-outline-primary col-3"  style={{marginLeft:'40%'}}>Dodaj salu</button>           
                </div>
            </form>
            </div>


    );
 }
}
export default DodajNovuSalu;