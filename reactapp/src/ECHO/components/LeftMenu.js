import React from "react";

class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDivId: 1 //open pokazuje da li formu treba prikazati ili ne
    };
  }

  changeActiveId(id) {
    this.props.triggerChangeActiveId(id);
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary left-buttons"
          id="moj"
          onClick={() => this.changeActiveId(1)}
        >
          Termini
        </button>
        <button
          type="button"
          className="btn btn-primary left-buttons"
          id="moj"
          onClick={() => this.changeActiveId(2)}
        >
          Komponenta2
        </button>
      </div>
    );
  }
}

export default LeftMenu;
