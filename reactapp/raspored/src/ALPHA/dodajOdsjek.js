import React, { Component } from 'react'
import Forma from './FormaOdsjek'

class DodajOdsjek extends Component {
    render () {
        return (
            <div className="dodajStudenta">
                <h1>Odsjek</h1>
                <Forma />
            </div>
        )
    }
}

export default DodajOdsjek