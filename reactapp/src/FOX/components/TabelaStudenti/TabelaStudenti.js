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
        console.log(this.state.studenti);
        return (
        <Container>
            <Table striped bordered hover size="sm" responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Index</th>
                    <th>Ime i Prezime</th>
                    <th>Prisustvo</th>
                    <th>Zadaće</th>
                    {
                        this.state.ispiti.map((ispit, i)=> {
                            return <th>{ispit.naziv}</th>
                        })
                    }
                    <th>Ukupno</th>
                    <th>Ocjena</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.studenti.map((student, i) => {
                            return <tr>
                                <td>{i+1}</td>
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
                    <tr>
                    <td>1</td>
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
        </Container>   
        );
    }
  }
  
  export default TabelaStudenti;
