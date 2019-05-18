import React, { Component } from 'react';
import Modal from 'react-responsive-modal'; //paket za gotove modale odnosno popup-e
import './App.css';
import NoviIssueForma from './komponente/NoviIssueForma.js';
import LeftMenuStudent from './komponente/LeftMenuStudent.js';
import IssueList from './komponente/issueList.js';
import FAQ from './komponente/FAQ.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,  //open pokazuje da li formu treba prikazati ili ne
      activeContentId: 1
    };
  }

  //Funkcija kojom se otvara forma
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    window.confirm('Prekinuti pisanje issuea?') && this.setState({ open: false });
  };

  onChangeActiveId = (id) => {
    this.setState({
      activeContentId: id,
    })
  };


  render() {
    const { open } = this.state;
    return (
      <div>
        <h2>Student Issues Page :)</h2>
        <div className="App">

          <div className="row">

            <div id = "head">

              <button type="button" className="btn btn-primary" id="createNewIssue" onClick={this.onOpenModal} >
                Create New Issue
              </button>

              <div id = "search-issue-tab">Ovdje ce biti search filter
              </div>

            </div>

            <div id = "main">
              <div id = "left">
                <LeftMenuStudent triggerChangeActiveId = {this.onChangeActiveId}/>
              </div>
              <div id = "right">
                <div 
                    id = "TrackIssuesContent" 
                    style={{display : this.state.activeContentId === 1 ? 'inherit' : 'none'}}
                ><IssueList/>
                </div>
                <div 
                    id = "DraftsContent" 
                    style={{display : this.state.activeContentId === 2 ? 'inherit' : 'none'}}
                >Drafts komponenta ide ovdje
                </div>
                <div 
                    id = "Archived" 
                    style={{display : this.state.activeContentId === 3 ? 'inherit' : 'none'}}
                > Archived komponenta ide ovdje 
                </div>

                <div 
                    id = "FAQContent" 
                    style={{display : this.state.activeContentId == 4 ? 'inherit' : 'none'}}
                >
                 <FAQ/>
                 </div>
                
              </div>
            </div>

          </div>    
          
          <Modal
            open={open}
            center
            id ="modal"
            onClose={() => {}}
          >
            <div id="overlay">
              <NoviIssueForma onCloseModal={this.onCloseModal}/>
            </div>
          </Modal>
          
        </div>
      </div>
    );
  }
}

export default App;
