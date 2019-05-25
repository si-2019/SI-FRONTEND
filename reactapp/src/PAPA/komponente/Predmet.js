import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import papaApi from './papaApi'



class PredmetOne extends Component {

  constructor(props) {
    super(props);
    this.state = {  
                    boja:"white",
                    naslov: "Izaberite nacin prikazivanja",
                    lista:[]
                 };
    this.trenutniPredmeti = this.trenutniPredmeti.bind(this); 
    this.odslusaniPredmeti = this.odslusaniPredmeti.bind(this); 
    this.polozeniPredmeti = this.polozeniPredmeti.bind(this); 
    this.nePolozeniPredmeti = this.nePolozeniPredmeti.bind(this);            
    this.trenutniSaDrugihOdsjeka = this.trenutniSaDrugihOdsjeka.bind(this); 
    this.trenutniSaDrugihSemestara = this.trenutniSaDrugihSemestara.bind(this); 
    this.trenutniProfesori = this.trenutniProfesori.bind(this); 
    this.trenutniAsistenti = this.trenutniAsistenti.bind(this); 
  }

  
  
  trenutniPredmeti(){
    papaApi.trenutniPredmeti().then((res) => {
        this.setState({
          showPredmet:true,
          naslov:"Trenutni predmeti",
          lista:res.data});
    }).catch((err) => {
      this.setState({
        naslov:"Trenutni predmeti",
        lista:[]});
    });
  }
  odslusaniPredmeti(){
    
  }
  polozeniPredmeti(){
    papaApi.polozeniPredmeti().then((res) => {
      this.setState({
        naslov:"Polozeni predmeti",
        lista:res.data});
    }).catch((err) => {
      this.setState({
        naslov:"Polozeni predmeti",
        lista:[]});
    });
  }
  nePolozeniPredmeti(){
    
  }
  trenutniSaDrugihOdsjeka(){
    
  }
  trenutniSaDrugihSemestara(){
    papaApi.trenutniSaDrugihSemestara().then((res) => {
      this.setState({
        naslov:"Predmeti sa drugih semestara",
        lista:res.data});
    }).catch((err) => {
      this.setState({
        naslov:"Predmeti sa drugih semestara",
        lista:[]});
    });
  }
  trenutniAsistenti(){
    
  }
  
  trenutniProfesori(){
    papaApi.trenutniProfesori().then((res) => {
      let niz=[];
      for (let a = 0; a < res.data.length; a++ ) {
        niz.push({
          id:res.data[a].id,
          naziv:res.data[a].ime+" "+res.data[a].prezime
        })
      }
      this.setState({
        naslov:"Profesori",
        lista:niz});
    }).catch((err) =>{
      this.setState({
        naslov:"Profesori",
        lista:[]});
    });
  }

  render() {
    return (
      <div style={{ width: '100%', minHeight: '22rem'}}>
        <Card border="secondary" style={{ width: '100%', minHeight: '22rem', backgroundColor:this.state.boja}}>
        <Card.Header>
          <div style={{width: '100%',  display: 'flex',justifyContent:'space-between'}}>
            {<h3 style={{}} >Predmeti</h3>}
            <ButtonGroup vertical  style={{alignSelf: 'flex-end'}}>
              <DropdownButton as={ButtonGroup} title="" id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey="1" onClick={this.trenutniPredmeti}>Trenutni predmeti</Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={this.odslusaniPredmeti}>Odslusani predmeti </Dropdown.Item>
                <Dropdown.Item eventKey="3" onClick={this.polozeniPredmeti}>Polozeni predmeti</Dropdown.Item>
                <Dropdown.Item eventKey="4" onClick={this.nePolozeniPredmeti}>Nepolozeni predmeti</Dropdown.Item>
                <Dropdown.Item eventKey="5" onClick={this.trenutniSaDrugihOdsjeka}>Trenutni sa drugih odsjeka</Dropdown.Item>
                <Dropdown.Item eventKey="6" onClick={this.trenutniSaDrugihSemestara}>Trenutni sa drugih semestara</Dropdown.Item>  
                <Dropdown.Item eventKey="5" onClick={this.trenutniAsistenti}>Trenutni asistenti</Dropdown.Item>
                <Dropdown.Item eventKey="6" onClick={this.trenutniProfesori}>Trenutni profesori</Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title style ={{fontWeight: "bold"}}>{this.state.naslov}</Card.Title>
          <div>
              <ul style={{listStyleType: "square"}}>
                {this.state.lista.map(item => (
                  <li style={{ margin: "1rem"}} key={item.id} >{item.naziv}</li>
                ))}
              </ul>
          </div>
        </Card.Body>
      </Card>
      </div>
    );
  }
}

export default PredmetOne;