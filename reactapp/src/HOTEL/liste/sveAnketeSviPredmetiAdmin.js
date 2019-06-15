import React from 'react';
import url from '../url'
import {Link} from 'react-router-dom'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {}
        }
        this.obrisiAnketu = this.obrisiAnketu.bind(this)
    }
    render() {
        const items = this.state.items
        return (
            <div className="okvirListe">          
             <div className="naslovliste"><h1>Prikaz svih anketa</h1></div>

            <br></br>
            <table className="table-bordered text-center bg-active border-solid tabelaLista" align="center">

                {
                    items.ankete ? Object.keys(items.ankete).map(key => {
                        console.log(items.ankete)
                        let header = [(
                            <tr>
                                <td colspan="6"><h4>{items.ankete[key].nazivPredmeta}</h4></td>
                            </tr>
                        ),
                        (
                            <tr className="bg-primary text-light">
                                <td class="tabtip">Naziv ankete</td>
                                <td class="tabtip">Opis</td>
                                <td class="tabtip">Datum isteka</td>
                                <td class="tabtip">Prikaz ankete</td>
                                <td class="tabtip">Uredi</td>
                                <td class="tabtip">Obriši</td>
                            </tr>
                        )
                        ]

                        let ankete = items.ankete[key].ankete
                        return header.concat(ankete.map(anketa => (
                            <tr>
                            <th class="tabtip1">{anketa.naziv}</th>
                            <th class="tabtip1">{anketa.opisAnkete}</th>
                            <th class="tabtip1">{anketa.datumIstekaAnkete.substr(0,10)}</th>
                            <th class="tabtip1"><Link to={"/Hotel/rezultati/" + anketa.idAnketa}><button type="button" class="btn btn-primary" id="prikaziButton">Prikaži</button></Link></th>
                            <th class="tabtip1"><button type="button" class="btn btn-primary" id="urediButton">Uredi</button></th>
                            <th class="tabtip1"><button type="button" class="btn btn-danger" id="obrisiButton" 
                                onClick= {() => this.obrisiAnketu(anketa) }>Obriši</button></th>
                            </tr>
                        )))
                    }) : "Loading..."
                }
                
                
                </table>
            </div>
        )
    }
    componentDidMount() { 
        fetch(url + '/dajSveAnketePoPredmetima', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(result => {
            this.setState({
                items: result
            })
        }, error => {
            this.setState({
                items: [error, "error"]
            })
        })
    }
    obrisiAnketu(anketaZaBrisanje){
        console.log("Morel")
        fetch(url + '/obrisiAnketu?idKorisnik=1&idAnketa=' + anketaZaBrisanje.idAnketa, { 
            method: 'POST'
        }).then(res => res.json())
          .then((res) => {
            console.log(res)
             if(res.error) {
                 alert("Nije obrisana anketa")
             }
             else {
                 alert("Anketa uspješno obrisana")
             }
             this.componentDidMount()
        })
    }
}

export default App;