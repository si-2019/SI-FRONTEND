import React from "react";

class PopUp extends React.Component {
  render() {
    if (this.props.show == false) {
      console.log("False je");
      return null;
    }
    return (
      <div className={this.props.class} style={this.props.style}>
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          onClick={this.props.onClick}
        >
          &times;
        </button>
        <strong>{this.props.boldiraniTekst}</strong> <br />
        {this.props.ostaliTekst}
      </div>
    );
  }
}

export default PopUp;
