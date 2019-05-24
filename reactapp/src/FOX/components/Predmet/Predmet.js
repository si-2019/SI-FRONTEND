import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import './Predmet.css';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

class Predmet extends Component {
    state = {  }
    render() { 
        return (
            <div>
               <CardColumns>
               <Card style={{ width: '15rem', border: '0.5px solid gray' }}>
                    <Card.Body>
                         <Card.Title>
                              <Link to="fox/stranicaPredmeta"> <h3>PREDMET 1</h3> </Link>
                         </Card.Title>
                         <Card.Text>
                              <ul>                   
                                   <Link to="fox/stranicaPredmeta"><li>Grupa1</li></Link>
                                   <Link to="fox/stranicaPredmeta"><li>Grupa2</li></Link>
                                   <Link to="fox/stranicaPredmeta"><li>Grupa3</li></Link>
                                   <Link to="fox/stranicaPredmeta"><li>Grupa4</li></Link>
                                   <Link to="fox/stranicaPredmeta"><li>Grupa5</li></Link>
                                   <Link to="fox/stranicaPredmeta"><li>Grupa6</li></Link>
                                   <Link to="fox/stranicaPredmeta"><li>Grupa7</li></Link>
                              </ul>
                         </Card.Text>
                    </Card.Body>
               </Card>

               <Card style={{ width: '15rem', border: '0.5px solid gray' }}>
                    <Card.Body>
                         <Card.Title>
                              <Link to="fox/stranicaPredmeta"> <h3>PREDMET 2</h3> </Link>
                         </Card.Title>
                         <Card.Text>
                              <ul>                   
                                   <Link to="fox/stranicaPredmeta"><li>Grupa1</li></Link>
                                   <Link to="fox/stranicaPredmeta"><li>Grupa2</li></Link>
                                   <Link to="fox/stranicaPredmeta"><li>Grupa3</li></Link>
                                   <Link to="fox/stranicaPredmeta"><li>Grupa4</li></Link>
                                   <Link to="fox/stranicaPredmeta"><li>Grupa5</li></Link>
                                   <Link to="fox/stranicaPredmeta"><li>Grupa6</li></Link>
                                   <Link to="fox/stranicaPredmeta"><li>Grupa7</li></Link>
                              </ul>
                         </Card.Text>
                    </Card.Body>
               </Card>

               <Card style={{ width: '15rem', border: '0.5px solid gray' }}>
                    <Card.Body>
                         <Card.Title>
                              <Link to="fox/stranicaPredmeta"> <h3>PREDMET 3</h3> </Link>
                         </Card.Title>
                         <Card.Text>
                              <ul>                   
                                   <Link to="fox/stranicaPredmeta"><li>Grupa1</li></Link>
                                   <Link to="fox/stranicaPredmeta"><li>Grupa2</li></Link>
                                   <Link to="fox/stranicaPredmeta"><li>Grupa3</li></Link>
                                   <Link to="fox/stranicaPredmeta"><li>Grupa4</li></Link>
                                   <Link to="fox/stranicaPredmeta"><li>Grupa5</li></Link>
                                   <Link to="fox/stranicaPredmeta"><li>Grupa6</li></Link>
                                   <Link to="fox/stranicaPredmeta"><li>Grupa7</li></Link>
                              </ul>
                         </Card.Text>
                    </Card.Body>
               </Card>
               </CardColumns>
            </div>
        );
    }
}
 
export default Predmet;