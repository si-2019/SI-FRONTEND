import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class ProsjekPoGodinama extends Component {
  state = {};
  afterTabChanged() {
    this.refs.table1.forceUpdate();
  }
  render() {
    return (
      <div>
        <BootstrapTable ref="table1" data={this.props.state.predmeti}>
          <TableHeaderColumn dataField="predmet" isKey dataSort>
            Predmet
          </TableHeaderColumn>
          <TableHeaderColumn dataField="godina" dataSort>
            Akademska godina
          </TableHeaderColumn>
          <TableHeaderColumn dataField="ocjena">Ocjena</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default ProsjekPoGodinama;
