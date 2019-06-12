import React, {Component} from 'react'; 
import ListaZadataka from './PrikazListeZadataka';
import { thisExpression } from '@babel/types';

class PregledListeProjekata extends Component {
    constructor() {
        super();
        this.state = { 
            projekti:[], 
            postoje_projekti:false, 
            lista:false,
            zadatak:false,
            odabrani_projekat:null,
            odabrani_zadatak:null,
            
            id_odabranog_projekta:null,
            opis_zadatka:null,
            datum_pocetka:null,
            datum_zavrsetka:null,
            zavrsen:null,
            komentar_asistenta:null
            };

        this.popuniPodatke=this.popuniPodatke.bind(this);
    }

    componentDidMount() {
        //let proj=sviProjektiTrenutnogUsera().projekti;
        var z1={idProjektnogZadatka:1,idProjekta:1,opis:"Prvi zadatak, uvod opisi", otkad:"24.3.2015.",dokad:"6.5.2016.",zavrsen:0,komentarAsistenta:"Sve je ok."};
        var nizZadaci=[];
        nizZadaci.push(z1);
        var niz=[];
        var objekat={idProjekat:1, nazivProjekta:"Projekat 1",naziv:"Softverski inzenjering",opisProjekta:"Ovo je proba opisa.",zadaci:nizZadaci};
        niz.push(objekat);
        var objekat2={idProjekat:2,nazivProjekta:"Projekat 2",naziv:"Projektovanje informacionih sistema",opisProjekta:"Ovo je novi opis.",zadaci:nizZadaci};
        niz.push(objekat2);
        this.setState({projekti:niz, postoje_projekti:true, odabrani_projekat:1, odabrani_zadatak:1});
        this.setState({id_odabranog_projekta:nizZadaci[0].idProjekta,opis_zadatka:nizZadaci[0].opis,datum_pocetka:nizZadaci[0].otkad,datum_zavrsetka:nizZadaci[0].dokad,komentar_asistenta:nizZadaci[0].komentarAsistenta});
       /* var sviProjektiTrenutnogUsera=['Projekat1', 'Projekat2'];
        let proj=sviProjektiTrenutnogUsera;
        this.setState({projekti:proj});
        if (proj.length != null) this.setState({ postoje_projekti:true});*/
    }

    kreirajTabelu() {
        return(
            <form  >
            <table id="tabelaProjekata">
                <thead>
                    <tr>
                        <th>Naziv projekta</th>
                        <th>Naziv predmeta</th>
                        <th>Opis projekta</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        this.state.postoje_projekti != false ? 
                        this.state.projekti.map((projekti) => {
                            return (
                                <tr>
                                    <td onClick={()=>{this.setState((state)=>({projekti:state.projekti,postoje_projekti:state.postoje_projekti,lista:true, odabrani_projekat:projekti.idProjekat-1}))}}>{projekti.nazivProjekta}</td>
                                    <td>{projekti.naziv}</td>
                                    <td>{projekti.opisProjekta}</td>
                                </tr>
                            )
                        }):""
                    }
                    
                </tbody>
            </table>
            </form>
        );
    }

    kreirajListuZadataka(){
        return (
            <form>
                <fieldset>
                <div>
                    <select class="custom-select" style={{align:"left"}} id="lista" onChange={()=>(
                        this.setState({odabrani_zadatak:document.getElementById("lista").selectedIndex+1,zadatak:true}))}>
							{
								this.state.projekti[this.state.odabrani_projekat].zadaci.map(zadatak=>{
									return <option>Zadatak {zadatak.idProjektnogZadatka}</option>
								})
							}
					</select>      
                </div>
                </fieldset>
            </form>
        )
      }

    kreirajDetaljeZadatka() {
        return (
            <form id="detaljiZadatka" style={{textAlign:"left"}}>
                <label> idProjekta: {this.state.id_odabranog_projekta}</label> 
                <br/>
                <label> Opis zadatka: {this.state.opis_zadatka}</label>
                <br/>
                <label> Datum pocetka: {this.state.datum_pocetka}</label>
                <br/>
                <label> Datum zavrsetka: {this.state.datum_zavrsetka}</label>
                <br/>
                <label> Zavrsen: {this.state.zavrsen}</label>
                <br/>
                <label> Komentar asistenta: {this.state.komentar_asistenta}</label>
            </form>
        );
    }

    render() {
        if(!this.state.lista)
        return(  
            <div className="card" style={{float: "left", width:"100%"}}>
                <div className="card-body">
                    <h4 class="card-title" style={{textAlign:"left"}}>Pregled projekata</h4>
                    <br/>
                    <h6 class="card-subtitle mb-2 text-muted" style={{textAlign:"left"}}>Svi projekti:</h6>
                    {this.kreirajTabelu()}
                </div>
            </div>
        );
        else return(
            <div className="card" style={{float: "left", width:"100%"}}>
                <div className="card-body">
                    <h4 class="card-title" style={{textAlign:"left"}}>Pregled projekata</h4>
                    <h6 class="card-subtitle mb-2 text-muted" style={{textAlign:"left"}}>Svi projekti:</h6>
                    {this.kreirajTabelu()}
                    <br/>
                    <h6 class="card-subtitle mb-2 text-muted" style={{textAlign:"left"}}>Odaberite zadatak</h6>
                    {this.kreirajListuZadataka()}
                    <br/>
                    <h6 class="card-subtitle mb-2 text-muted" style={{textAlign:"left"}}>Zadatak {this.state.odabrani_zadatak}</h6>
                    {this.kreirajDetaljeZadatka()}
                </div>
            </div>
        );
    }
    popuniPodatke() {
        var ajax=new XMLHttpRequest();
        var id_usera=1;
        ajax.open('GET', 'http://localhost:31913/services/viewS/user-projects/:id'+id_usera, true);
        ajax.setRequestHeader("Content-type", "application/json");
        ajax.send();
        ajax.onreadystatechange= function() {
            if (ajax.readyState==4 && ajax.status==200) {
                var podaci= JSON.parse(ajax.responseText);
                if(podaci.length==0) this.nafilujPodatke();
                else this.setState({projekti:podaci});
                if (podaci.length != null) this.setState({postoje_projekti:true});
                for(var i=0; i<podaci.length; i++) {
                    if (podaci[i].idProjekat==this.state.odabrani_projekat) {
                        this.setState({id_odabranog_projekta:podaci[i].zadaci[this.state.odabrani_zadatak].idProjekta,
                            opis_zadatka:podaci[i].zadaci[this.state.odabrani_zadatak].opis,
                            datum_pocetka:podaci[i].zadaci[this.state.odabrani_zadatak].otkad,
                            datum_zavrsetka:podaci[i].zadaci[this.state.odabrani_zadatak].dokad,
                            zavrsen:podaci[i].zadaci[this.state.odabrani_zadatak].zavrsen,
                            komentar_asistenta:podaci[i].zadaci[this.state.odabrani_zadatak].komentarAsistenta
                        });
                    }
                }
            }
        }
    }
    

}
export default PregledListeProjekata;
