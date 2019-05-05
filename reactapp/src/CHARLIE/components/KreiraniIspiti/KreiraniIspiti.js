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
    return(
      <div>
        Kreirani ispiti
        
      </div>
    );
  }
}

export default KreiraniIspiti