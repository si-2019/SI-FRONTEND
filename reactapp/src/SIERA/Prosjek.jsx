import React, { Component } from 'react';
import axios from "axios";

class Prosjek extends Component {
    constructor() {
        var id=1;
        if(window.localStorage.getItem("id")!=null && window.localStorage.getItem("id") != undefined){
            id=window.localStorage.getItem("id");
        }
        super();
        this.state = {
            StudentID: id,
            ukupanProsjek: 2.0,
            prosjekGodina: [],
            zimski: [],
            ljetni: []
        }
    }

    componentDidMount() {
        axios
            .get(
                `http://localhost:31918/prosjek/` +
                this.state.StudentID
            )
            .then(res => {
                const Store = [];
                Store.push(res.data);
                const uk = Store.map(obj => obj.ukupan);
                this.setState({ ukupanProsjek: uk });

                const prosjek = res.data.prosjeci.map(obj => obj.prosjekGodina);
                this.setState({ prosjekGodina: prosjek });


                const zimski = res.data.prosjeci.map(obj => obj.zimski);
                this.setState({ zimski: zimski });
                const ljetni = res.data.prosjeci.map(obj => obj.ljetni);
                this.setState({ ljetni });

            });
    }

    vratiGod = (provjeri, i) => {
        if (provjeri == 0) return;
        else return (


            <label style={{ textAlign: "left" }}>{++i}. godina: {provjeri}</label>


        )
    }
    vratiZimski = (provjeri, i) => {
        if (provjeri == 0) return;
        else return (

            <label style={{ textAlign: "left" }}>   Zimski semestar: {this.state.zimski[i]}</label>

        )
    }
    vratiLjetni = (provjeri, i) => {
        if (provjeri == 0) return;
        else return (


            <label style={{ textAlign: "left" }}>    Ljetni semestar: {this.state.ljetni[i]}</label>

        )
    }

    render() {
        return (
            <div className="container-fluid" style={{ height: "100%", marginTop: "30px" }}>
                <h2 style={{ marginBottom: "30px" }}>Prosjek</h2>
                <div className="card align-items-center">
                    <div className="card-body" style={{ minWidth: "100%" }}>
                        <div className="row justify-content-lg-around justify-content-md-center">
                            <div className="col-lg-4 col-sm-12 col-md-6 justify-content-sm-center ">
                                <div style={{ visibility: "hidden" }}>dssffds</div>
                                <h6 className="card-subtitle mb-2 text-muted">Ukupan prosjek ciklusa: </h6>
                                <label>{this.state.ukupanProsjek}</label>
                                <div style={{ visibility: "hidden" }}>dssffds</div>
                                <div style={{ visibility: "hidden" }}>dssffds</div>
                                <div>
                                    {this.state.prosjekGodina.map((prosjek, index) => (
                                        <div className="text-center">
                                            <div className="row" className="text-center" >
                                                {this.vratiGod(prosjek, index)}
                                            </div>
                                            <div className="row" className="text-center">
                                                {this.vratiZimski(prosjek, index)}
                                            </div>
                                            <div className="row" className="text-center">
                                                {this.vratiLjetni(prosjek, index)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Prosjek;
