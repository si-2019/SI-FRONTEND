import React from "react";
import TabelaOcjene from "./TabelaOcjene";
import axios from "axios";

class Ocjene extends React.Component {

    constructor() {
        super();
        this.state = {
            dummyOcjene: [],
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
            <div class="row" style={{ padding: "20px" }}>
                {this.state.dummyOcjene.map((x,i) =>
                    <TabelaOcjene key={i}
                        ocj={x[0].Ocjene}
                        akGod={x[0].AkademskaGodina}
                    />)}
            </div>

        );
    }
}

export default Ocjene;