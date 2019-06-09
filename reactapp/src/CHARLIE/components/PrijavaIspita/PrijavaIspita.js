import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import IspitCard from "../SharedComponents/IspitCard";

class PrijavaIspita extends React.Component {
  state = { ispiti: [] };

  async componentDidMount() {
    //kad se uradi backend otkomentarisati..
    const ispiti = await axios.get("http://localhost:31903/ispiti");
    //Filter po predmetima koje slusa student
    //Za svaki entry nadji ime predmeta na osnovu id-a
    this.setState({ ispiti: ispiti.data });
  }

  render() {
    return (
      <div className="container">
        
        <div id="vrsteIspita" style={{alignItems: "left"}}>
        <IspitCard ispiti={this.state.ispiti} tipIspita="Prvi parcijalni ispit"/>
          {/*<IspitCard ispiti={this.state.ispiti} tipIspita="I parcijalni ispit"/>
          <IspitCard ispiti={this.state.ispiti} tipIspita="II parcijalni ispit"/>*/}
          <IspitCard ispiti={this.state.ispiti} tipIspita="Usmeni ispit" id="usmeniIspiti" />
          <IspitCard ispiti={this.state.ispiti} tipIspita="Integralni ispit" id="integralniIspit" />
          <IspitCard ispiti={this.state.ispiti} tipIspita="Uvid u radove" id="uvidURadove" />
        </div>
        <Link
          type="button"
          id="prijavljeniIspiti"
          className="btn btn-primary"
          style={{float: "right", marginTop: "10px"}}
          to="/charlie/prijavljeni-ispiti"
        >
          Prijavljeni ispiti
        </Link>
      </div>
    );
  }
}

export default PrijavaIspita;

