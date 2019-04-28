import React, { Component } from 'react';
import './CommonCss.css';

export class Options extends Component {
    render() {
      return(
        <div style={{ margin: '0px 0', padding: '15px'}}>
            <div class="card border-secondary mb-3">
                <div class="card-header">Više informacija:</div>
                <div class="card-body">
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action">Osoblje na predmetima</a>
                    <a href="#" class="list-group-item list-group-item-action">Podnošenje zahtjeva</a>
                </div>
                </div>
            </div>
        </div>
        );
    }
}


/**<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */