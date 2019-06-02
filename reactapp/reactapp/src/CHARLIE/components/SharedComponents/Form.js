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
            <i
              className="fas fa-exclamation-triangle"
              style={{ marginRight: "5px" }}
            />
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
            const validationResult = validate(e, this.props.validations);
            let validationErrorMessage = "";
            validationResult.forEach(el => {
              validationErrorMessage += el + " ";
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

const { array, bool, string } = PropTypes;
Form.propTypes = {
  autofocus: bool,
  id: string,
  placeholder: string,
  validaitons: array
};

Form.defautProps = {
  placeholder: "",
  autoFocus: false
};

export default Form;
