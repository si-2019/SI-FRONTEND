import React, { Component } from "react";
import DatePicker from "react-datetime";
import { Link } from "react-router-dom";

class IspitiForma extends Component {
    constructor(props) {
        super(props);
        const { termin } = props;
        this.state = {
            termin: termin || new Date()
        };
    }
    handleTerminChange = e => {
        this.setState({
            termin: e.target
        });
    };
    render() {
        <div>
            <h2>{title || "Titl Stranice"}</h2>
            <form style={{ display: "flex", flexDirection: "row" }}>
                <div
                    className="left_fields"
                    style={{
                        display: "inline-block",
                        width: "30%",
                        marginRight: "20px"
                    }} >
                        
                </div>
            </form>
        </div>
    }
}