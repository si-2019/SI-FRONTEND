import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'

class TabelaStudenti extends Component {
    render() {
      return (
        <Container>
          <div className="TabelaStudenti">
              <Table striped responsive bordered hover size="sm">
                  <thead>
                      <tr>
                      <th>#</th>
                      <th>Index</th>
                      <th>Ime i Prezime</th>
                      <th>Prisustvo</th>
                      <th>Zadaće</th>
                      <th>I parcijalni ispit</th>
                      <th>II parcijalni ispit</th>
                      <th>Usmeni ispit</th>
                      <th>Ukupno</th>
                      <th>Ocjena</th>
                      </tr>
                  </thead>
                  <tbody>
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
            </div>
          </Container>
        
      );
    }
  }
  
  export default TabelaStudenti;
