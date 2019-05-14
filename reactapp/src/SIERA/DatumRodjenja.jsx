import React from "react";
import Link from "react-router-dom";

class DatumRodjenja extends React.Component {
    constructor() {
        super();
        this.state = {
            isClicked: false,
            visibility: "hidden"
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState((prevState) => {
            if (!prevState.isClicked) {
                return {
                    isClicked: true,
                    visibility: "visible"
                }
            }
            return {
                isClicked: false,
                visibility: "hidden"
            }

        });
    }
    render() {
        return (
            <div className="col-md-4">
                <div className="alert alert-dismissible alert-danger">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong>Oh snap!</strong> <a href="#" className="alert-link">Change a few things up</a> and try submitting again.
                </div>
                <div className="col-2" >
                    <button type="button" className="btn btn-info" id="datumRodjenja" onClick={this.handleClick}>Datum rodjenja</button>
                    <div style={{ height: "20px" }}></div>
                    <h5 style={{ visibility: this.state.visibility, paddingLeft: "5px" }}>DD/MM/YYYY</h5>
                </div>
            </div>

        );
    }
}

export default DatumRodjenja;