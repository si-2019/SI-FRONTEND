import React, { Component } from 'react';
import './CommonCss.css';
const selectCss = {
    display: 'block',
    'font-weight': '400',
    color: '#444',
    border: '1px solid #aaa',
    'border-radius': '5px',
    padding: '5px',
    margin: '10px 0'
};
export class Notifications extends Component {
    render() {
      return(
        <div style={{ padding: '15px' }}>
            <h6 style={{ margin: '15px 0px', color: 'white' }}>Obavještenja:</h6>
        
            <select class="form-control" style = { selectCss }>
                <option>Obavještenja profesora</option>
                <option>Obavještenja asistenata</option>
                <option>Obavještenja administratora</option>
                <option>Obavještenja o ispitima</option>
                <option>Obavještenja studentske službe</option>
                <option>Obrađeni zahtjevi</option>
                
            </select>
        
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">This content should be dynamically added</a>
                <a href="#" class="list-group-item list-group-item-action">This content should be dynamically added</a>
                <a href="#" class="list-group-item list-group-item-action">This content should be dynamically added</a>
                <a href="#" class="list-group-item list-group-item-action">This content should be dynamically added</a>
                <a href="#" class="list-group-item list-group-item-action">This content should be dynamically added</a>
            </div>
            <h6 style={{ margin: '15px 0px', color: 'white' }}>Rezultati ispita:</h6>
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">This content should be dynamically added</a>
                <a href="#" class="list-group-item list-group-item-action">This content should be dynamically added</a>
            </div>
        </div>
        /*here we should add "Upisane ocjene" div, when subjects grade is added into system */ 
        );
    }
}