import React, { Component } from "react";
import { Icon } from "@opuscapita/react-icons";
import { FormGroup, Table } from "@material-ui/core";

class OcjenjivanjeJednaZadaca extends Component {
 
    render() {
    return (
      <div>
                <div className="card-header bg-primary text-light">
                      <h4>
                        <b>{this.props.podaci.state.zadaca}</b> 
                        <Icon
                          type="indicator"
                          name="arrowLeft"
                          className="mr-2 bg-light float-right"
                          onClick = {this.props.podaci.handleBackNaJednaIzborZadace}
                        /><br/>
                        <b>{this.props.podaci.state.student}</b>
                      </h4>
                </div>
                <br/>
                <FormGroup className="px-4">
                    <Table className="table table-bordered text-center bg-active border-solid">
                        <thead>
                          <tr className="bg-primary text-light">
                            <th>INFO</th>
                            {this.props.podaci.state.zadaciZadace.map((zadatak, indeks) => (
                              <th key={zadatak + indeks}>{zadatak}</th>
                            ))}
                            <th>Ukupan broj bodova</th>
                            <th>Mogući bodovi</th>
                            <th>Postavka zadaće</th>
                            <th>Rok za predaju zadaće</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                           <th>{this.props.podaci.state.zadaca}</th>
                           
                           {this.props.podaci.state.ostvareniMoguci.map((ostvareniBodovi, indeks2) => ( 
                            <th key={ostvareniBodovi + indeks2}>{ostvareniBodovi}
                            {this.props.podaci.state.pregledana == false && <Icon type="indicator" name="attachment" className=" ml-3" onClick = {this.props.podaci.handleNaOcjenjivanjeJedanZadatak}/>}
                            {this.props.podaci.state.pregledana == true && <Icon type="indicator" name="ok" className=" ml-3" onClick = {this.props.podaci.handleNaOcjenjivanjeJedanZadatak}/>}
                            </th>
                           ))}
                          
                           <th>{this.props.podaci.state.sumaOsvojeni}</th>
                           <th>{this.props.podaci.state.sumaMoguci}</th>
                           <th>{<Icon type="indicator" name="save" className=" ml-3"/>}</th>
                           <th>{this.props.podaci.state.rokZaPredaju}</th>
                          </tr>
                        </tbody>
                        
                    </Table>
                </FormGroup>

          
      </div>
    );
  }
}

export default OcjenjivanjeJednaZadaca;
