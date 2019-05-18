import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './UnosPrisustvaForma.css';

function UnosPrisustvaForma(props) {
    const daStyle = {
        color: "white",
        background: "#28a745 "
    };
    const neStyle = {
        color: "white",
        background: "#dc3545"
    };

    return (
        <div>
            <Form onSubmit={props.handleSubmitSvi}>
                <Form.Row>
                    <Col sm={{span: 8, offset: 2}} style={{textAlign: "center"}}>
                        <h4>Unos prisustva za sve studente</h4>
                    </Col>
                </Form.Row>
                
                <Form.Row >
                    <Col></Col>
                    <Form.Group as={Col} sm={{span: 3}}>
                        <Form.Label>Predavanje</Form.Label>
                        <Form.Control
                            as="select"
                            name="predavanjeSvi"
                            value={props.data.predavanjeSvi}
                            style={props.data.predavanjeSvi === "da" ? daStyle : props.data.predavanjeSvi === "ne" ? neStyle : null}
                            onChange={props.handleChangeSvi}>
                            <option value="izaberiOpciju">Izaberi opciju</option>
                            <option value="da">Da</option>
                            <option value="ne">Ne</option>
                            <option value="-">-</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} sm={{span: 3}}>
                        <Form.Label>Vježba</Form.Label>
                        <Form.Control
                            as="select"
                            name="vjezbaSvi"
                            style={props.data.vjezbaSvi === "da" ? daStyle : props.data.vjezbaSvi === "ne" ? neStyle : null}
                            value={props.data.vjezbaSvi}
                            onChange={props.handleChangeSvi}>
                            <option value="izaberiOpciju">Izaberi opciju</option>
                            <option value="da">Da</option>
                            <option value="ne">Ne</option>
                            <option value="-">-</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} sm={{span: 3}}>
                        <Form.Label>Tutorijal</Form.Label>
                        <Form.Control
                            as="select"
                            style={props.data.tutorijalSvi === "da" ? daStyle : props.data.tutorijalSvi === "ne" ? neStyle : null}
                            name="tutorijalSvi"
                            value={props.data.tutorijalSvi}
                            onChange={props.handleChangeSvi}>
                            <option value="izaberiOpciju">Izaberi opciju</option>
                            <option value="da">Da</option>
                            <option value="ne">Ne</option>
                            <option value="-">-</option>
                        </Form.Control>
                    </Form.Group>
                    <Col></Col>
                </Form.Row>
                <Form.Row>
                    <Col style={{textAlign: "center"}} sm={{span: 4, offset: 4}}>
                        <Button     
                            variant="primary"
                            type="submit"
                            disabled={
                                props.data.predavanjeSvi === "izaberiOpciju" &&
                                props.data.vjezbaSvi === "izaberiOpciju" &&
                                props.data.tutorijalSvi === "izaberiOpciju" ? true : false}>
                            Ažuriraj tabelu
                        </Button>
                    </Col>
                </Form.Row>
            </Form>

            <br/>

            <Form onSubmit={props.onSubmit}>
                <Form.Row>
                    <Col sm={{span: 8, offset: 2}} style={{textAlign: "center"}}>
                        <h4>Unos prisustva pojedinačno</h4>
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Col sm={{offset: 1, span: 10}}>
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
                                    props.data.studenti.map((student, counter) =>
                                        <tr key={student.index}>
                                            <td>{counter + 1}</td>
                                            <td>{student.index}</td>
                                            <td>{student.ime}</td>
                                            <td>
                                                <Form.Control 
                                                    as="select"
                                                    style={student.predavanje === "da" ? daStyle : student.predavanje === "ne" ? neStyle : null}
                                                    name="predavanje"
                                                    value={student.predavanje}
                                                    onChange={(event) => {props.handleChange(event, student.index)}}>
                                                <option value="da">Da</option>
                                                <option value="ne">Ne</option>
                                                <option value="-">-</option>
                                                </Form.Control>
                                            </td>
                                            <td>
                                                <Form.Control
                                                    as="select"
                                                    style={student.vjezba === "da" ? daStyle : student.vjezba === "ne" ? neStyle : null}
                                                    name="vjezba"
                                                    value={student.vjezba}
                                                    onChange={(event) => {props.handleChange(event, student.index)}}>
                                                <option value="da">Da</option>
                                                <option value="ne">Ne</option>
                                                <option value="-">-</option>
                                                </Form.Control>
                                            </td>
                                            <td>
                                                <Form.Control
                                                    as="select"
                                                    style={student.tutorijal === "da" ? daStyle : student.tutorijal === "ne" ? neStyle : null}
                                                    name="tutorijal"
                                                    value={student.tutorijal}
                                                    onChange={(event) => {props.handleChange(event, student.index)}}>
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
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Col  style={{textAlign: "center"}} sm={{span: 4, offset: 4}}>
                    <Button variant="primary" type="submit">
                        Sačuvaj
                    </Button>
                    </Col>
                </Form.Row>

            </Form>
        </div>
    );
}

export default UnosPrisustvaForma;