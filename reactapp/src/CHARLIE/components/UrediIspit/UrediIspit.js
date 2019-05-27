import React from 'react'
import { Link } from 'react-router-dom';
import Modal from "../SharedComponents/Modal";
import DateTimePicker from 'react-datetime-picker'

class UrediIspit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '90', datumRokaPrijave: new Date(), modalShow: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  toggleModal = () => {
    this.setState({
      modalShow: !this.state.modalShow
    });
  }

  urediIspit = () => {
    this.setState({
      modalShow: !this.state.modalShow
    });
  }

  onChangeRokPrijave = datumRokaPrijave => this.setState({ datumRokaPrijave })

  render() {
    return (
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
            <form
              autoFocus
              labelTitle="Napomena za ispit"
              id="ispitnaNapomena"
              placeholder="Nemojte zaboraviti indeks..."
              validations={["required"]}
            />
            <input type="button" class="btn btn-primary" id="btnPotvrdi" value="Potvrdi" />
            <Link to="/charlie/kreirani-ispiti">
              <button type="button" class="btn btn-danger" id="btnPovratak">Odustani</button>
            </Link>
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