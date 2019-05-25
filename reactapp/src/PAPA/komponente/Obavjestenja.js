import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import papaApi from './papaApi';



class ObavjestenjaPapa extends Component {

  constructor(props) {
    super(props);
    this.state = {  
                    boja:"white",
                    naslov: "Izaberite nacin prikazivanja",
                    lista:[],
                    showPredmet:false,
                    clicked: false
                 };
    this.obavjestenjaAdmin = this.obavjestenjaAdmin.bind(this); 
    this.obavjestenjaStudentskaSluzba = this.obavjestenjaStudentskaSluzba.bind(this); 
    this.obavjestenjaProfesor = this.obavjestenjaProfesor.bind(this); 
    this.obavjestenjaAsistent = this.obavjestenjaAsistent.bind(this);            
    this.upisaneOcijene = this.upisaneOcijene.bind(this); 
    this.ispitiPrijava = this.ispitiPrijava.bind(this); 
    this.rezultatiUsmenihIspita = this.rezultatiUsmenihIspita.bind(this); 
    this.rezultatiParcijalnihIspita = this.rezultatiParcijalnihIspita.bind(this); 
    this.kliknutPredmet=this.kliknutPredmet.bind(this)
  }

  
  
  obavjestenjaAdmin(){
    
  }
  obavjestenjaStudentskaSluzba(){
    
  }
  obavjestenjaProfesor(){
    
  }
  obavjestenjaAsistent(){
    
  }
  upisaneOcijene(){
   
  }
  ispitiPrijava(){
    papaApi.ispitiPrijava().then((res) => {
      let niz=[];
      for (let a = 0; a < res.data.length; a++ ) {
        niz.push({
          id:a,
          obavjestenje:"Prijava na "+ res.data[a].vrsta+" iz "+res.data[a].predmet + " do " +res.data[a].datum +"."
        });
      }
      this.setState({
        naslov:"Trenutne prijeva za ispit",
        lista:niz,
        showPredmet:true
      });
    }).catch((err) => {
      this.setState({
        naslov:"Trenutne prijave za ispit",
        lista:[],
        showPredmet:false
      });
    });
  }
  rezultatiParcijalnihIspita(){
   
  }
  
  rezultatiUsmenihIspita(){
    
  }
  kliknutPredmet(){
    if(this.state.showPredmet){
        this.props.fija();      
    }
  }
  render() {
    return (
      <div style={{ width: '100%', height: '22rem'}}>
        <Card border="secondary" style={{ width: '100%', minHeight: '22rem', backgroundColor:this.state.boja}}>
        <Card.Header>
          <div style={{width: '100%',  display: 'flex',justifyContent:'space-between'}}>
            {<h3 style={{}} >Obavijesti</h3>}
            <ButtonGroup vertical  style={{alignSelf: 'flex-end'}}>
              <DropdownButton as={ButtonGroup} title="" id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey="1" onClick={this.obavjestenjaAdmin}>Obavjestenja admin</Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={this.obavjestenjaStudentskaSluzba}>Obavjestenjas studentska sluzba </Dropdown.Item>
                <Dropdown.Item eventKey="3" onClick={this.obavjestenjaProfesor}>Obavjestenja profesor</Dropdown.Item>
                <Dropdown.Item eventKey="4" onClick={this.obavjestenjaAsistent}>Obavjestenja asistent</Dropdown.Item>
                <Dropdown.Item eventKey="5" onClick={this.rezultatiParcijalnihIspita}>Rezultati parcijalnih ispita</Dropdown.Item>
                <Dropdown.Item eventKey="6" onClick={this.rezultatiUsmenihIspita}>Rezultati usmenih usmenih</Dropdown.Item>  
                <Dropdown.Item eventKey="5" onClick={this.upisaneOcijene}>Upisane ocijene</Dropdown.Item>
                <Dropdown.Item eventKey="6" onClick={this.ispitiPrijava}>Prijava ispita</Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title style ={{fontWeight: "bold"}}>{this.state.naslov}</Card.Title>
          <div>
              <ul style={{listStyleType: "square"}}>
                {this.state.lista.map(item => (
                  <li style={{ margin: "1rem"}} key={item.id} onClick={this.kliknutPredmet.bind(this)} >{item.obavjestenje}</li>
                ))}
              </ul>
          </div>
        </Card.Body>
      </Card>
      </div>
    );
  }
}

export default ObavjestenjaPapa;