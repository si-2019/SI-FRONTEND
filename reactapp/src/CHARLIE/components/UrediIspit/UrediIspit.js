import React from 'react'

import Modal from "../SharedComponents/Modal";
import DateTimePicker from 'react-datetime-picker'

class UrediIspit extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: '90',datumRokaPrijave:new Date(),modalShow:false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  toggleModal = () => {
    console.log("a")
    this.setState({
      modalShow: !this.state.modalShow
    });
  }

  onChangeRokPrijave = datumRokaPrijave => this.setState({ datumRokaPrijave })

  render(){
    return(
      <div className="col-xs-12 col-sm-12">
      {!this.state.modalShow && <div>
        <h3>Uredi ispit</h3>
        <form>
          <label>Rok prijave ispita</label>
          <br></br>
          <DateTimePicker
            onChange={this.onChangeRokPrijave}
            value={this.state.datumRokaPrijave}
            format="dd-MM-yyyy HH:mm"
            id="rokPrijaveIspita"
          />
          <br></br>
          <br></br>
          <label>Trajanje ispita</label>
          <br></br>
          <input 
            type="number" 
            value={this.state.value} 
            id="trajanjeIspita" 
            onChange={this.handleChange}></input>
          <label>minuta</label>
          <br></br>
          <input type="button" class="btn btn-primary" id="btnPotvrdi" value="Potvrdi"/>
        </form>
        </div>}
      {this.state.modalShow && 
        <Modal onClose={this.toggleModal} onConfirm={this.toggleModal}>
         </Modal>} 
      </div>
    )
  }
}

export default UrediIspit