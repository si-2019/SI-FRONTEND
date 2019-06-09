import React, { Component }from 'react';

class DodajNovuSalu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          naziv: "",
          kapacitet: 1,
          namjena:true
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNazivInput = this.handleNazivInput.bind(this);
        this.handleKapacitetInput = this.handleKapacitetInput.bind(this);

    }

    handleNazivInput(event) {
      this.setState({ naziv: event.target.value });
    }
    
    handleKapacitetInput(event) {
      this.setState({ kapacitet: event.target.value });
    }

    handleSubmit(event) {
       
          this.postSala();
          
      }
      postSala(event) {
        fetch("http://localhost:31905/si2019/echo/unesiSalu", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            
            kapacitet: this.state.kapacitet, 
            naziv: this.state.naziv,
           namjena: this.state.namjena
          })
        }).then(
         
        );
      }
    render() {

    return (

            <div class="card" id="kartica">
              <div class="card-body">
              <h4 class="card-title">Unos sale</h4>
              <form>
              <div className="form-group">
                <label>Naziv sale</label>
                <input 
                type="text" 
                className="form-control" 
                id="naziv" 
                onChange={this.handleNazivInput}></input>
              </div>
              <div className="form-group">
                <label>Kapacitet</label>  
                <input  
                type="number"
                className="form-control"
                id="kapacitet" 
                onChange={this.handleKapacitetInput}></input>
              </div>
              <div className="form-group">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck1" checked=""></input>
                  <label class="custom-control-label" for="customCheck1">Sala posjeduje računare</label>
                </div>
              </div>
              <div className="form-group">
              <button
                id="dugme1"
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                Unesi salu
              </button>
              </div>
          </form>
          </div>
            </div>

    );
 }
}
export default DodajNovuSalu;