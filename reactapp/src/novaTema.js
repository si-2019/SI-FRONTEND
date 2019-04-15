import React, {Component} from 'react';

class NovaTema extends Component{
  render(){
    return(
      <div className="row justify-content-center mt-5 ">  
        <div className="form-group bg-light col-md-4">        
          <form >
            <p className="lead mb-1">Naziv Teme</p>
            <input className="form-control form-control-lg" type="text" id="nazivTeme"/>
            <p className="lead mb-1">Tekst</p>
            <textarea className="form-control" id="opisTeme" rows="4"/>
          </form>
        </div>
      </div>     
    );
  }
}

export default NovaTema;