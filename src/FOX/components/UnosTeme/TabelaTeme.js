import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';



class TabelaStudenti extends Component {
    constructor(props) {
        super(props);
        this.state = {teme: []};
        this.izmjeniTemu = this.izmjeniTemu.bind(this);
        this.izbrisiTemu = this.izbrisiTemu.bind(this);
    }
    izmjeniTemu(event, id) {
        console.log("Funkcija izmjeni je pozvana " + id);
        event.preventDefault();
        event.stopPropagation();
    }
    
    izbrisiTemu(event, id) {
        console.log("Funkcija izbrisi je pozvana " + id);
        axios.delete('http://localhost:31906/api/fox/temeZavrsnih/izbrisiTemu/'+id) //idPredmeta kao parametar
            .catch( (err) => {
                console.log(err);
                event.preventDefault();
                event.stopPropagation();
            }     
            );
    }

    componentDidMount() {
        //Promise
        axios.get('http://localhost:31906/api/fox/temeZavrsnih/tabelaTemeZavsnih/64') //idPredmeta kao parametar iz local storega
            .then(
                res => this.setState({teme: res.data})
            );
    }

    render() {
        return (
            <Table striped bordered size="sm" responsive>
                <thead>
                    <tr className="table-primary" hover="false">
                    <th scope="row">#</th>
                    <th>Naziv</th>
                    <th>Opis</th>
                    <th>Odabrana</th>
                    <th>Student</th>
                    <th> </th>
                    <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.teme.map((teme, i) => {
                            return <tr className="table-light" hover="false" key={teme.id}>
                                <td scope="row">{i+1}</td>
                                <td>{teme.naziv}</td>
                                <td>{teme.opis}</td>
                                <td>{teme.odabrana}</td>
                                <td>{teme.student}</td>
                                <td><Form><Button variant="primary" href={"izmjenaTeme/"+teme.id+"/"+teme.naziv+"/"+teme.opis}>Izmjeni</Button></Form></td>
                                <td><Form onSubmit={(e) => this.izbrisiTemu(e, teme.id)}>
                                    <Button variant="danger" type="submit">Izbriši</Button>
                                    </Form>
                                </td>
                            </tr>
                            
                        })
                    }

                    <tr className="table-light" hover="false">
                        <td scope="row">0</td>
                        <td>Naziv</td>
                        <td>Opis</td>
                        <td>Da</td>
                        <td>Neko Nekic</td>
                        <td><Form><Button variant="primary" href="#">Izmjeni</Button></Form></td>
                        <td><Form onSubmit={(e) => this.izbrisiTemu(e, 0)}>
                            <Button variant="danger" type="submit">Izbriši</Button>
                            </Form>
                        </td>
                    </tr>
                    
                </tbody>
            </Table>   
        );
    }
  }
  
  export default TabelaStudenti;