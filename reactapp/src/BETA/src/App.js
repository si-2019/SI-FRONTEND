import React, { Component } from 'react';
import Modal from 'react-responsive-modal'; //paket za gotove modale odnosno popup-e
import './App.css';
import './bootstrap.css';
import './bootstrap.min.css';
import NoviIssueForma from './komponente/NoviIssueForma.js';
import OdgovorNaIssueForma from './komponente/OdgovorNaIssueForma.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false  //open pokazuje da li formu treba prikazati ili ne
    };
    this.onOpenModal = this.onOpenModal.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
  }

  //Funkcija kojom se otvara forma
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    
    this.setState({ open: false });
  };

  isClickedX = () => {
    this.setState({
      open: false
    })
  }

  //Funkcija kojom se zatvara forma (ovo se moze iskoristiti npr da se forma zatvori kad se klikne
  //na bilo sta izvan forme, ali mi to necemo jer nam treba da se zatvara samo na X, pa je funk prazna
  onCloseModal = () => {
  };

  onCloseModal2 = (open) => {
    this.setState({
      open: false
    })
  }

  render() {
    const { open } = this.state;
 
    return (

        <div className="App">

          <div className="row">

            <button type="button" className="btn btn-primary" id="createNewIssue" onClick={this.onOpenModal} >
              Kreiraj novi issue
            </button>

          </div>    

          <Modal 
            open={open} 
            close={this.onCloseModal}
            center id ="modal" >
            <div id="overlay" className="overlay-content">
              <NoviIssueForma triggerOnCloseModal2 = {this.onCloseModal2}/>
            </div>
          </Modal>

        </div>
    );
  }
}

export default App;
