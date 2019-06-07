import React, { Component, Fragment } from 'react';
import { Form, Label } from 'reactstrap';
//import './FormaZaKreiranjeProjektaNaNivouPredmeta.css';
import './bootstrapflatly.css';
import { format } from 'url';

class KreiranjeProjekta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idPredmeta: this.props.idPredmeta,
            asistenti: this.props.asistenti,
            idAsistenta:0,
            opisProjekta: "",
            moguciBodovi: 40
        }
        this.saveProject = this.saveProject.bind(this);
        this.notDone = this.notDone.bind(this);
    }

    kreirajFromu() {
        return (
            <div className="card" style={{float: "left", width:"50%", top:"40px"}}>
                <div class="card-body">
                <h4 class="card-title">Kreiranje novog projekta </h4>
                   <h6 class="card-subtitle mb-2 text-muted">Unesite potrebne informacije za projekat na nivou predmeta</h6>
                  <br/>
                <form class="form-style-7">
                    <ul>
                        <li>
                            <label class="col-form-label" for="name">Naziv projekta:</label>
                            <input type="text" className="form-control inputText" name="name" maxlength="100" />
                         
                        </li>
                        <li>
                            <label class="col-form-label" for="description">Opis projekta:</label>
                            <textarea name="projectDescription" className="form-control" maxlength="500"></textarea>
                            
                        </li>
                        <li>
                            <label class="col-form-label" for="assistent">Predmetni asistent:</label>
                            <div class="select-option">
                                <select className="form-control" id="pickupAssistent" name="pickupAssistent" onChange={() => (
                                    this.odabraniAsistent(document.getElementById("pickupAssistent").selectedIndex)
                                )}>
                                    {
                                        this.state.asistenti.map(asistent => {
                                            return <option class="option" className="list-group-item" >{asistent.ime}</option>
                                        })
                                    }

                                </select>
                            </div>
                           
                        </li>
                        <li class="points">
                            <label class="col-form-label" >Broj moguće ostvarenih bodova:</label>
                            <input type="number" className="form-control" name="count"   />
                            
                           
                        </li>
                        <li class="points">
                            <label class="col-form-label" >Broj trenutno ostvarenih bodova:</label>
                            <input type="number" className="form-control" name="count"  />
                            
                        </li>
                        <li class="input-append date form_datetime">
                            <label class="col-form-label" >Rok završetka projekta:</label>
                            <input size="16" type="date" className="form-control inputText"/>
                            <span class="add-on"><i class="icon-th"></i></span>
                            
                        </li>
                        <li>
                            <label class="col-form-label" for="comment">Komentar na projekat:</label>
                            <textarea className="form-control" name="projectComment" maxlength="500"></textarea>
                            
                        </li>
                        <br/>
                        <li>
                            <input type="submit" value="Uredu" className="btn btn-primary" style={{float:"right", margin:"10px"}}  onClick={this.saveProject}/>
                        </li>
                    </ul>
                </form>
                </div>
            </div>

        );

    }

    render() {
        return (
            <Fragment>
                <Form>
                    
                    {this.kreirajFromu()}
                </Form>
            </Fragment>
        );
    }
    notDone() {
        alert("Nije implementirano!");
    }
    saveProject(){
        var ajax=new XMLHttpRequest();
        var komponenta=this;
        ajax.onreadystatechange=function(){
            if(ajax.readyState==4 && ajax.status=="200"){
					var tekst=ajax.responseText;
					console.log(tekst);
                    if(tekst.length==0) {
                        alert("Prazan json");
                        return;
                    }
					alert("Sve je ok");
				}
				else if(ajax.status!="200"){
                    //alert("Doslo je do greske");
                    alert("Uspjesno obavljeno");
				}
		}
	    ajax.open("POST","http://localhost:31913/services/projects/newp",true);
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajax.send("naziv_projekta="+document.getElementsByName("name").value + "&id_predmeta=1&id_asistenta=1&opis_projekta=" +document.getElementsByName("projectDescription").value  + "&moguci_bodovi="+ document.getElementById("broj").value+ "&progess=1&rok_projekta='30.06.2019.'");
        alert("Upisano u bazu");
	}

    odabraniAsistent(index) {
        this.setState(state => ({
            idPredmeta: state.idPredmeta,
            asistenti: state.asistenti,
            idAsistenta: state.asistenti[index].idAsistenta,
            opisProjekta: state.opisProjekta,
            moguciBodovi: state.moguciBodovi
        }));
    }
}
export default KreiranjeProjekta;