import React, { Component } from "react";
import PropTypes from "prop-types";

const validate = (e, validations) => {
  return validations
    .map(validation => {
      if (validation === "required" && e.target.value.length === 0)
        return false;
      return true;
    })
    .includes(false);
};

class Form extends Component {
  state = { validationError: false, validationErrorMessage: "" };

  render() {
    console.log(this.props);
    return (
      <div className="form-group">
        <label htmlFor="ispitnaNapomena">{this.props.labelTitle}</label>
        {this.state.validationError && (
          <div className="alert alert-danger" role="alert">
            Polje je obavezno
          </div>
        )}
        <input
          autoFocus={this.props.autoFocus}
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

const { bool, string } = PropTypes;
Form.propTypes = {
  placeholder: string,
  id: string,
  autofocus: bool
};

export default Form;
