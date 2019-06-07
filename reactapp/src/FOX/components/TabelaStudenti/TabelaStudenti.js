import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import './table.css'
import axios from 'axios';



class TabelaStudenti extends Component {
    state = {
        studenti: [],
        ispiti: []
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //Promise
        axios.get('http://localhost:31906/api/fox/tabelaStudenti')
            .then(
                res => this.setState({studenti: res.data})
            );

        axios.get('http://localhost:31906/api/fox/tabelaStudenti/ispiti')
            .then(
                res => this.setState({ispiti: res.data})
            );
    }
    
    render() {
        let listaIspita = [];
        if (this.state.ispiti.length == 0) {
            listaIspita = [
                <th>Prvi parcijalni ispit</th>,
                <th>Drugi parcijalni ispit</th>,
                <th>Usmeni ispit</th>,
            ];
        }
        else {
            this.state.ispiti.map((ispit, i)=> {
                listaIspita.push(<th>{ispit.naziv}</th>);
               // return <th>{ispit.naziv}</th>
            })
        }
        return (
            <Table striped bordered hover size="sm" responsive>
                <thead>
                    <tr className="table-primary" hover="false">
                    <th scope="row">#</th>
                    <th>Index</th>
                    <th>Ime i Prezime</th>
                    <th>Prisustvo</th>
                    <th>Zadaće</th>
                    {listaIspita}
                    <th>Ukupno</th>
                    <th>Ocjena</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.studenti.map((student, i) => {
                            return <tr className="table-primary" hover="false" key={student.index}>
                                <td scope="row" >{i+1}</td>
                                <td>{student.index}</td>
                                <td>{student.imePrezime}</td>
                                <td>{student.prisustvo}</td>
                                <td>{student.zadace}</td>
                                {/*ispiti*/
                                    student.ispiti.map((ispit, i) => {
                                        return <td>{ispit.bodovi}</td>
                                    })
                                }
                                <td>{student.ukupno}</td>
                                <td>{student.ocjena}</td>
                            </tr>
                            
                        })
                    }
                    <tr className="table-primary" hover="false">
                    <td scope="row">1</td>
                    <td>12345</td>
                    <td>Ime Prezime</td>
                    <td>10</td>
                    <td>10</td>
                    <td>15</td>
                    <td>15</td>
                    <td>20</td>
                    <td>70</td>
                    <td>7</td>
                    </tr>
                </tbody>
            </Table>   
        );
    }
  }
  
  export default TabelaStudenti;
