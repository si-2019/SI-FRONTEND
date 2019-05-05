import React, {Component} from 'react'
import './golf.css'

class Odsjeci extends Component {
    render(){
        return(
            <div id="drugi">
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <a href='#'>Računarstvo i informatika</a>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <a href='#'>Automatika i elektronika</a>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <a href='#'>Elektroenergetika</a>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <a href='#'>Telekomunikacije</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Odsjeci