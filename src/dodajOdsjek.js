import React, { Component } from 'react'
import Forma from './FormaOdsjek'

class DodajOdsjek extends Component {
    render () {
        return (
            <div className="dodajStudenta" style={{color: "#2C3E50"}} id="content">
                <h1 style={{color: "#fff", background: "#2C3E50"}} id="h1">Odsjek</h1>
                <Forma />
            </div>
        )
    }
}

export default DodajOdsjek