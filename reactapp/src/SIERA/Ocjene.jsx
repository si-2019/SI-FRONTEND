import React from "react";
import TabelaOcjene from "./TabelaOcjene";
import axios from "axios";

class Ocjene extends React.Component {

    constructor() {
        super();
        this.state = {
            dummyOcjene: [{
                AkademskaGodina: "2017",
                Ocjene: [{
                    Predmet: "lol",
                    Ocjena: "6"
                }]
            },
            {
                AkademskaGodina: "2017",
                Ocjene: [{
                    Predmet: "lol",
                    Ocjena: "6"
                }]
            },
            {
                AkademskaGodina: "2017",
                Ocjene: [{
                    Predmet: "lol",
                    Ocjena: "6"
                }]
            },
            {
                AkademskaGodina: "2017",
                Ocjene: [{
                    Predmet: "lol",
                    Ocjena: "6"
                }]
            },
            {
                AkademskaGodina: "2017",
                Ocjene: [{
                    Predmet: "lol",
                    Ocjena: "6"
                }]
            }],
            idStudenta: 1
        }
    }
    componentDidMount() {
        axios
            .get("http://localhost:31918/ocjene/" + this.state.idStudenta)
            .then(res => {
                this.setState({
                    dummyOcjene: res.data.ocjene
                })
                console.log(res.data.ocjene);
            })
            .catch(res => {
                console.log(res.error);
            });
    }
    render() {
        return (
            <div style={{ marginTop: "30px" }}>
                <h2 style={{ marginBottom: "30px" }}>Ocjene po godinama</h2>
                <div class="row" style={{ padding: "20px" }}>
                    {this.state.dummyOcjene.map((x, i) =>
                        <TabelaOcjene key={i}
                            ocj={x.Ocjene}
                            akGod={x.AkademskaGodina}
                        />)}
                </div>
            </div>
        );
    }
}

export default Ocjene;