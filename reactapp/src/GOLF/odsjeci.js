import React, { Component } from 'react'

class Smjer extends Component {
    render(){
        return(
            <div id="drugi">
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center" onClick = {() => this.Otvori(1)}>
                        Računarstvo i informatika
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Automatika i elektronika
                    </li>
                </ul>
            </div>
        )
    }
}
