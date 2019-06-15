import React from 'react';
import url from '../url'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {}
        }
    }
    render() {
        const items = this.state.items
        return (
            <div className="okvirListe">
            <div className="naslovliste"><h1>Popunjene ankete na mojim predmetima</h1></div>

            <br></br>

            <table className="tabelaLista table-bordered text-center bg-active border-solid" align="center">
                <tr className="bg-primary text-light">
                <td class="tabtip">Naziv ankete</td>
                <td class="tabtip">Prikaz ankete</td>
                </tr>
            
                {items.ankete ? items.ankete.map(anketa => (
                    <tr>
                        <th class="tabtip1">{anketa.naziv}</th>
                        <th class="tabtip1"><a href={"/Hotel/popunjenaanketa/" + anketa.idPopunjenaAnketa}><button type="button" class="btn btn-primary" id="prikaziButton">Prikaži</button></a></th>
                    </tr>
                )) : "Loading..."}
                </table>
            </div>
        )
    }
    componentDidMount() { 
        console.log(1234567)
        fetch(url + '/dajPopunjeneAnketeProfesor?idKorisnik=1', {
            method: 'GET',
            headers: {
                'Authorization': window.localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(result => {
            console.log(4322123)
            this.setState({
                items: result
            })
        }, error => {
            this.setState({
                items: [error, "error"]
            })
        })
    }
    
}

export default App;