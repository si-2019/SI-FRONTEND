import React from "react";

class TabelaOcjene extends React.Component {

    render() {
        return (
            <table class="table table-hover" style={{maxWidth:"400px"}}>
                <tbody>
                    <tr class="table-success">
                        <th scope="row" colSpan="2">Akademska godina {this.props.akGod}</th>
                    </tr>
                    <tr class="table-primary">
                        <td>Predmet</td>
                        <td>Ocjena</td>
                    </tr>
                    {this.props.predmeti.map(predmet=> 
                        <tr class="table-light">
                            <td>{predmet.naziv}</td>
                            <td>{predmet.ocjena}</td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        );
    }
}

export default TabelaOcjene;