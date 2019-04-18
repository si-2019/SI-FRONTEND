import React, { Component } from 'react';
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
  ovaj=ovaj.ovaj; //samo ignorisite ovo i ponasajte se u daljem dijelu da je ovaj == this znaci npr ovaj.props.termin.sala ce vam vratiti salu iz bekendaaa
  if(!ovaj.state.showModal)
    return null;
  return(
    //ovo je citav modal, html mijenjate i tu nakon biljeske treba dodati textbox polje za unos azuriranje i brisanje biljeske
    
    <div>
            <Modal 
               isOpen={ovaj.state.showModal}
               contentLabel="Minimal Modal Example"
               style = {customStyles}
            >
              <b>Tip aktivnosti: </b>{ovaj.props.termin.title} <br></br>
              <b>Predmet: </b>{ovaj.props.termin.predmet} <br></br>
              <b>Sala: </b>{ovaj.props.termin.sala} <br></br>
              <b>Biljeska: </b>{ovaj.props.termin.biljeska} <br></br>
              <b>Unesi novu biljesku</b><br></br>    
            
               <input type = "text" value =  {ovaj.state.title} onChange={ovaj.handleChange}></input>
              <button className = 'btn btn-primary' onClick= {ovaj.handleClick}>Unesi</button>
              <button className = 'btn btn-primary' onClick={ovaj.handleCloseModal}>Zatvori</button>
            </Modal>
    </div>
  );
}


export class Body_Cell extends Component {
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

    //ukoliko nema biljeska onda samo ubaci novu
    if(this.props.termin.biljeska == undefined){
      this.props.termin.biljeska = this.state.title;
    }
    //ako postoji biljeska, onda samo doda novu, odvojenu sa ---
    else{
      this.props.termin.biljeska+=' --- ' + this.state.title;
    }


    
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
        if(this.props.termin.biljeska != undefined) {
        return (
          <td style={tdStyleParan} onClick = {(this.state).showModal ? null : this.handleOpenModal}>
      
           <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678135-sticky-note-128.png" height="20" width="20" ></img>
           <br></br>
              <b>{this.props.termin.title + ' '}</b>{'('+ this.props.termin.sala+')'} {this.props.termin.predmet}
              <MojModal ovaj={this}></MojModal> 
          </td>
         
        );
      
      }

    else if(this.props.termin.biljeska == undefined)
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
        if(this.props.termin.biljeska != undefined) {
        return (
          <td style={tdStyleNeparan}  onClick = {(this.state).showModal ? null : this.handleOpenModal}>
          <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678135-sticky-note-128.png" height="20" width="20"></img>
           <br></br>   <b>{this.props.termin.title + ' '}</b>{'('+ this.props.termin.sala+')'} {this.props.termin.predmet}
              <MojModal ovaj={this}></MojModal>
              
          </td>
        ); }
        else if(this.props.termin.biljeska == undefined) {
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
export default Body_Cell