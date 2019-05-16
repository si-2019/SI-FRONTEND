import React from "react";
import axios from "axios";

class DropDownZavrsni extends React.Component {

    constructor() {
        super();
        this.state = {
            profesori: [],
            studentId: 1,
            student:
            {
                ime: "hehe",
                prezime: "lol"
            }
        }
    }
    componentDidMount() {
        //poslati get na studenta i get na profesore
        axios
            .get()
            .then();
    }
    render() {
        return (

            <div class="row" style={{ margin: "0px" }}>
                <div class="col"></div>
                <div class="col" style={{ textAlign: "center" }}>
                    <div class="card" style={{ display: "inline-block" }}>
                        <div class="card-body">
                            <h3 class="card-title">Završni rad</h3>
                            <h6 class="card-subtitle mb-2 text-muted">Ovdje možete vidjeti sve profesore koje možete odabrati za svog mentore, kao i teme koje nude.</h6>
                            <div style={{ textAlign: "left" }}>
                                <label class="col-form-label col-form-label-lg" for="inputLarge">Mentori</label>
                            </div>

                            <select class="custom-select" required>
                                <option selected="">Neko</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <div style={{ visibility: "hidden" }}>dssffds</div>
                            <button type="submit" class="btn btn-primary btn-lg btn-block">Potvrdi</button>

                        </div>
                    </div>
                </div>
                <div class="col"></div>
            </div>

        );
    }
}

export default DropDownZavrsni;
