import React from "react";
import Fotografija from "./fotografija";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";

class Profil extends React.Component {
    constructor() {
        super();
        this.state = {
            studentId: 1,
            fotka: null,
            ime: "bacam hejt",
            prezime: "ovom predmetu"
        }
    }
    componentDidMount() {
        console.log("match.id: " + this.props.match.params.idStudenta);
        const noviId = this.props.match.params.idStudenta;
        axios
            .get("http://localhost:31918/studenti/" + noviId)
            .then(res => {
                this.setState({
                    ime: res.data.ime,
                    prezime: res.data.prezime,
                    studentId: res.data.id
                });
                console.log("ime nakon get: " + this.state.ime);
                }
            )
            .catch(res=>{
                console.log(res.error);
            });
    }
    render() {
        return (
            <>
                <div className="card mb-3" style={{ minWidth: "300px", maxWidth: "500px" }}>
                    <h3 className="card-header">{this.state.ime} {this.state.prezime}</h3>
                    <Fotografija fotografija={this.state.fotka} />
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <h6 className="card-subtitle text-muted"></h6>
                    </div>


                </div>
            </>
        );
    }
}

export default Profil;