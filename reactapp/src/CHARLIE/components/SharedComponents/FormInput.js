import React, { Component } from "react";

const validate = (e, validations) => {
  return validations
    .map(validation => {
      if (validation === "required" && e.target.value.length === 0)
        return false;
      return true;
    })
    .includes(false);
};

class FormInput extends Component {
  state = { validationError: false, validationErrorMessage: "" };

  render() {
    return (
      <div className="form-group">
        <label htmlFor="ispitnaNapomena">{this.props.labelTitle}</label>
        {this.state.validationError && (
          <div className="alert alert-danger" role="alert">
            Polje je obavezno
          </div>
        )}
        <input
          autoFocus
          type="text"
          className="form-control"
          id={this.props.id}
          placeholder={this.props.placeholder}
          onBlur={e => {
            this.setState({ validationError: validate(e, ["required"]) });
          }}
        />
      </div>
    );
  }
}

export default FormInput;
