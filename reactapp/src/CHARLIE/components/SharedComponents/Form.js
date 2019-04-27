import React, { Component } from "react";
import PropTypes from "prop-types";

const validate = (e, validations) => {
  return validations
    .map(validation => {
      if (validation === "required" && e.target.value.length === 0)
        return "Polje je obavezno!";
      else if (validation === "deep" && e.target.value.length === 0)
        return "Polje je deep!";
      return "";
    })
    .filter(res => res.length > 0);
};

class Form extends Component {
  state = { validationError: false, validationErrorMessage: "" };

  render() {
    return (
      <div className="form-group">
        <label htmlFor="ispitnaNapomena">{this.props.labelTitle}</label>
        {this.state.validationError && (
          <div className="alert alert-danger" role="alert">
            {this.state.validationErrorMessage}
          </div>
        )}
        <input
          autoFocus={this.props.autoFocus}
          type="text"
          className="form-control"
          id={this.props.id}
          placeholder={this.props.placeholder}
          onBlur={e => {
            const validationResult = validate(e, ["required", "deep"]);
            console.log(validationResult);
            let validationErrorMessage = "";
            validationResult.forEach(el => {
              validationErrorMessage += el + "\n";
            });
            this.setState({
              validationError: validationResult.length > 0,
              validationErrorMessage
            });
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
