import React from 'react';
import UnosPrisustvaForma from '../UnosPrisustvaForma/UnosPrisustvaForma';
import Header from '../Header/Header';
import UnosPrisustvaSedmice from '../UnosPrisustvaSedmice/UnosPrisustvaSedmice';
import Footer from '../Footer/Footer';
import '../../ZajednickiCSS.css';
import axios from 'axios';


class UnosPrisustva extends React.Component {
    state = {
        studenti: [
            {
                indeks: 1,
                ime: "Neko Nekić",
                predavanje: "da",
                vjezba: "ne",
                tutorijal: "-"
            },
            {
                indeks: 2,
                ime: "Himzo Polovina",
                predavanje: "da",
                vjezba: "-",
                tutorijal: "da"
            },
            {
                indeks: 3,
                ime: "Ivo Ivić",
                predavanje: "-",
                vjezba: "ne",
                tutorijal: "ne"
            },
            {
                indeks: 4,
                ime: "Medo Medić",
                predavanje: "ne",
                vjezba: "ne",
                tutorijal: "ne"
            },
            {
                indeks: 5,
                ime: "Marko Marković",
                predavanje: "-",
                vjezba: "ne",
                tutorijal: "da"
            }
        ],
        predavanjeSvi: "izaberiOpciju",
        vjezbaSvi: "izaberiOpciju",
        tutorijalSvi: "izaberiOpciju",
        sedmica: 0
    }

    constructor(props) {
        super(props);
    }

    handleChangeSvi = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleSubmitSvi = (event) => {
        event.preventDefault();
        let s = this.state.studenti.map(student => {
            return {
                ...student,
                predavanje: this.state.predavanjeSvi !== "izaberiOpciju" ? this.state.predavanjeSvi : student.predavanje,
                vjezba: this.state.vjezbaSvi !== "izaberiOpciju" ? this.state.vjezbaSvi : student.vjezba,
                tutorijal: this.state.tutorijalSvi !== "izaberiOpciju" ? this.state.tutorijalSvi : student.tutorijal
            }
        });
        this.setState({
            studenti: s,
            predavanjeSvi: "izaberiOpciju",
            vjezbaSvi: "izaberiOpciju",
            tutorijalSvi: "izaberiOpciju"
        });
    }

    handleChange = (event, index) => {
        const {name, value} = event.target;
        this.setState(prevState => {
            return {
                ...prevState,
                studenti: prevState.studenti.map(student => {
                    if(student.index === index)
                        return {
                            ...student,
                            [name]: value
                        };
                    return student;
                })
            }
        })
    }

    handleSubmit = () => {
        // Pripremiti sve podatke i poslati backendu u odgovarajućem formatu
    }

    handleClickSedmica = (brojSedmice) => {
        this.setState({sedmica: brojSedmice});
    }
    
    componentDidMount() {
        // Privremeno rješnje
        axios.get('http://localhost:31906/api/fox/prisustvo?idPredmeta=4&brojSedmice=1').then(response => {
            let studenti = response.data.map(s => {
                return {
                    id: s.id,
                    ime: s.ime,
                    indeks: s.indeks,
                    predavanje: s.predavanje === null ? "-" : s.predavanje,
                    tutorijal: s.tutorijal === null ? "-" : s.tutorijal,
                    vjezbe: s.vjezbe === null ? "-" : s.vjezbe
                };
            })
             this.setState({studenti: studenti});
        });
   }

    render() {
        return (
            <div id="unosPrisustvaID" className="footerDno">
                <Header isPocetna={false}/>
                <div style={{padding: "25px", textAlign: "center"}}>
                    {
                        this.state.sedmica !== 0 &&
                            <UnosPrisustvaForma
                                data={this.state}
                                handleSubmit={this.handleSubmit}
                                handleSubmitSvi={this.handleSubmitSvi}
                                handleChange={this.handleChange}
                                handleChangeSvi={this.handleChangeSvi}/>
                    }
                    {   
                        this.state.sedmica === 0 &&
                            <UnosPrisustvaSedmice
                                handleClickSedmica={this.handleClickSedmica}/>
                    }
                    <br/>
                    <br/>
                </div>
                <Footer/>
            </div>
        );
    }
  }
  
  export default UnosPrisustva;
