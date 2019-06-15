//import React from 'react'

import React, { Component } from 'react'

export class prisustvoTabela extends Component {
    
    state = {
        prisustvoPredavanja : [{brojSedmice: 1, prisutan: "DA"}, {brojSedmice: 2, prisutan: "NE"}],
        prisustvoTutorijali : [{brojSedmice: 1, prisutan: "NE"}, {brojSedmice: 2, prisutan: "DA"}]
    };

    dajStilPolja = (p) => {
        let boja = "green"
        if (p == "NE")
            boja = "red"
        let stil = {backgroundColor:boja, minWidth: 30}
        return stil;
    }

    createTable = (prisustva) => {
        let table = []
        let children = [[],[]]

        children[0].push(<td>Broj sedmice: </td>)
        children[1].push(<td>Prisustvovao/la: </td>)

        for (let i = 0; i < prisustva.length; i++)
        {
            children[0].push(
            <td>
                {prisustva[i].brojSedmice}
            </td>)
            let p = prisustva[i].prisutan;
            children[1].push(
            <td style = {this.dajStilPolja(p)}>
                {p}
            </td>)    
        }
        table.push(<tr>{children[0]}</tr>)
        table.push(<tr>{children[1]}</tr>)
        
        return table;

    }

    render() {
        return (
            <div>
                Predavanja:
                <table>
                    {this.createTable(this.state.prisustvoPredavanja)}
                </table>
                Tutorijali:
                <table>
                    {this.createTable(this.state.prisustvoTutorijali)}
                </table>
            </div>
        )
    }
}

export default prisustvoTabela

