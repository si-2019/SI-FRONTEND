import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';


class UnosPrisustva extends Component {
    state = {
        studenti: [
            {
                index: 1,
                ime: "Neko Nekić",
                predavanje: true,
                vjezba: false,
                tutorijal: true
            },
            {
                index: 2,
                ime: "Himzo Polovina",
                predavanje: true,
                vjezba: false,
                tutorijal: true
            },
            {
                index: 3,
                ime: "Ivo Ivić",
                predavanje: false,
                vjezba: false,
                tutorijal: false
            },
            {
                index: 4,
                ime: "Medo Medić",
                predavanje: false,
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
                                    {student.predavanje && "DA"}
                                    {!student.predavanje && "NE"}
                                </td>
                                <td>
                                    {student.predavanje && "DA"}
                                    {!student.predavanje && "NE"}
                                </td>
                                <td>
                                    {student.predavanje && "DA"}
                                    {!student.predavanje && "NE"}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>   
        );
    }
  }
  
  export default UnosPrisustva;
