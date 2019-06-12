import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './homePage.css';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import data_1 from "./ChangeLog/version_1.0.0";
import data_2 from "./ChangeLog/version_1.0.1";
import data_3 from "./ChangeLog/version_1.0.2";
let data = null;
class Login extends Component {
  constructor(props) {
      super(props)
      const token = localStorage.getItem("token")

      let logiran = true
      if(token == null) {
          logiran = false
      }

      this.state = {
          logiran
      }  
  }

  componentWillMount() {
    document.title = 'Home Page'
    this.setState({ modalShow: true })
  }

  Odjavi = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    this.props.history.push("/romeo/login");
  }
  render () {
    data = [{
      verzija: "v1.0.0.",
      body: data_1
    }, {
      verzija: "v1.0.1.",
      body: data_2
    },{
      verzija:"v1.0.2.",
      body: data_3
    }];
    if (this.state.logiran === false) {
      return <Redirect to="/romeo/login" />
    }
    return (
      <div className="App" >
      <button onClick={() => this.setState({ modalShow: true })} >Prikazi log</button>

        <div className="header" >
          <img 
            src="http://etf.unsa.ba/etf/css/images/etf-dugi.gif"
            alt="new"
          />
          <h1>Dobro dosli na home page</h1>
          <input type="button" name="odjava" id="odjava" value="Odjavi se" onClick={this.Odjavi} />
        </div>
        <div className="main">
          
        </div>
        <div className="menu">
          
        </div>
        <div className="footer">
          Elektrotehnički fakultet u Sarajevu
        </div>
        <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={this.state.modalShow}
      onHide={()=>{this.setState({modalShow:false})}}
    >
      <ModalHeader closeButton style={{backgroundColor:"#2C3D4F", color:"white"}}>
        <ModalTitle id="contained-modal-title-vcenter" >ChangeLog</ModalTitle>
      </ModalHeader>
      <ModalBody style={{ maxHeight: "600px", overflowY: "scroll" }}>
        {data.map(x =>
          <>
            <ModalHeader >
              <ModalTitle id="contained-modal-title-vcenter">{x.verzija}</ModalTitle>
            </ModalHeader>

            <ModalBody style={{ maxHeight: "300px", overflowY: "scroll" }}>
              {x.body.map(grupa =>
                <div class="form-group">
                  <div class="col-form-label col-form-label-lg">{grupa.grupa}</div>

                  <div class="col-form-label">
                    {grupa.opis.map(opis =>
                      <>
                        {opis}
                        <br></br>
                      </>
                    )}
                  </div>
                </div>
              )}


            </ModalBody>
            <br></br>
          </>
        )}

      </ModalBody>
      </Modal>
      </div>
      
    );
  }
}

export default Login;
