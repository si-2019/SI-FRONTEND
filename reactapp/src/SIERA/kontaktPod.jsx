import React, { Component } from 'react';
import axios from 'axios';
import ModalComponent from "./ModalKontakt";
import {withRouter} from "react-router-dom";

class KontaktPod extends Component {

    constructor(props) {
        super(props);
        this.state = {
            StudentID: (window.localStorage.getItem("id") != null && window.localStorage.getItem("username") != null) ? window.localStorage.getItem("id") : 1,
            username: window.localStorage.getItem("username") != null ? window.localStorage.getItem("username") : "Neki user",
            token: window.localStorage.getItem("token"),
            adresa: "",
            email: "",
            brtel: "9426",
            modalShow: false,

        }
    }

    saveState = (type, state) => {
        switch (type) {
            case "modalShow":
                this.setState({
                    modalShow: state
                });
                break;
            case "podaciKontakt":
                this.setState(state, () => {
                    this.setState({
                        modalShow: false
                    });
                });
                break;
            default:
                break;

        }
    }
    handleGet = ()=>{
        axios
        .get(
            `http://localhost:31918/studenti/` +
            this.state.StudentID
        )
        .then(res => {

            const br = res.data.map(obj => obj.telefon);
            this.setState({ brtel: br });
            const eml = res.data.map(obj => obj.email);
            this.setState({ email: eml });
            const adr = res.data.map(obj => obj.adresa);
            this.setState({ adresa: adr });
        })
        .catch(err => {
            console.log(err);
        });
    }
    componentDidMount() {
        if (window.localStorage.getItem("id") != null) {
            var ajax = new XMLHttpRequest();
            ajax.onreadystatechange = () => {
                if (this.readyState == 4 && this.status == 200) {
                    //radi sta hoces
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
    render() {
        return (
            <>
                <h4 className="card-title">Kontakt podaci</h4>
                <div className="form-group">
                    <label className="col-form-label" htmlFor="inputDefault">Telefon</label>
                    <br></br>
                    <h4>{this.state.brtel}</h4>
                </div>
                <div className="form-group">
                    <label className="col-form-label" htmlFor="inputDefault">Adresa</label>
                    <br></br>
                    <h4>{this.state.adresa}</h4>
                </div>
                <div className="form-group">
                    <label className="col-form-label" htmlFor="inputDefault">Email</label>
                    <br></br>
                    <h4>{this.state.email}</h4>
                </div>

                <button type="button" className="btn btn-link" id="editBtn" onClick={() => this.setState({ modalShow: true })} >Edit</button>

                <ModalComponent
                    saveState={this.saveState}
                    show={this.state.modalShow}
                    naslovModala="Kontakt podaci"
                    podaciKontakt={this.state}
                />
            </>
        );
    }
}

export default withRouter(KontaktPod);
