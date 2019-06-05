import React from 'react';
import url from '../url'

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
            <div>          
            <nav class="NavPadding" >
                <h2 id="top">PRIKAZ SVIH ANKETA</h2>
                <div class="collapse navbar-collapse" id="navbarAnkete"> </div>
            </nav>

            <br></br>
                <table class="anketeTabela" align="center">

                {
                    items.ankete ? Object.keys(items.ankete).map(key => {
                        console.log(items.ankete)
                        let header = [(
                            <tr>
                                <td colspan="6">{items.ankete[key].nazivPredmeta}</td>
                            </tr>
                        ),
                        (
                            <tr>
                            <td>NAZIV ANKETE</td>
                            <td>OPIS</td>
                            <td>DATUM ISTEKA</td>
                            <td>PRIKAZ ANKETE</td>
                            <td>UREDI</td>
                            <td>OBRIŠI</td>
                            </tr>
                        )
                        ]

                        let ankete = items.ankete[key].ankete
                        return header.concat(ankete.map(anketa => (
                            <tr>
                            <th>{anketa.naziv}</th>
                            <th>{anketa.opisAnkete}</th>
                            <th>{anketa.datumIstekaAnkete.substr(0,10)}</th>
                            <th><button type="button" class="btn btn-primary disabled" id="prikaziButton">PRIKAŽI</button></th>
                            <th><button type="button" class="btn btn-primary disabled" id="urediButton">UREDI</button></th>
                            <th><button type="button" class="btn btn-primary disabled" id="obrisiButton" 
                                onClick= {() => this.obrisiAnketu(anketa) } >OBRIŠI</button></th>
                            </tr>
                        )))
                    }) : "Loading..."
                }
                
                
                </table>
                <a href="#top"><button type="button" class="btn btn-primary disabled" id="nazadNaVrhButton">NAZAD NA VRH</button></a>
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
        }).then(() => this.componentDidMount())
    }
}

export default App;