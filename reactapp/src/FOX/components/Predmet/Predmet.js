import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import './Predmet.css';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDeck from 'react-bootstrap/CardDeck';
import axios from 'axios';

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

          axios.get('http://localhost:31906/api/fox/predmeti/1').then(response => {
               this.setState({predmeti: response.data});
          });

          axios.get('http://localhost:31906/api/fox/grupe/1').then(response => {
               this.setState({grupe: response.data})
          });
     }

     render() {
          return (
               <div>
                    <CardDeck>
                         {this.state.predmeti.map(p => {
                              return (
                                   <Card key={p.naziv} style={{ width: '15rem', border: '0.5px solid gray' }} className="text-center">
                                        <Card.Body>
                                             <Card.Title>
                                                  <Link to="fox/stranicaPredmeta"> <h5>{p.naziv}</h5> </Link>
                                             </Card.Title>
                                             <Card.Text className="text-center">
                                                       {
                                                            this.state.grupe.map(g => <Link key={g.naziv} to="fox/stranicaPredmeta"> {g.naziv}<br/><br/> </Link>)
                                                       }
                                             </Card.Text>
                                        </Card.Body>
                                   </Card>
                              );
                         })}
                    </CardDeck>
               </div>
          );
     }
}
 
export default Predmet;