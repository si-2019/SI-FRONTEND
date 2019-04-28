import React, { Component } from 'react'
import ReactDom from 'react-dom';
import Popup from 'react-popup';
import Modal from 'react-modal';
import { stringify } from 'querystring';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const MojModal = (ovaj) => {
  ovaj=ovaj.ovaj; 
  if(!ovaj.state.showModal)
    return null;
  return(
   
    
    <div>
            <Modal 
               isOpen={ovaj.state.showModal}
               contentLabel="Minimal Modal Example"
               style = {customStyles}
            >
          
              <b>Tip aktivnosti: </b>{ovaj.props.termin.title} <br></br>
              <b>Predmet: </b>{ovaj.props.termin.predmet} <br></br>
              <b>Sala: </b><a href="http://www.etf.unsa.ba">{ovaj.props.termin.sala}</a> <br></br>

              <b>Biljeska: </b>{ovaj.props.termin.biljeska} <br></br>

              <button className = 'btn btn-primary' onClick={ovaj.handleCloseModal}>Zatvori</button>
              
            
            </Modal>
    </div>
  );
}





export class Body_cell extends Component {


  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
   

  }
  



  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  handleChange(event) {
    this.setState({title: event.target.value});
  }

  handleClick(event) {
    this.setState({title: event.target.value});


    
  }





















  render() {
    if(this.props.redniBroj%2==0)
    {
      // Ukoliko je paran red
      if(this.props.termin==undefined)
      {
        //Ako je celija prazna
        return (
          <td style={tdStyleParan}></td>
        );
      }     
      else
      {
        return (
          <td style={tdStyleParan} onClick = {(this.state).showModal ? null : this.handleOpenModal}>
          <b>{this.props.termin.title + ' '}</b>{'('+ this.props.termin.sala+')'} {this.props.termin.predmet}
          <MojModal ovaj={this}></MojModal> 
          </td>
        );
      } 
    }
    else
    {
      // Ukoliko je neparan red
      if(this.props.termin==undefined)
      {
        //Ako je celija prazna
        return (
          <td style={tdStyleNeparan}></td>
        );
      }     
      else
      {
        return (
          <td style={tdStyleNeparan}  onClick = {(this.state).showModal ? null : this.handleOpenModal}>
          <b>{this.props.termin.title + ' '}</b>{'('+ this.props.termin.sala+')'} {this.props.termin.predmet}
          <MojModal ovaj={this}></MojModal>
          </td>
        );
      } 
    }
  }
}

const tdStyleNeparan=
{
    rowspan:'5',
    border:'2px solid #504c4c',
    textAlign:'center',
    padding:'8px',
    textAlign: 'left',
    width:'10vw', 
    backgroundColor: 'white' 
}

const tdStyleParan=
{
    rowspan:'5',
    border:'2px solid #504c4c',
    textAlign:'center',
    padding:'8px',
    textAlign: 'left',
    width:'10vw', 
    backgroundColor:'lightgoldenrodyellow' 
}
export default Body_cell