import React, { Component, Fragment } from 'react';
import { Form, FormGroup, Label, Input, Table, Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';

import TabelaGrupa from '../BodovanjeProjekataStudenti/TabelaGrupa'
import { sviPredmetiAsistenta, sveGrupeProjekta } from '../../api/projekti_zadaci';
import { upisBodovaPojedinacno, upisBodovaGrupno } from '../../api/bodovanje';

class ListaPredmetaAsistenta extends Component { 
  constructor(props) {
    super(props);

    this.state = { 
      idAsistent:this.props.idAsistent,
      predmeti:this.props.predmeti,
      selektani_predmet: null,
      grupe: [],
    };

    this.renderGrupe = this.renderGrupe.bind(this);
    this.bodovanjePojedinacno = this.bodovanjePojedinacno.bind(this);
    this.bodovanjeGrupno = this.bodovanjeGrupno.bind(this);
    this.ucitajGrupe = this.ucitajGrupe.bind(this);
    this.renderDetalji = this.renderDetalji.bind(this);
    this.prikaziGrupe = this.prikaziGrupe.bind(this);
  }

  componentDidMount() {
    sviPredmetiAsistenta(this.state.idAsistent).then(res => {
      let predmeti = res.data;
      let selektani_predmet = null;
      if(predmeti.length > 0) selektani_predmet = predmeti[0];
      if(selektani_predmet) {
        sveGrupeProjekta(selektani_predmet.idProjekat).then((res) => {
          console.log(`SVEGRUPEPROJEKTA: ${JSON.stringify(res)}`)
          this.setState({
            predmeti: predmeti,
            selektani_predmet: selektani_predmet,
            grupe: res.data
          });
        });
      }
      else {
        this.setState({
          predmeti: predmeti,
          selektani_predmet: selektani_predmet,
          grupe: []
        });
      }
    });
  }

  ucitajGrupe() {
    if(this.state.selektani_predmet) {
      sveGrupeProjekta(this.state.selektani_predmet.idProjekat).then((res) => {
        this.setState({
          grupe: res.data
        });
        console.log(`ucitani podaci o grupama: ${JSON.stringify(res.data)}`)
      });
    }
    else {
      this.setState({
        grupe: []
      });
    }
  }

  validacijaBodova(bodovi) {
    let maxBodova = this.state.selektani_predmet.moguciBodovi;
    if(isNaN(bodovi)) {
      // prikaz errora - neispravan unos
      console.log("Broj bodova mora biti cijeli broj");
      return false;
    }
    else if(bodovi > maxBodova || bodovi < 0) {
      // prikaz errora - bodovi moraju biti u range [0, max]
      console.log("Bodovi nisu u range [0, max]");
      return false;
    }
    return true;
  }

  bodovanjePojedinacno(studenti) {
    // validacija
    for(let i = 0; i < studenti.length; i++) {
      let trenutniBodovi = studenti[i].ostvareniBodovi;
      if(!this.validacijaBodova(trenutniBodovi)) {
        return;
      }
    }

    upisBodovaPojedinacno(studenti, this.state.selektani_predmet.idProjekat).then((response) => {
      if(response.data.message == "Uspjesno bodovan svaki clan grupe za definisani projekat.") {
        console.log(`Projekat uspjesno bodovan pojedinacno, pozivanje reloada grupa`);
        this.ucitajGrupe();
      }
      else {
        // prikaz errora - doslo je do greske
        console.log(response.data.message);
      }
    })
    .catch((err) => {
      console.log(err);
      // doslo je do greske - nema konekcije ?
    });
  }

  bodovanjeGrupno(idGrupaProjekta, bodovi) {
    // validacija
    if(!this.validacijaBodova(bodovi)) {
      return;
    }

    upisBodovaGrupno(idGrupaProjekta, bodovi).then((response) => {
      if(response.data.message == "Uspjesno bodovan projekat.") {
        console.log(`Projekat uspjesno bodovan grupno, pozivanje reloada grupa`);
        this.ucitajGrupe();
      }
      else {
        // prikaz errora - doslo je do greske
        console.log(response.data.message);
      }
    })
    .catch((err) => {
      console.log(err);
      // doslo je do greske - nema konekcije ?
    });
  }

  selektanPredmet(val) {
    console.log(`selektan predmet: ${val}`)
    for(let i=0; i<this.state.predmeti.length; i++)
    {
      if(this.state.predmeti[i].idPredmet == val)
      {
        sveGrupeProjekta(this.state.predmeti[i].idProjekat).then((res) => {
          this.setState({
            selektani_predmet: this.state.predmeti[i],
            grupe: res.data
          });
        });

        return;
      }
    }    
  }

  prikaziGrupe() {
    return (
      <Fragment>
        {this.state.grupe && this.state.grupe.length > 0 ? 
          <Fragment> 
            <Label>Projektne grupe:</Label>
            <br></br>
            {this.renderGrupe()}
          </Fragment>
          : <Label>Nema kreiranih projektnih grupa za ovaj predmet.</Label>}
      </Fragment>
    )
  }

  renderGrupe() {
    let i = 1;
    return (
      <Fragment>
      {this.state.grupe.map((grupa) => {
        return (
          <TabelaGrupa key={grupa.id} grupa={grupa} brojGrupe={i++} callbackPojedinacno={this.bodovanjePojedinacno} callbackGrupno={this.bodovanjeGrupno}></TabelaGrupa>
        );
      })}
      </Fragment>
    );
  }

  renderDetalji() {
    return (
      <Fragment>
        {this.state.selektani_predmet ? 
          <Fragment>
            <Label>Opis projekta:</Label>
            <br/>
            <Label>{this.state.selektani_predmet.opis}</Label>

            <hr/>

            <Label>Broj mogućih bodova:</Label>
            <br/>
            <Label>{this.state.selektani_predmet.moguciBodovi}</Label>

            <hr/>

          </Fragment>
        : null}
      </Fragment>
    )
  }

  render() {
    return (
      <Fragment>
        <Form>
        <FormGroup>

          <Label >Pregled projekata: </Label>

          <Input type="select" name="predmet" onChange={(e)=>{this.selektanPredmet(e.target.value)}}>
            {this.state.predmeti.map((predmet) => {
                return (<option key={predmet.idPredmet} value={predmet.idPredmet}>{`${predmet.naziv}`}</option>);
              })}
          </Input>

          <hr/>

          {this.renderDetalji()}
          
          {this.prikaziGrupe()}
          
        </FormGroup>
        </Form>
      </Fragment>
    );
  }
}

export default ListaPredmetaAsistenta;

// useless

/*import React, { Component } from 'react';
import PregledDetaljaPredmeta from './PregledDetaljaPredmeta';
import ListaGrupa from './PrikazListeProjektnihGrupa';
import ListaPredmetaAsistenta from '../ListaPredmetaAsistenta/ListaPredmetaAsistenta';

class ListaPredmetaAsistenta extends Component {
  constructor(props){
    super(props);
    this.state = {
      idAsistent:this.props.idAsistent,
      predmeti:this.props.predmeti,
      detalji:false,
      detaljiIndex:0
    };
    this.azuriraj=this.azuriraj.bind(this);
  }
  
   render(){
    if(this.state.detalji) return (
      <div className="card" style={{float: "left", width:"100%"}}>
        <div className="card-body">
          <h4 className="card-title" style={{textAlign:"left"}}>Pregled projekata</h4>
				  
              <select id="selectListe" className="custom-select" onChange={()=>(
                this.azuriraj(document.getElementById("selectListe").selectedIndex)
              )}>
                <option className="list-group-item">Odaberite predmet</option>
                {
                  this.state.predmeti.map(predmet=>{
                    return <option className="list-group-item">{predmet.naziv}</option>
                  })
                }
              </select>
              <PregledDetaljaPredmeta naziv={this.state.predmeti[this.state.detaljiIndex].nazivProjekta} 
              opis={this.state.predmeti[this.state.detaljiIndex].opis} 
              bodovi={this.state.predmeti[this.state.detaljiIndex].moguciBodovi} 
              />
              <ListaPredmetaAsistenta selektani_projekat={this.state.predmeti[this.state.detaljiIndex].idProjekat} moguciBodovi={this.state.predmeti[this.state.detaljiIndex].moguciBodovi} />
            
        </div>
      </div>
    )
    else return(
      <div className="card" style={{float: "left", width:"100%"}}>
        <div className="card-body">
          <h4 className="card-title" style={{float:"left"}}>Pregled projekata</h4>
				  
              <select id="selectListe" className="custom-select" onChange={()=>(
                this.azuriraj(document.getElementById("selectListe").selectedIndex)
              )}>
                <option className="list-group-item">Odaberite predmet</option>
                {
                  this.state.predmeti.map(predmet=>{
                    return <option className="list-group-item">{predmet.naziv}</option>
                  })
                }
              </select>
           
        </div>
      </div>
    )
  }
  azuriraj(indeks){
    
    this.setState({
      detaljiIndex:indeks-1,
      detalji:true
    })
  }
}

  export default ListaPredmetaAsistenta;*/