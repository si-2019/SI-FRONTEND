import React, { Component } from 'react';
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
                              <a href="fox/StranicaPredmeta"> <h3>PREDMET 1</h3> </a>
                         </Card.Title>
                         <Card.Text>
                              <ul>                   
                                   <a href="fox/StranicaPredmeta"><li>Grupa1</li></a>
                                   <a href="fox/StranicaPredmeta"><li>Grupa2</li></a>
                                   <a href="fox/StranicaPredmeta"><li>Grupa3</li></a>
                                   <a href="fox/StranicaPredmeta"><li>Grupa4</li></a>
                                   <a href="fox/StranicaPredmeta"><li>Grupa5</li></a>
                                   <a href="fox/StranicaPredmeta"><li>Grupa6</li></a>
                                   <a href="fox/StranicaPredmeta"><li>Grupa7</li></a>
                              </ul>
                         </Card.Text>
                    </Card.Body>
               </Card>

               <Card style={{ width: '15rem', border: '.5px solid gray' }}>
                    <Card.Body>
                         <Card.Title>
                              <a href="fox/StranicaPredmeta"> <h3>PREDMET 2</h3> </a>
                         </Card.Title>
                         <Card.Text>
                              <ul>                   
                                   <a href="fox/StranicaPredmeta"><li>Grupa1</li></a>
                                   <a href="fox/StranicaPredmeta"><li>Grupa2</li></a>
                                   <a href="fox/StranicaPredmeta"><li>Grupa3</li></a>
                                   <a href="fox/StranicaPredmeta"><li>Grupa4</li></a>
                                   <a href="fox/StranicaPredmeta"><li>Grupa5</li></a>
                                   <a href="fox/StranicaPredmeta"><li>Grupa6</li></a>
                                   <a href="fox/StranicaPredmeta"><li>Grupa7</li></a>
                              </ul>
                         </Card.Text>
                    </Card.Body>
               </Card>

               <Card style={{ width: '15rem', border: '.5px solid gray' }}>
                    <Card.Body>
                         <Card.Title>
                              <a href="fox/StranicaPredmeta"> <h3>PREDMET 3</h3> </a>
                         </Card.Title>
                         <Card.Text>
                              <ul>                   
                                   <a href="fox/StranicaPredmeta"><li>Grupa1</li></a>
                                   <a href="fox/StranicaPredmeta"><li>Grupa2</li></a>
                                   <a href="fox/StranicaPredmeta"><li>Grupa3</li></a>
                                   <a href="fox/StranicaPredmeta"><li>Grupa4</li></a>
                                   <a href="fox/StranicaPredmeta"><li>Grupa5</li></a>
                                   <a href="fox/StranicaPredmeta"><li>Grupa6</li></a>
                                   <a href="fox/StranicaPredmeta"><li>Grupa7</li></a>
                              </ul>
                         </Card.Text>
                    </Card.Body>
               </Card>
               </CardColumns>
               {/*
                <div>
                    <div class="nav-item mr-auto">
                         <a href="fox/StranicaPredmeta"> <h3>PREDMET</h3></a>
                    </div>
                </div>
                <div>
                    <ul>                   
                    <div class="nav-item mr-auto">
                         <a href="fox/StranicaPredmeta"><li>Grupa1</li></a>
                    </div>
                    <div class="nav-item mr-auto">
                         <a href="fox/StranicaPredmeta"><li>Grupa2</li></a>
                    </div>
                    <div class="nav-item mr-auto">
                         <a href="fox/StranicaPredmeta"><li>Grupa3</li></a>
                    </div>
                    <div class="nav-item mr-auto">
                         <a href="fox/StranicaPredmeta"><li>Grupa4</li></a>
                    </div>
                    <div class="nav-item mr-auto">
                         <a href="fox/StranicaPredmeta"><li>Grupa5</li></a>
                    </div>
                    <div class="nav-item mr-auto">
                         <a href="fox/StranicaPredmeta"><li>Grupa6</li></a>
                    </div>
                    <div class="nav-item mr-auto">
                         <a href="fox/StranicaPredmeta"><li>Grupa7</li></a>
                    </div>

                    </ul>
                </div>
               */}
            </div>
        );
    }
}
 
export default Predmet;