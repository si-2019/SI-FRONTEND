import React from 'react'
import Modal from "../SharedComponents/Modal";
import DateTimePicker from 'react-datetime-picker'

class UrediIspit extends React.Component{
  state = {
    date: new Date(),
    modalShow: false
  }
  toggleModal = () => {
    console.log("a")
    this.setState({
      modalShow: !this.state.modalShow
    });
  }

  onChange = date => this.setState({ date })
  render(){
    return(
      <div className="col-12">
      {!this.state.modalShow && <div>
        <h3>Uredi ispit</h3>
        <form>
          <label>Rok prijave ispita</label>
          <br></br>
          <DateTimePicker
            onChange={this.onChange}
            value={this.state.date}
            format="dd-MM-yyyy HH:mm"
          />
          <br></br>
          <input type="button" class="btn btn-primary" id="btnPotvrdi" onClick={this.toggleModal} value="Potvrdi"/>
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