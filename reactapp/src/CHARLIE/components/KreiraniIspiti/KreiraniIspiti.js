import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";


class KreiraniIspiti extends React.Component{
  
  constructor () {
    super();

    this.state = {
        tableData: [{
            idIspit: '',
            tipIspita: '',
            termin: ''
        }],
    };
}

state = {response:[]}

  async componentDidMount() {
    const ispiti = await axios.get("http://localhost:31903/ispiti");
    //Za svaki entry nadji ime predmeta na osnovu id-a
    this.setState({ tableData: ispiti.data });
  } 
 
  render() {
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
        maxWidth: 150
      },
      {
        
        Header: '',
        Cell: row => (
          // U <div> ispod dodati dugmice
          <div>
            
             
          </div>
      )
    }]
    return(
      <div style={{paddingTop: "5%"}}>
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
      </div>
    );
  }
}

export default KreiraniIspiti