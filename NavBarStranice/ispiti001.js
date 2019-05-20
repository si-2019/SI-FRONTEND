import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../Footer/Footer';
import Navbar001 from '../Navbar/Navbar001';
import {BootstrapTable,  TableHeaderColumn} from 'react-bootstrap-table';

function onSelectRow(row, isSelected, e) {
  if (isSelected) 
  {}
}
 

const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true,
  unselectable: [2],
  selected: [1],
  onSelect: onSelectRow,
};

class ispiti001 extends Component {
  render() {
    return (
      <div className="ispiti001">
        <Header/>
        <br></br>
        <h1>Stranica predmeta</h1>
        <br></br>
        <Navbar001/>
        <h1>FUNKCIONALNOST ZA ISPITI OPCIJU - cekamo podatke</h1>
        <BootstrapTable data={this.props.data} selectRow={selectRowProp}>
          <TableHeaderColumn isKey
                             dataField='id'
                             dataAlign='center'
                             headerAlign="center"
                             width="20%">
            Naziv
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'
                             dataAlign='center'
                             headerAlign="center"
                             width="20%">
             Tip
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'
                             dataAlign='center'
                             headerAlign="center"
                             width="20%">
            Datum
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'
                             dataAlign='center'
                             headerAlign="center"
                             width="20%">
            Sala
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'
                             dataAlign='center'
                             headerAlign="center"
                             width="20%">
            Br.Studenata
          </TableHeaderColumn>
        </BootstrapTable>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey
                             dataField='id'
                             dataAlign='center'
                             headerAlign="center"
                             width="10%">
            Index
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'
                             dataAlign='center'
                             headerAlign="center"
                             width="10%">
             Ime i Prezime
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'
                             dataAlign='center'
                             headerAlign="center"
                             width="10%">
            Prisustvo
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'
                             dataAlign='center'
                             headerAlign="center"
                             width="10%">
            Zadace
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'
                             dataAlign='center'
                             headerAlign="center"
                             width="10%">
            I. Parcijalni datum
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'
                             dataAlign='center'
                             headerAlign="center"
                             width="10%">
            II. Parcijalni datum
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'
                             dataAlign='center'
                             headerAlign="center"
                             width="10%">
            Usmeni datum
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'
                             dataAlign='center'
                             headerAlign="center"
                             width="10%">
            Ukupno
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'
                             dataAlign='center'
                             headerAlign="center"
                             width="10%">
            Ocjena
          </TableHeaderColumn>
        </BootstrapTable>
         <button onClick={this.clicked}>Nazad na Pocetnu</button>
        <Footer/>
      </div>
    );
  }
}

export default ispiti001;
