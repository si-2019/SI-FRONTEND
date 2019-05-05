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
            <div>

                <table>
                    <tr>
                    <td>NAZIV ANKETE</td>
                    <td>OPIS</td>
                    <td>DATUM ISTEKA</td>
                    <td>PRIKAZ ANKETE</td>
                    <td>UREDI</td>
                    <td>OBRIŠI</td>
                    </tr>
            

                {items.ankete ? items.ankete.map(anketa => (
                    <tr>
                    <th>{anketa.naziv}</th>
                    <th>{anketa.opis}</th>
                    <th>{anketa.datumIstekaAnkete}</th>
                    <th> <button class="ButtoniTabela" type="button" id="prikaziButton" >PRIKAŽI</button> </th>
                    <th> <button class="ButtoniTabela" type="button" id="urediButton" >UREDI</button> </th>
                    <th> <button class="ButtoniTabela" type="button" id="obrisiButton" >OBRIŠI</button> </th>
                    </tr>
                )) : "Loading..."}
                </table>
            </div>
        )
    }
    componentDidMount() { 
        fetch(url + '/dajListuJavnihAnketa', {
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
}

export default App;