import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import './Predmet.css';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';

class Predmet extends Component {
     state = {
          predmeti: [
               {naziv: "Tehnike programiranja"},
               {naziv: "Numerički algoritmi"},
               {naziv: "Diskretna matematika"}
          ],
          grupe: [
               {naziv: "Grupa 1"},
               {naziv: "Grupa 2"},
               {naziv: "Grupa 3"}
          ]
     }

     componentDidMount() {
          // Privremeno rješnje

          axios.get('http://localhost:31906/api/fox/predmeti/255').then(response => {
               this.setState({predmeti: response.data});
          });

          axios.get('http://localhost:31906/api/fox/grupe/1').then(response => {
               this.setState({grupe: response.data})
          });
     }

     render() {
          return (
               <div>

                    <Container fluid>
                         <Row style={{margin: "0"}} className="justify-content-md-center">
                         {this.state.predmeti.map(p => {
                              return (
                                   <div as={Col} class="card" key={p.naziv} style={{maxWidth: "300px", margin: "5px"}}>
                                        <div class="card-body">
                                             <h4 class="card-title text-center"><a href={`fox/stranicaPredmeta?predmetId=${p.naziv}`} style={{color: "primary"}}> {p.naziv} </a></h4>
                                             <h6 class="card-subtitle mb-2 text-muted">Broj studenata: 150</h6>
                                        </div>
                                        <div class="list-group list-group-flush">
                                             {
                                                  this.state.grupe.map(g => <a class="list-group-item list-group-item-action" key={g.naziv} href={`fox/stranicaPredmeta?predmetId=${p.naziv}?${g.naziv}`}> {g.naziv} </a>)
                                             }
                                        </div>
                                   </div>
                              );
                         })}
                         </Row>
                    </Container>

               </div> 
          );
     }
}
 
export default Predmet;