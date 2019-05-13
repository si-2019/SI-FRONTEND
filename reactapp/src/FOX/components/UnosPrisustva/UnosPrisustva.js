import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Dropdown } from 'react-bootstrap';


class UnosPrisustva extends Component {
    state = {
        studenti: [
            {
                index: 1,
                ime: "Neko Nekić",
                predavanje: null,
                vjezba: false,
                tutorijal: null
            },
            {
                index: 2,
                ime: "Himzo Polovina",
                predavanje: true,
                vjezba: null,
                tutorijal: true
            },
            {
                index: 3,
                ime: "Ivo Ivić",
                predavanje: null,
                vjezba: false,
                tutorijal: false
            },
            {
                index: 4,
                ime: "Medo Medić",
                predavanje: false,
                vjezba: false,
                tutorijal: false
            },
            {
                index: 5,
                ime: "Marko Marković",
                predavanje: null,
                vjezba: false,
                tutorijal: false
            }
        ]
    }

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Form>
                    <Form.Label>Unos prisustva za sve studente</Form.Label>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPredavanje">
                            <Form.Label>Predavanje</Form.Label>
                            <Form.Control as="select">
                                <option>Da</option>
                                <option>Ne</option>
                                <option>-</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridVjezba">
                            <Form.Label>Vježba</Form.Label>
                            <Form.Control as="select">
                                <option>Da</option>
                                <option>Ne</option>
                                <option>-</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTutorijal">
                            <Form.Label>Tutorijal</Form.Label>
                            <Form.Control as="select">
                                <option>Da</option>
                                <option>Ne</option>
                                <option>-</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                        Unesi
                    </Button>
                </Form>

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
                                            <Form.Control as="select" defaultValue={
                                                (student.predavanje && "Da") ||
                                                (!student.predavanje && student.predavanje !== null && "Ne") ||
                                                (student.predavanje === null && "-")
                                                }>
                                                <option>Da</option>
                                                <option>Ne</option>
                                                <option>-</option>
                                            </Form.Control>
                                        </td>
                                        <td>
                                            <Form.Control as="select" defaultValue={
                                                (student.vjezba && "Da") ||
                                                (!student.vjezba && student.vjezba !== null && "Ne") ||
                                                (student.vjezba === null && "-")
                                                }>
                                                <option>Da</option>
                                                <option>Ne</option>
                                                <option>-</option>
                                            </Form.Control>
                                        </td>
                                        <td>
                                            <Form.Control as="select" defaultValue={
                                                (student.tutorijal && "Da") ||
                                                (!student.tutorijal && student.tutorijal !== null && "Ne") ||
                                                (student.tutorijal === null && "-")
                                                }>
                                                <option>Da</option>
                                                <option>Ne</option>
                                                <option>-</option>
                                            </Form.Control>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div> 
        );
    }
  }
  
  export default UnosPrisustva;
