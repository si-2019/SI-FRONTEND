import React, { Component } from "react";
import DatePicker from "react-datetime";
import { Link } from "react-router-dom";

class IspitiForma extends Component {
    constructor(props) {
      super(props);
      const {termin}=props;
      this.state = {
        termin: termin || new Date()
      };
    }
    handleTerminChange = e => {
        this.setState({
          termin: e.target
        });
      };
    
}