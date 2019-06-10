import React, { Component } from 'react'
import Forma from './FormaOdsjek'

class DodajOdsjek extends Component {
    render () {
        return (
            <div className="dodajStudenta" style={{color: "#2C3E50"}}>
                <h1 style={{color: "#18BC9C"}}>Odsjek</h1>
                <Forma />
            </div>
        )
    }
}

export default DodajOdsjek