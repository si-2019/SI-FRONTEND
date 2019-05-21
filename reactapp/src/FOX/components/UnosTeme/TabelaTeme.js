import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

class TabelaStudenti extends Component {
    state = {
        teme: [
           /* {
                id: 1,
                naziv: "Tema1",
                opis: "Opis teme",
                odabrana: 1,
                student: "Neko Nekić"
            },
            {
                id: 2,
                naziv: "Tema2",
                opis: "Opis teme",
                odabrana: 0,
                student: "Neko Nekić"
            },
            {
                id: 3,
                naziv: "Tema3",
                opis: "Opis teme",
                odabrana: 1,
                student: "Neko Nekić"
            }*/
        ]
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //Promise
        axios.get('http://localhost:31906/api/fox/temeZavrsnih/tabelaTemeZavsnih/1') //idPredmeta kao parametar
            .then(
                res => this.setState({teme: res.data})
            );
    }
    
    render() {
        return (
            <Table striped bordered hover size="sm" responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Naziv</th>
                    <th>Opis</th>
                    <th>Odabrana</th>
                    <th>Student</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.teme.map((teme, i) => {
                            return <tr key={teme.id}>
                                <td>{i+1}</td>
                                <td>{teme.naziv}</td>
                                <td>{teme.opis}</td>
                                <td>{teme.odabrana}</td>
                                <td>{teme.student}</td>
                               
                            </tr>
                            
                        })
                    }
                    
                </tbody>
            </Table>   
        );
    }
  }
  
  export default TabelaStudenti;
