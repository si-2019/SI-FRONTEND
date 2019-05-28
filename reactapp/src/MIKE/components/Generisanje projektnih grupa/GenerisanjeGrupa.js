import React, { Component } from 'react';
import './bootstrapflatly.css';

class GenerisanjeGrupa extends Component {
	constructor(props){
    super(props);
    this.state={
			predmeti:[],
			idAsistent:2,
			predmetIndex:-1,
			grupe:[]
    }
  }
  render() {
   	return ( 
			<div className="container">
				<h3>Generisanje grupe</h3>
				<div className="col-md-auto" align="center">
					<div className="col-6" align="left">
					<div className="form-group">
					<h4>Odaberite predmet</h4>
					<select className="form-control" ref="unutra">
							{/*
								this.state.studentiUnutra.map(student=>{
									return <option className="list-group-item">{student.ime} {student.prezime}</option>
								})*/
							}
							<option className="list-group-item">test1</option>
							<option className="list-group-item">test2</option>
					</select>
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
						<button className="btn btn-primary" onClick={this.sacuvajPromjene}>Generiši grupe</button>
						<button className="btn btn-primary" onClick={this.sacuvajPromjene}>Izlaz</button>
					</div>
				</div>
			</div>
		</div>
		);
  };
  sacuvajPromjene(){
    alert("Nije implementirano!");
  }
}

export default GenerisanjeGrupa;