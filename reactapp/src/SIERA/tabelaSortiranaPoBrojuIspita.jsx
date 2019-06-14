import React, { Component } from "react";
import axios from "axios";

class TabelaSortiranaPoBrojuIspita extends Component {
    constructor(...args) {
        super(...args);
        var id = 1;
        if (window.localStorage.getItem("id") != null && window.localStorage.getItem("id") != undefined) {
            id = window.localStorage.getItem("id");
        }
        this.state = {
            sortiraniPredmetiPoBrojuIspita: [],
            brojIspita: [],
            trenutnoLogovaniStudentID: id
        }
    };

    componentDidMount() {
        axios
            .get(
                `http://localhost:31918/predmeti/brojIspita/` +
                this.state.trenutnoLogovaniStudentID + "/sort"
            )
            .then(res => {
                if (res.data.ispiti != undefined) {
                    const sortiraniPredmeti = res.data.ispiti.map(obj => obj.naziv);
                    const brojIspita = res.data.ispiti.map(obj => obj.brojPolaganja);
                    this.setState({ sortiraniPredmetiPoBrojuIspita: sortiraniPredmeti, brojIspita: brojIspita });
                }
            });
    }

    render() {
        return (
            <div className="col-sm-12 col-xs-12 col-md-12 col-lg-4">
                {this.state.sortiraniPredmetiPoBrojuIspita.length == 0 ? <span style={{ float: "left", marginLeft: "30px" }}>Student nije polagao nijedan ispit</span> :
                    <table className="table table-bordered text-center bg-active border-solid" style={{ float: "left", marginLeft: "20px" }}>
                        <tbody>
                            <tr className="bg-primary text-light">
                                <th className="tabtip">Predmet</th>
                                <th className="tabtip">Broj polaganih ispita</th>
                            </tr>
                            {this.state.sortiraniPredmetiPoBrojuIspita.map((item, i) => (
                                <tr className="tabtip1" key={i}>
                                    <td>{item}</td>
                                    <td>{this.state.brojIspita[i]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </div>
        );
    }
}

export default TabelaSortiranaPoBrojuIspita;