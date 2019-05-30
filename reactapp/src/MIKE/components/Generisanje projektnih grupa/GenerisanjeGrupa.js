import React, { Component } from 'react';
import './bootstrapflatly.css';

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
			<div className="container-fluid">
				<h3>Generisanje grupe</h3>
				<div className="col-md-auto" align="center">
					<div className="col-6" align="left">
					<div className="form-group">
					<h4>Odaberite predmet</h4>
					<select className="form-control" id="predmet" ref="unutra" onChange={()=>(
						this.odabraniPredmet(document.getElementById("predmet").selectedIndex)
					)}>
							{
								this.state.predmeti.map(predmet=>{
									return <option className="list-group-item">{predmet.nazivPredmeta}</option>
								})
							}
					</select>
					<h4>Broj studenata</h4>
					<label>{this.state.predmeti[this.state.predmetIndex].brojStudenata}</label>
					<h4>Broj projektnih grupa</h4>
					<input className="form-control" id="broj" type="number" min="1" max="100" placeholder="10"></input>
					</div>
					<h4>Način generisanja</h4>
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
					<div className="row">
						<button className="btn btn-primary" onClick={this.generisiGrupe}>Generiši grupe</button>
						<button className="btn btn-primary" onClick={this.notDone}>Izlaz</button>
					</div>
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
					komponenta.napuniListu();
				}
				else if(ajax.status!="200"){
					komponenta.napuniListu();
				}
		}
		if(abecedno) ajax.open("POST","http://localhost:31913/services/generate/genOrdered",true);
    else ajax.open("POST","http://localhost:31913/services/generate/genRandom",true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("idProjekat=1&brojGrupa="+ document.getElementById("broj").value);
	}
	napuniListu(){
		this.setState(state=>({
			predmeti:state.predmeti,
			idAsistent:state.idAsistent,
			predmetIndex:state.predmetIndex,
			grupe:[{"broj":1,"studenti":[{"ime":"Mirza","prezime":"Delibasic"}]},{"broj":2,"studenti":[{"ime":"Lamija","prezime":"Alagic"}]}]
		}));
	}
}

export default GenerisanjeGrupa;