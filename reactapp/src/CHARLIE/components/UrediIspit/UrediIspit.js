import React from 'react'
import Modal from "../Modal/Modal";

class UrediIspit extends React.Component{
  state = { modalShow: false};

  toggleModal = () => {
    console.log("a")
    this.setState({
      modalShow: !this.state.modalShow
    });
  }

  render(){
    return(
      <div>
        Uredi ispit
        <button type="button" class="btn btn-primary" id="btnPotvrdi">Potvrdi</button>
      </div>
    )
  }
}

export default UrediIspit