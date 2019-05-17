import React, { Component } from 'react';
import './bootstrapflatly.css';

class InterfejsUredjivanjeClanovaGrupe extends Component {
  constructor(props){
    super(props);
    this.state={
      studentiUnutra:[],
      studentiVani:[]
    }
    this.nizStudenata=[];
    this.dohvatiStudenteProjekat=this.dohvatiStudenteProjekat.bind(this);
  }
  render() {
    return (
      <div className="bs-component">
        <p>Uredjivanje clanova grupe</p>
        <div className="row">
          <div className="col-lg-4">
            <select multiple className="form-control">
                {
                  this.state.studentiUnutra.map(student=>{
                    return <option className="list-group-item">{student.ime} {student.prezime}</option>
                  })
                }
                <option className="list-group-item">test1</option>
                <option className="list-group-item">test2</option>
            </select>
          </div>
          <div className="col-lg-4">
            <select multiple className="form-control">
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
        <button className="btn" onClick={this.dohvatiStudenteProjekat}>Dugme</button>
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
}

export default InterfejsUredjivanjeClanovaGrupe;