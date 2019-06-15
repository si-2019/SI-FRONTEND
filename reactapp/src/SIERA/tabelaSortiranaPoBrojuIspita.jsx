import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class TabelaSortiranaPoBrojuIspita extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            sortiraniPredmetiPoBrojuIspita: [],
            brojIspita: [],
            trenutnoLogovaniStudentID: (window.localStorage.getItem("id") != null && window.localStorage.getItem("username") != null) ? window.localStorage.getItem("id") : 1,
            username: window.localStorage.getItem("username") != null ? window.localStorage.getItem("username") : "Neki user",
            token: window.localStorage.getItem("token")
        }
    };

    componentDidMount() {
        if (window.localStorage.getItem("id") != null) {
            var ajax = new XMLHttpRequest();
            ajax.onreadystatechange = () => {
                if (this.readyState == 4 && this.status == 200) {
                    this.handleGet();
                }
                else {
                    //vrati na login
                    this.props.history.push("/Romeo");
                }
            }
            ajax.open("GET", "https://si2019romeo.herokuapp.com/users/validate/data?username=" + this.state.username, true);
            ajax.setRequestHeader("Authorization", this.state.token);
            ajax.send();
        }
        else this.handleGet();
    }

    handleGet = () => {
        axios
            .get(
                `https://si2019siera.herokuapp.com/predmeti/brojIspita/` +
                this.state.trenutnoLogovaniStudentID + "/sort"
            )
            .then(res => {
                if (res.data.success) {
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

export default withRouter(TabelaSortiranaPoBrojuIspita);