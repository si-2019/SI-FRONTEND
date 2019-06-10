import React, { Component }from 'react';

class PrikaziSaleForma extends Component {

    constructor(props) {
        super(props);
        this.state = {
          sale: [],
          id: 20
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    
      componentDidMount() {
        fetch("http://localhost:31905/si2019/echo/sveSale")
        .then(res => res.json())
      .then(json => {
        this.setState({
          sale: json
        });
      });
      }

      handleChange(e) {

        console.log("ID JE " + e.target.value);
        this.setState({ id: e.target.value});
      }

      handleSubmit(event) {
       
        this.postObrisi();
        
    }
    postObrisi(event) {
      fetch("http://localhost:31905/si2019/echo/obrisiSalu", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          
          id: this.state.id
        })
      }).then(
       
      );
    }

    render() {

    return (

      <div class="card" id="kartica">
        <div class="card-body">
          <h4 class="card-title">Prikaz sala</h4>
          <form>

            <div className="form-group">
              <label>Sale</label>
              <select
                className="custom-select" 
                id="naslovSelect"
                onChange={this.handleChange}>
                {this.state.sale.map(item => (<option value={item.id}>{item.naziv}</option>))}</select>
            </div>

            <div className="form-group">
            <button
              id="dugme1"
              type="submit"
              className="btn btn-primary"
              onClick={this.handleSubmit}>
              
              Obriši salu
              </button>

            </div>
          </form>
        </div>
      </div>
    );
 }
}
export default PrikaziSaleForma;