import React from 'react'

import Modal3 from "../SharedComponents/Modal3";
import Modal2 from "../SharedComponents/Modal2";
import axios from 'axios'
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../SharedComponents/tabeleCharlie.css";
import { FormGroup, Table } from "reactstrap";
import PregledStudenata from "../PregledStudenata";

class KreiraniIspiti extends React.Component{
  constructor (...args) {
    super(...args);

    this.state = {
      ispiti: [
        {
          idIspit: '',
          idPredmet: '',
          tipIspita: '',
          termin: ''
        }
      ],

      modalShow: false,
      isEmptyState: false
    };
}



toggleModal = (idIspit) => {
  this.setState({
    modalShow: !this.state.modalShow,
    idIspit: idIspit
  });
}

togglePregled = (idIspit) => {
  this.setState({
    isEmptyState: !this.state.isEmptyState,
    idIspit: idIspit
  });
}

obrisiIspit = () => {
  this.setState({ ispiti: this.state.ispiti.filter(ispit => ispit.idIspit !== this.state.idIspit) });
  this.setState({
    modalShow: !this.state.modalShow
  });
}

saveState = (type, state, idIspit) => {
  switch (type) {
      case "modalShow":
          this.setState({
              modalShow: state,
              idIspit: idIspit
          });
          break;
          case "isEmptyState":
            this.setState({
              isEmptyState: state,
                idIspit: idIspit
            });
            break;
      default:
          break;
  }
}


state = {response:[]}

  async componentDidMount() {
    const profesorID = 250;
    const ispiti = await axios.get(`http://localhost:31903/kreiraniIspiti/${profesorID}`);
    //Za svaki entry nadji ime predmeta na osnovu id-a
    this.setState({ ispiti: ispiti.data });
  } 

  renderIspiti = () => {
    return this.state.ispiti.map(el => (
      <tr>
        <td class="tabtip1">{el.idPredmet}</td>
        <td class="tabtip1">{el.tipIspita}</td>
        <td class="tabtip1">{new Date(el.termin).toUTCString()}</td>
        <td  class="tabtip1">

        <Link
              type="button"
              id="btnStud"
              className="btn btn-primary"
              style={{ marginRight: "5px" }}
              onClick={() => this.togglePregled(el.idIspit)}
            >
              Studenti
            </Link>
            
    
         

            <Link
              type="button"
              id="btnUredi"
              class="btn btn-link"
              style={{ marginRight: "5px" }}
              onClick={() => this.toggleModal2(el.idIspit)}
            >
              Uredi
            </Link>
            <button
              type="button"

              id="btnIzbrisi"
              className="btn btn-primary"
              onClick={() => this.toggleModal(el.idIspit)}

            >
              Izbriši
            </button>
        </td>
      </tr>
    ));
  };

  render(){
    const { ispiti } = this.state;
   
    return(
      <div>


<div>
<FormGroup className="px-4" style={{marginTop: "16px"}}>
          <Table className="table table-bordered text-center bg-active border-solid">
            <thead>
              <tr className="bg-primary text-light">
                <th class="tabtip">Predmet</th>
                <th class="tabtip">Tip ispita</th>
                <th class="tabtip">Datum ispita</th>
                <th class="tabtip" />
              </tr>
            </thead>
            <tbody>{this.renderIspiti()}</tbody>
          </Table>
          </FormGroup> 
 
 
 

        <br />

        </div>
        <Modal2
                    saveState={this.saveState}
                    show={this.state.modalShow}
                    naslovModala="Jeste li sigurni da želite obrisati ispit?"
                    obrisiIspit={this.state}
                    btnPotvrdi="Potvrdi"
                    onConfirm={
                      this.obrisiIspit
                    }
                   onClose={this.toggleModal}

          />
      <Modal3
                    saveState={this.saveState}
                    show={this.state.isEmptyState}
                    naslovModala="Pregled studenata"
                    tijeloModala={<PregledStudenata />}
                    onClose={this.togglePregled}

          />
        </div>
    )
  }
}

export default KreiraniIspiti