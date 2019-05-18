import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class UnosPrisustva extends React.Component {
    state = {
        studenti: [
            {
                index: 1,
                ime: "Neko Nekić",
                predavanje: "da",
                vjezba: "ne",
                tutorijal: "-"
            },
            {
                index: 2,
                ime: "Himzo Polovina",
                predavanje: "da",
                vjezba: "-",
                tutorijal: "da"
            },
            {
                index: 3,
                ime: "Ivo Ivić",
                predavanje: "-",
                vjezba: "ne",
                tutorijal: "ne"
            },
            {
                index: 4,
                ime: "Medo Medić",
                predavanje: "ne",
                vjezba: "ne",
                tutorijal: "ne"
            },
            {
                index: 5,
                ime: "Marko Marković",
                predavanje: "-",
                vjezba: "ne",
                tutorijal: "da"
            }
        ],
        predavanjeSvi: "izaberiOpciju",
        vjezbaSvi: "izaberiOpciju",
        tutorijalSvi: "izaberiOpciju"
    }

    constructor(props) {
        super(props);
    }

    handleChangeSvi = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleSubmitSvi = (event) => {
        event.preventDefault();
        let s = this.state.studenti.map(student => {
            return {
                ...student,
                predavanje: this.state.predavanjeSvi !== "izaberiOpciju" ? this.state.predavanjeSvi : student.predavanje,
                vjezba: this.state.vjezbaSvi !== "izaberiOpciju" ? this.state.vjezbaSvi : student.vjezba,
                tutorijal: this.state.tutorijalSvi !== "izaberiOpciju" ? this.state.tutorijalSvi : student.tutorijal
            }
        });
        this.setState({
            studenti: s,
            predavanjeSvi: "izaberiOpciju",
            vjezbaSvi: "izaberiOpciju",
            tutorijalSvi: "izaberiOpciju"
        });
    }

    handleChange = (event, index) => {
        const {name, value} = event.target;
        this.setState(prevState => {
            return {
                ...prevState,
                studenti: prevState.studenti.map(student => {
                    if(student.index === index)
                        return {
                            ...student,
                            [name]: value
                        };
                    return student;
                })
            }
        })
    }

    handleSubmit = () => {
        // Pripremiti sve podatke i poslati backendu u odgovarajućem formatu
    }
    
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmitSvi}>
                    <Form.Label>Unos prisustva za sve studente</Form.Label>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPredavanje">
                            <Form.Label>Predavanje</Form.Label>
                            <Form.Control as="select" name="predavanjeSvi" value={this.state.predavanjeSvi} onChange={this.handleChangeSvi}>
                                <option value="izaberiOpciju">Izaberi opciju</option>
                                <option value="da">Da</option>
                                <option value="ne">Ne</option>
                                <option value="-">-</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridVjezba">
                            <Form.Label>Vježba</Form.Label>
                            <Form.Control as="select" name="vjezbaSvi" value={this.state.vjezbaSvi} onChange={this.handleChangeSvi}>
                                <option value="izaberiOpciju">Izaberi opciju</option>
                                <option value="da">Da</option>
                                <option value="ne">Ne</option>
                                <option value="-">-</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTutorijal">
                            <Form.Label>Tutorijal</Form.Label>
                            <Form.Control as="select" name="tutorijalSvi" value={this.state.tutorijalSvi} onChange={this.handleChangeSvi}>
                                <option value="izaberiOpciju">Izaberi opciju</option>
                                <option value="da">Da</option>
                                <option value="ne">Ne</option>
                                <option value="-">-</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Button 
                        variant="primary"
                        type="submit"
                        disabled={
                            this.state.predavanjeSvi === "izaberiOpciju" &&
                            this.state.vjezbaSvi === "izaberiOpciju" &&
                            this.state.tutorijalSvi === "izaberiOpciju" ? true : false}>
                        Ažuriraj tabelu
                    </Button>
                </Form>

                <Form onSubmit={this.onSubmit}>
                    <Table striped bordered hover size="sm" responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Index</th>
                                <th>Ime i Prezime</th>
                                <th>Predavanje</th>
                                <th>Vježba</th>
                                <th>Tutorijal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.studenti.map((student, counter) =>
                                    <tr key={student.index}>
                                        <td>{counter + 1}</td>
                                        <td>{student.index}</td>
                                        <td>{student.ime}</td>
                                        <td>
                                            <Form.Control as="select" name="predavanje" value={student.predavanje}
                                                onChange={(event) => {this.handleChange(event, student.index)}}>
                                            <option value="da">Da</option>
                                            <option value="ne">Ne</option>
                                            <option value="-">-</option>
                                            </Form.Control>
                                        </td>
                                        <td>
                                            <Form.Control as="select" name="vjezba" value={student.vjezba}
                                                onChange={(event) => {this.handleChange(event, student.index)}}>
                                            <option value="da">Da</option>
                                            <option value="ne">Ne</option>
                                            <option value="-">-</option>
                                            </Form.Control>
                                        </td>
                                        <td>
                                            <Form.Control as="select" name="tutorijal" value={student.tutorijal}
                                                onChange={(event) => {this.handleChange(event, student.index)}}>
                                            <option value="da">Da</option>
                                            <option value="ne">Ne</option>
                                            <option value="-">-</option>
                                            </Form.Control>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                    
                    <Button variant="primary" type="submit">
                        Sačuvaj
                    </Button>

                </Form>
            </div> 
        );
    }
  }
  
  export default UnosPrisustva;
