import React, { Component } from 'react'
import axios from 'axios'
import BodoviNaIspitu from '../BodoviNaIspitu/BodoviNaIspitu'

export class BodoviNaIspitima extends Component {

    state = {
        //Izbrisati hardkodirano kad se dobiju podaci sa servera
        rezIspita:[
            {
                tip: "I parcijalni",
                datum: new Date().getDay() + '.' + new Date().getMonth() + '.' + new Date().getFullYear() + '.',
                bodovi: 12,
                polozen: true
            },
            {
                tip: "II parcijalni",
                datum: new Date().getDay() + '.' + new Date().getMonth() + '.' + new Date().getFullYear() + '.',
                bodovi: 9,
                polozen: false
            },
            {
                tip: "II parcijalni",
                datum: new Date().getDay() + '.' + new Date().getMonth() + '.' + new Date().getFullYear() + '.',
                bodovi: 13,
                polozen: true
            }
        ]
    }

    componentDidMount(){
        var urlModula = 'ovdje pasteat url modula koji vraca podatke o ispitima';
        //kad se dobiju rezultati uzeti samo one za ovaj predmet
        //axios.get(urlModula).then(res=>this.setState({todos:res.data}))
    }

  render() {
    return <div style = {ispitiStyle}>
    <h3>Bodovi na ispitima:</h3>
    {this.state.rezIspita.map((ispit)=>(
        <BodoviNaIspitu 
            tip = {ispit.tip} 
            datum = {ispit.datum}
            bodovi = {ispit.bodovi} 
            polozen = {ispit.polozen}
        />
    ))};</div>
  }
}

const ispitiStyle = {
    border: '1px solid black',
    background: 'cyan',
    display:"inline-block"
  }

export default BodoviNaIspitima
