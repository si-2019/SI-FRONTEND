import React, { Component } from "react";
import { FormGroup, Table } from "reactstrap";
import { Icon } from '@opuscapita/react-icons';

class TabelaPregledaZadaca extends Component {

    render() { 
    var mogucaStanjaZadace = ["nije poslano", "nije pregledano", "pregledano", "prepisano", "komentar"];
        
    return (
      <div>
        <FormGroup className="px-4">
            <Table  className="table table-bordered text-center bg-active border-solid">
            <thead>
              <tr className="bg-primary text-light">
                <th>INFO</th>
                {this.props.podaci.state.listaZadataka.map((zadatak, indeks) => (
                  <th key={zadatak + indeks}>{zadatak}</th>
                ))}
                <th>Ukupan broj bodova</th>
                <th>Mogući bodovi</th>
                <th>Postavka zadaće</th>
                <th>Rok za predaju zadaće</th>
              </tr>
            </thead>
            <tbody>
                {this.props.podaci.state.listaZadaca.map((zadatak, indeks) => (
                  <tr>
                    <th>{zadatak}</th>
                    {this.props.podaci.state.potrebno[indeks].map((ostvareniBodovi, indeks2) => (
                        <th>{ostvareniBodovi}  
                        {this.props.podaci.state.stanjeZadacaPoZadacima[indeks][indeks2] == 0 && <Icon type="indicator" name="attachment"  className=" ml-3" onClick = {() => this.props.podaci.klikNaPoslati(indeks, indeks2)}/>}  
                        {this.props.podaci.state.stanjeZadacaPoZadacima[indeks][indeks2] == 1 && <Icon type="indicator" name="search" className=" ml-3"/>}  
                        {this.props.podaci.state.stanjeZadacaPoZadacima[indeks][indeks2] == 2 && <Icon type="indicator" name="ok" className=" ml-3"/>}  
                        {this.props.podaci.state.stanjeZadacaPoZadacima[indeks][indeks2] == 3 && <Icon type="indicator" name="error" className=" ml-3"/>}
                        {this.props.podaci.state.stanjeZadacaPoZadacima[indeks][indeks2] == 4 && <Icon type="indicator" name="commented" className=" ml-3"/>}
                        </th>
                    ))}
                    <th>{this.props.podaci.state.ukupnoBodova[indeks]}</th>
                    <th>{this.props.podaci.state.moguceBodova[indeks]}</th>
                    <th>{<Icon type="indicator" name="save" className=" ml-3"/>}</th>
                    <th>{this.props.podaci.state.rokZaPredaju[indeks]}</th>
                  </tr>
                ))}
            </tbody>
            </Table>
        </FormGroup>
      </div>
    );
  }
}

export default TabelaPregledaZadaca;
