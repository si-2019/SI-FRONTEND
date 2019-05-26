import React, { Component } from 'react';
import './bootstrapflatly.css';

class InterfejsUredjivanjeClanovaGrupe extends Component {
  constructor(props){
    super(props);
    this.state={
      studentiUnutra:[],
      studentiVani:[]
    }
    this.nizUnutra=[];
    this.nizVani=[];
    this.nizStudenata=[];
    this.dohvatiStudenteProjekat=this.dohvatiStudenteProjekat.bind(this);
    this.premjestiVani=this.premjestiVani.bind(this);
    this.premjestiUnutra=this.premjestiUnutra.bind(this);
    this.sacuvajPromjene=this.sacuvajPromjene.bind(this);
  }
  render() {
    return (
      <div className="bs-component">
        <h3>Uredjivanje clanova grupe</h3>
        <h4>Grupa 4</h4>
        <div className="row">
          <div className="col-lg-4">
            <select multiple className="form-control" ref="unutra">
                {
                  this.state.studentiUnutra.map(student=>{
                    return <option className="list-group-item">{student.ime} {student.prezime}</option>
                  })
                }
                <option className="list-group-item">test1</option>
                <option className="list-group-item">test2</option>
            </select>
          </div>
          <div className="btn-group-vertical">
            <button className="btn btn-secondary" onClick={this.premjestiVani}>>></button>
            <button className="btn btn-secondary" onClick={this.premjestiUnutra}>{`<<`}</button>
          </div>
          <div className="col-lg-4">
            <select multiple className="form-control" ref="vani">
                {
                  this.state.studentiVani.map(student=>{
                    return <option className="list-group-item">{student.ime} {student.prezime}</option>
                  })
                }
                <option className="list-group-item">test3</option>
                <option className="list-group-item">test4</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary" onClick={this.dohvatiStudenteProjekat}>Ucitaj liste - TEST</button>
        <button className="btn btn-primary" onClick={this.sacuvajPromjene}>Sačuvaj</button>
      </div>
    );
  };
  dohvatiStudenteProjekat(){
    var ajax=new XMLHttpRequest();
    var komponenta=this;
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4 && ajax.status=="200"){
            var tekst=ajax.responseText;
            console.log(tekst);
            if(tekst.length==0) return;
            var json=JSON.parse(tekst);
            var jsonNovi=[];
            for(var i=0;i<json.length;i++){
                jsonNovi.push({ime:json[i].ime,prezime:json[i].prezime});
            }
            komponenta.setState(thisState=>({studentiUnutra:jsonNovi,studentiVani:thisState.studentiVani}));
        }
    }
    ajax.open("POST","http://localhost:31913/services/group/getProjectStudents",true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("student=1&grupa=1");

    var ajax2=new XMLHttpRequest();
    var komponenta=this;
    ajax2.onreadystatechange=function(){
        if(ajax2.readyState==4 && ajax2.status=="200"){
            var tekst=ajax2.responseText;
            console.log(tekst);
            if(tekst.length==0) return;
            var json=JSON.parse(tekst);
            var jsonNovi=[];
            for(var i=0;i<json.length;i++){
                jsonNovi.push({ime:json[i].ime,prezime:json[i].prezime});
            }
            komponenta.setState(thisState=>({studentiUnutra:thisState.studentiUnutra,studentiVani:jsonNovi}));
        }
    }
    ajax2.open("POST","http://localhost:31913/services/group/getProjectStudents",true);
    ajax2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax2.send("student=1&grupa=0");
  }
  premjestiUnutra(){
    var x=this.refs.unutra;
    var y=this.refs.vani;
    if(y.selectedIndex>=0){
      this.nizUnutra.push(this.state.studentiVani[y.selectedIndex]);
      var o=y.options[y.selectedIndex];
      x.add(o);
    }
  }
  premjestiVani(){
    var x=this.refs.unutra;
    var y=this.refs.vani;
    if(x.selectedIndex>=0){
      this.nizVani.push(this.state.studentiUnutra[x.selectedIndex]);
      console.log(this.nizVani);
      var o=x.options[x.selectedIndex];
      y.add(o);
    }
  }
  sacuvajPromjene(){
    alert("Nije implementirano!");
  }
}

export default InterfejsUredjivanjeClanovaGrupe;