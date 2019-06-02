import React, { Component } from 'react';
import SviPredmeti from './SviPredmeti';
import PropTypes from 'prop-types';
import LiteraturaProfesor from './literaturaProfesor';
import LiteraturaStudent from './literaturaStudent';
import DodavanjeDatuma from './DodavanjeDatuma';
import ObjavaStudent from './objavaStudent';
import ObjavaProfesor from './objavaProfesor';
import DodavanjeObjave from './dodavanjeObjave';
class proba extends Component {
  render() {
    this.state={
      svipredmeti: [
        {
          id: 1,
          naziv: 'SI',
          opis:' opis premeta '
        },
        {
          id: 2,
          naziv: 'VI',
          opis: 'opis predmeta'
        }
      ],
      datumobjave:{
          id:1,
          datum:Date.now()
        },

        fileovi:[
          'prvi.pdf',
          'drugi.pdf',
          'treci.pdf'
        ],
        fileovi2:[
          'prvi.pdf',
          'drugi.pdf'
        ]
      

    }
    console.log(this.state)
    return (
      
        <div>
            <h1>Moji predmeti</h1>
            <SviPredmeti predmeti={this.state.svipredmeti} />
            <LiteraturaStudent></LiteraturaStudent>
            <DodavanjeDatuma datumobjave={this.state.datumobjave}/>
            <ObjavaStudent naslov="Predavanje 1" opisMaterijala="Opis predavanja..." fileovi={this.state.fileovi2}></ObjavaStudent>
            <ObjavaProfesor naslov="Tutorijal 2" opisMaterijala="Opis tutorijala..."fileovi={this.state.fileovi}></ObjavaProfesor>
            <DodavanjeObjave></DodavanjeObjave>
        </div>
        

    );
  }
}
SviPredmeti.propTypes={
  svipredmeti: PropTypes.array.isRequired
}
export default proba;