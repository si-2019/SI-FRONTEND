import React, { Component } from 'react';
import './App.css';
import PregledListeProjekata from './PregledListeProjekata';
import Lista  from './prikazListe';
import PregledZadatakaProjekta from './components/PregledZadatakaProjekta/PregledZadatakaProjekta';
import { sviProjektiTrenutnogUsera } from './api/projekti_zadaci';

class Mike extends Component {
  constructor(props){
    super(props);
    this.state={
      forma:"null"
    }
    this.kreiranjeGrupe=this.kreiranjeGrupe.bind(this);
    this.listaProjekata=this.listaProjekata.bind(this);
    this.pregledZadatakaProjektaCall=this.pregledZadatakaProjektaCall.bind(this);
  }

  render() {
    if(this.state.forma=="null") return (
      <div className="Mike">
        <button onClick={this.kreiranjeGrupe}>Kreiranje projektne grupe</button>
        <button onClick={this.listaProjekata}>Pregled projekta studenta</button>
        <button onClick={this.pregledZadatakaProjektaCall}>Rad na projektu (zadaci na projektu)</button>
        <button>Kreiranje projekta na nivou predmeta</button>
        <button>Bodovanje projekta</button>
      </div>
    );
    else if (this.state.forma=="kreiranjeGrupe") return (
      <Lista />
    );
    else if (this.state.forma=="listaProjekata") return (
        <PregledListeProjekata />
    )
    else if(this.state.forma == "projektniZadaci") return (
      <PregledZadatakaProjekta projekti={sviProjektiTrenutnogUsera().projekti} />
    );
  }
  kreiranjeGrupe(){
    this.setState({forma:"kreiranjeGrupe"});
  }
  listaProjekata(){
    this.setState({forma:"listaProjekata"});
  }
  pregledZadatakaProjektaCall(){
    this.setState({forma:"projektniZadaci"});
  }
}

export default Mike;
