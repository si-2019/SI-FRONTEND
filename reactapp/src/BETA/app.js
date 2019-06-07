import React, { Component } from 'react';
import Modal from 'react-responsive-modal'; //paket za gotove modale odnosno popup-e
import './App.css';
import NoviIssueForma from './komponente/Student/NoviIssueForma.js';
import LeftMenuStudent from './komponente/Student/LeftMenuStudent.js';
import IssueList from './komponente/Student/issueList.js';
import FAQ from './komponente/Student/FAQ.js';
import Drafts from './komponente/Student/Drafts.js';
import Archived from './komponente/Student/ArchivedPart.js'
import ModalComponent from './komponente/Student/NoviIssueModal.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,  //open pokazuje da li formu treba prikazati ili ne
      activeContentId: 1
    };
  }


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
      <div id>

        <div className="App">

          <div className="row">

            <div id="head">
              <div id="leftBeta">
                <button type="button"
                  className="btn btn-primary left-buttons"
                  id="createNewIssue"
                  onClick={() => this.setState({ modalShow: true })} >
                  Create New Issue
              </button>

              </div>
              <div id="search-issue-tab">Ovdje ce biti search filter
              </div>

            </div>

            <div id="main">
              <div id="leftBeta">
                <LeftMenuStudent triggerChangeActiveId={this.onChangeActiveId} />
              </div>
              <div id="rightBeta">
                <div
                  id="TrackIssuesContent"
                  style={{ display: this.state.activeContentId == 1 ? 'inherit' : 'none' }}
                ><IssueList />
                </div>
                <div
                  id="DraftsContent"
                  style={{ display: this.state.activeContentId == 2 ? 'inherit' : 'none' }}
                ><Drafts />
                </div>
                <div
                  id="Archived"
                  style={{ display: this.state.activeContentId == 3 ? 'inherit' : 'none' }}
                > <Archived />
                </div>

                <div
                  id="FAQContent"
                  style={{ display: this.state.activeContentId == 4 ? 'inherit' : 'none' }}
                >
                  <FAQ />
                </div>



              </div>
            </div>

          </div>

          <ModalComponent
                    
                    show={this.state.modalShow}
                    naslovModala="Posalji novi issue"
                    btnPotvrdi="Posalji issue"
                    
                    

                />

        </div>
      </div>
    );
  }
}

export default App;