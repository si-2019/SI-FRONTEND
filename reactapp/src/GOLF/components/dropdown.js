import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class dropdown extends React.Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  componentDidMount(){
    console.log("***********************")
    console.log(this.props)
  }


  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div class="dd">
      <div className="dropdown" onClick={this.toggleOpen}>
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
        >
          {this.props.nazivAg}
        </button>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          {this.props.godine.map(naslov => <Link to={"/Golf/materijali/"+this.props.idPredmeta+"/"+this.props.idKorisnika+"/"+naslov } class="dropdown-item">{naslov}</Link>)}
        </div>
      </div>
      </div>
    );
  }
}

export default dropdown;