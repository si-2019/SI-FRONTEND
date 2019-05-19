import React from "react";

class ZadaceTabela extends React.Component {

    render() {
        return (
            <table class="table table-hover">
                <tbody>
                    <tr class="table-primary">
                        <th scope="row">Akademska godina {this.props.akGod}</th>
                        <td colSpan="2">Zadaca 1</td>
                    </tr>
                    <tr class="table-primary">
                        <th scope="row" >Predmet</th>
                        <td>Rok</td>
                        <td>Ostvareni bodovi</td>
                    </tr>
                </tbody>

            </table>
        );
    }
}
export default ZadaceTabela;

//prihvata props: akGodina, brojZadaca