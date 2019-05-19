import React from 'react'
import Modal from "../SharedComponents/Modal";
import axios from 'axios'
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";

class KreiraniIspiti extends React.Component{
  constructor () {
    super();

    this.state = {
      tableData: [
        {
          idIspit: '1',
          tipIspita: 'I parcijalni',
          termin: '04/04/2019'
        },
        {
          idIspit: '2',
          tipIspita: 'Usmeni',
          termin: '05/05/2019'
        }
      ],
      modalShow: false,
      idIspit:0
    };
}

toggleModal = (idIspit) => {
  this.setState({
    modalShow: !this.state.modalShow,
    idIspit: idIspit
  });
}

obrisiIspit = () => {
  this.setState({ tableData: this.state.tableData.filter(ispit => ispit.idIspit !== this.state.idIspit) });
  this.setState({
    modalShow: !this.state.modalShow
  });
}

state = {response:[]}

  async componentDidMount() {
    const ispiti = await axios.get("http://localhost:31903/ispiti");
    //Za svaki entry nadji ime predmeta na osnovu id-a
    this.setState({ tableData: ispiti.data });
  } 

  render(){
    const { tableData } = this.state;
    const columns=[
      {
        Header: () => <strong>Naziv predmeta</strong>,
        id: "idIspit",
        accessor: 'idIspit',
        minWidth: 80
      },
      {
        Header:  () => <strong>Tip ispita</strong>,
        id: "tipIspita",
        accessor: 'tipIspita',
        maxWidth: 200
      },
      {
        Header:  () => <strong>Datum ispita</strong>,
        id: "termin",
        accessor: d => {
          var t = new Date(d.termin);
          return t.toUTCString();
        },     
        minWidth: 80
      },
      {
        
        Header: '',
        Cell: row => (
          // U <div> ispod dodati dugmice
          <div>
            <Link
              type="button"
              id="btnStud"
              className="btn btn-primary"
              style={{ marginRight: "10%" }}
              to={`/charlie/pregled-studenata/${row.idIspit}`}
            >
              Studenti
            </Link>
            <Link
              type="button"
              id="btnUredi"
              className="btn btn-primary"
              style={{ marginRight: "10%" }}
              to={`/charlie/uredi-ispit/${row.idIspit}`}
            >
              Uredi
            </Link>
            <button
              type="button"
              id="btnIzbrisi"
              className="btn btn-danger"
              onClick={() => this.toggleModal(row.row.idIspit)}
            >
              Izbrisi
            </button>
              
          </div>
      )
    }]
    return(
      <div style={{paddingTop: "5%"}}>
         {!this.state.modalShow && <div>
          <h3 style={{textAlign: "left", marginLeft: "1%"}}>Kreirani ispiti</h3>
          <ReactTable 
            data={tableData}
            columns={columns} 
            defaultPageSize={5}
            style={{
              width: "98%",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center"
              
            }}
            className="-striped -highlight"
            id="tabelica"
        />
        <br />
        </div>}
        {this.state.modalShow && 
        <Modal onClose={this.toggleModal} onConfirm={
          this.obrisiIspit
        }>
         </Modal>} 
      </div>
    )
  }
}

export default KreiraniIspiti