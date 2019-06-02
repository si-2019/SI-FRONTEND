import React, { Component, Fragment } from 'react';
import { Form, Label } from 'reactstrap';
import './FormaZaKreiranjeProjektaNaNivouPredmeta.css';
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
            <div>
                <form class="form-style-7">
                    <ul>
                        <li>
                            <label for="name">Naziv projekta</label>
                            <input type="text" name="name" maxlength="100" />
                            <span>Unesite naziv projekta</span>
                        </li>
                        <li>
                            <label for="description">Opis projekta</label>
                            <textarea name="projectDescription" maxlength="500"></textarea>
                            <span>Unesite opis projekta</span>
                        </li>
                        <li>
                            <label for="assistent">Predmetni asistent</label>
                            <div class="select-option">
                                <select id="pickupAssistent" name="pickupAssistent" onChange={() => (
                                    this.odabraniAsistent(document.getElementById("pickupAssistent").selectedIndex)
                                )}>
                                    {
                                        this.state.asistenti.map(asistent => {
                                            return <option class="option">{asistent.ime}</option>
                                        })
                                    }

                                </select>
                            </div>
                            <span>Odaberite predmetnog asistenta</span>
                        </li>
                        <li class="points">
                            <label >Broj moguće ostvarenih bodova</label>
                            <input type="number" name="count" class="bodovi" />
                            <span>Unesite broj bodova</span>
                        </li>
                        <li class="points">
                            <label >Broj trenutno ostvarenih bodova</label>
                            <input type="number" name="count" class="bodovi" />
                            <span>Unesite broj bodova</span>
                        </li>
                        <li class="input-append date form_datetime">
                            <label >Rok završetka projekta</label>
                            <input size="16" type="date" />
                            <span class="add-on"><i class="icon-th"></i></span>
                            <span>Unesite rok završetka projekta</span>
                        </li>
                        <li>
                            <label for="comment">Komentar na projekat</label>
                            <textarea name="projectComment" maxlength="500"></textarea>
                            <span>Unesite komentar na projekat</span>
                        </li>
                        <li>
                            <input type="submit" value="Uredu"  onClick={this.saveProject}/>
                        </li>
                    </ul>
                </form>
            </div>

        );

    }

    render() {
        return (
            <Fragment>
                <Form>
                    <label class="headerForm" >Kreiranje novog projekta:</label>
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
					alert("Doslo je do greske");
				}
		}
	    ajax.open("POST","http://localhost:31913/services/projects/newp",true);
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajax.send("naziv_projekta="+document.getElementsByName("name").value + "&id_predmeta=1&id_asistenta=1&opis_projekta=" +document.getElementsByName("projectDescription").value  + "&moguci_bodovi="+ document.getElementById("broj").value);
        alert("Sve je ok");
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