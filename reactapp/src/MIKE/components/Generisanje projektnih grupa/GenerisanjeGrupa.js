import React, { Component } from 'react';
import './bootstrapflatly.css';
import { throwStatement } from '@babel/types';

class GenerisanjeGrupa extends Component {
	constructor(props){
    super(props);
    this.state={
			predmeti:this.props.predmeti,
			idAsistent:this.props.idAsistent,
			predmetIndex:0,
			grupe:[]
		}
		this.odabraniPredmet=this.odabraniPredmet.bind(this);
		this.generisiGrupe=this.generisiGrupe.bind(this);
		this.napuniListu=this.napuniListu.bind(this);
		this.notDone=this.notDone.bind(this);
  }
  render() {
   	return ( 
			 <div className="card" style={{float: "left", width:"50%", top:"40px"}}>

				 <div class="card-body"> 
				 
				 <h4 class="card-title">Generisanje grupa</h4>
                   <h6 class="card-subtitle mb-2 text-muted">Unesite potrebne informacije za generisanje projektne grupe</h6>
                  <br/>
			<div className="container-fluid">
				
					<div className="form-group">
					 <label class="col-form-label" >Odaberite predmet:</label>
					<select className="form-control" id="predmet" ref="unutra" onChange={()=>(
						this.odabraniPredmet(document.getElementById("predmet").selectedIndex)
					)}>
							{
								this.state.predmeti.map(predmet=>{
									return <option className="list-group-item">{predmet.nazivPredmeta}</option>
								})
							}
					</select>
					< label class="col-form-label" >Broj studenata:</label>
					<label>{this.state.predmeti[this.state.predmetIndex].brojStudenata}</label>
					<br/>
					<label class="col-form-label" >Broj projektnih grupa:</label>
					<input className="form-control" id="broj" type="number" min="1" max="100" placeholder="10"></input>
					</div>
					<label class="col-form-label" >Način generisanja:</label>
					<div className="form-group">
							<div className="custom-control custom-radio">
								<input type="radio" id="radio1" name="radio" class="custom-control-input" checked/>						
								<label class="custom-control-label" for="radio1">Nasumično</label>
							</div>
							<div className="custom-control custom-radio">
								<input type="radio" id="radio2" name="radio" class="custom-control-input"/>						
								<label class="custom-control-label" for="radio2">Abecedno</label>
							</div>
					</div>
					
						<button className="btn btn-primary" style={{float:"right", margin:"10px"}} onClick={this.generisiGrupe}>Generiši grupe</button>
						<button className="btn btn-primary" style={{float:"left", margin:"10px"}} onClick={this.notDone}>Izlaz</button>
					
					<br/>
					<div className="list-group">
						{
							this.state.grupe.map(grupa=>{
									return(
									<div>
										<a href="#" className="list-group-item list-group-item-action active">Grupa {grupa.broj}</a>
										{
											grupa.studenti.map(student=>{
												return (<a href="#" className="list-group-item list-group-item-action">{student.ime} {student.prezime}</a>)
											})
										}
									</div>
									)
							})
						}
					</div>
					<br/>
				</div>
			</div>
		</div>
	
		
		);
  };
  notDone(){
    alert("Nije implementirano!");
	}
	odabraniPredmet(e){
		this.setState(state=>({
			predmeti:state.predmeti,
			idAsistent:state.idAsistent,
			predmetIndex:e,
			grupe:state.grupe
		}));
	}
	generisiGrupe(){
		var abecedno=false;
		if(document.getElementById("predmet").selectedIndex==1) abecedno=true;
		var ajax=new XMLHttpRequest();
		var komponenta=this;
		var jsonNovi=[{"broj":1,"studenti":[{"ime":"Mirza","prezime":"Delibasic*"},{"ime":"Haris","prezime":"Masovic*"}]},{"broj":2,"studenti":[{"ime":"Lamija","prezime":"Alagic*"},{"ime":"Nerma","prezime":"Hanic*"}]}];
		ajax.onreadystatechange=function(){
			if(ajax.readyState==4 && ajax.status=="200"){
						var tekst=ajax.responseText;
						if(tekst.length==0) return;
						var json=JSON.parse(tekst);
						jsonNovi=[];
						for(var i=0;i<json.length;i++){
								jsonNovi.push({ime:json[i].ime,prezime:json[i].prezime});
						}
						komponenta.setState(state=>({
							grupe:jsonNovi
						}));
					}
					else if(ajax.status!="200"){
						komponenta.setState(state=>({
							grupe:jsonNovi
						}));
					}
			}
			if(abecedno) ajax.open("POST","http://localhost:31913/services/generate/genOrdered",true);
		else ajax.open("POST","http://localhost:31913/services/generate/genRandom",true);
		ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		ajax.send("idProjekat=3&brojGrupa="+ document.getElementById("broj").value);
	}
	napuniListu(){
		this.setState(state=>({
			predmeti:state.predmeti,
			idAsistent:state.idAsistent,
			predmetIndex:state.predmetIndex,
			grupe:[]
		}));
	}
}

export default GenerisanjeGrupa;