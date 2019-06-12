import React from 'react'
import { Link } from 'react-router-dom';
import Modal from "../SharedComponents/Modal";
import DateTimePicker from 'react-datetime-picker'

class UrediIspit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '90', datumRokaPrijave: new Date(), kapacitet: 0, modalShow: false };

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


  onKapacitetChange = e => {
    this.setState({
      kapacitet: e.target
    });
  };

  render() {
    return (
      <div className="containter-fluid">
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

            <label htmlfor="sala">Sala:</label><br/>
            <input type="text" className="form-control" id="sala" />
            <br/>
            <div className="form-group">
              <label htmlFor="kapacitet">Kapacitet:</label>
              <br />
              <input
                type="number"
                id="kapacitet"
                onChange={this.onKapacitetChange}
                value={this.state.kapacitet}
              />
            </div>
            <br/>
            <form
              autoFocus
              labelTitle="Napomena za ispit"
              id="iNapomena"
              placeholder="Nemojte zaboraviti indeks..."
              validations={["required"]}
            />

            <br></br>
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