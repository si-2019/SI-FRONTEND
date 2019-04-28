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


export class Subjects extends Component {
    render() {
      return(
        <div style={{ padding: '15px' }}>
            <h6 style={{ margin: '15px 0px', color: 'white' }}>Odabir opcije za prikazivanje:</h6>
        
            <select class="form-control" style = { selectCss }>
                <option>Trenutni predmeti</option>
                <option>Položeni predmeti</option>
                <option>Nepoloženi predmeti</option>
                <option>Arhivirani predmeti</option>
            </select>
        
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">This content should be dynamically added</a>
                <a href="#" class="list-group-item list-group-item-action">This content should be dynamically added</a>
                <a href="#" class="list-group-item list-group-item-action">This content should be dynamically added</a>
                <a href="#" class="list-group-item list-group-item-action">This content should be dynamically added</a>
                <a href="#" class="list-group-item list-group-item-action">This content should be dynamically added</a>
            </div>
        </div>
        );
    }
}
