import React, { Component } from "react";
import { FormGroup, Table } from "reactstrap";
import { Icon } from '@opuscapita/react-icons';

class TabelaPregledaZadaca extends Component {
    constructor(props) {
        super(props);
        this.state = {
          listaZadaca: ["Zadaća 1", "Zadaća 2", "Zadaća 3", "Zadaća 4"],
          listaZadataka: ["Zadatak 1", "Zadatak 2", "Zadatak 3"],
          maxBodoviPoZadacimaPoZadacama: [[2,3,4],[1,2,3],[1,2,3],[1,1,3]],
          bodoviPoZadacimaZadaca: [[2,3,4],[1,0,3],[1,2,3],[0,0,3]],
          potrebno: [[],[],[],[]],
          ukupnoBodova: [],
          moguceBodova: [],
          postavka: [],
          rokZaPredaju: ["2020-12-01 23:59","2020-12-01 23:59","2020-12-01 23:59","2020-12-01 23:59"],
          stanjeZadacaPoZadacima: [[0,0,0],[2,2,2],[3,4,0],[1,1,1]]
        } 
    }

    obracunBodova = () => {
        var arr = new Array(this.state.bodoviPoZadacimaZadaca.length);
 
        for (var i = 0; i < this.state.bodoviPoZadacimaZadaca.length; i++) {
            arr[i] = new Array(this.state.bodoviPoZadacimaZadaca[i].length);
        }

        var pomocniUkupno = [];
        var pomocniMoguce = [];
        
        for(var i=0; i<this.state.bodoviPoZadacimaZadaca.length; i++){
            var zbirUkupno=0;
            var zbirMoguce=0;
            for(var j=0; j<this.state.bodoviPoZadacimaZadaca[i].length; j++){
                arr[i][j] = this.state.bodoviPoZadacimaZadaca[i][j] + "/" + this.state.maxBodoviPoZadacimaPoZadacama[i][j];
                zbirUkupno = zbirUkupno + this.state.bodoviPoZadacimaZadaca[i][j];
                zbirMoguce = zbirMoguce + this.state.maxBodoviPoZadacimaPoZadacama[i][j];
            }
            pomocniUkupno.push(zbirUkupno);
            pomocniMoguce.push(zbirMoguce);

        }
      
        this.setState({
            potrebno: arr,
            ukupnoBodova: pomocniUkupno,
            moguceBodova: pomocniMoguce
        });
        
    }

    componentDidMount = () => {
        this.obracunBodova();
        
    }

    render() { 
    var mogucaStanjaZadace = ["nije poslano", "nije pregledano", "pregledano", "prepisano", "komentar"];
        
    return (
      <div>
        <FormGroup className="px-4">
            <Table  className="table table-bordered text-center bg-active border-solid">
            <thead>
              <tr className="bg-primary text-light">
                <th>INFO</th>
                {this.state.listaZadataka.map((zadatak, indeks) => (
                  <th key={zadatak + indeks}>{zadatak}</th>
                ))}
                <th>Ukupan broj bodova</th>
                <th>Mogući bodovi</th>
                <th>Postavka zadaće</th>
                <th>Rok za predaju zadaće</th>
              </tr>
            </thead>
            <tbody>
                {this.state.listaZadaca.map((zadatak, indeks) => (
                  <tr>
                    <th>{zadatak}</th>
                    {this.state.potrebno[indeks].map((ostvareniBodovi, indeks2) => (
                        <th>{ostvareniBodovi}  
                        {this.state.stanjeZadacaPoZadacima[indeks][indeks2] == 0 && <Icon type="indicator" name="attachment"  className=" ml-3"/>}  
                        {this.state.stanjeZadacaPoZadacima[indeks][indeks2] == 1 && <Icon type="indicator" name="search" className=" ml-3"/>}  
                        {this.state.stanjeZadacaPoZadacima[indeks][indeks2] == 2 && <Icon type="indicator" name="ok" className=" ml-3"/>}  
                        {this.state.stanjeZadacaPoZadacima[indeks][indeks2] == 3 && <Icon type="indicator" name="error" className=" ml-3"/>}
                        {this.state.stanjeZadacaPoZadacima[indeks][indeks2] == 4 && <Icon type="indicator" name="commented" className=" ml-3"/>}
                        </th>
                    ))}
                    <th>{this.state.ukupnoBodova[indeks]}</th>
                    <th>{this.state.moguceBodova[indeks]}</th>
                    <th>{<Icon type="indicator" name="save" className=" ml-3"/>}</th>
                    <th>{this.state.rokZaPredaju[indeks]}</th>
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
