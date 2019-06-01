import React, { Component } from 'react';

class dropdown extends React.Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div className="dropdown" onClick={this.toggleOpen}>
        <button
          className="btn btn-success dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
        >
          Akademska godina
        </button>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          {this.props.godine.map(naslov => <a class="dropdown-item" href='#'>{naslov}</a>)}
        </div>
      </div>
    );
  }
}

export default dropdown;