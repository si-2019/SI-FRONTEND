import React from "react";

class ZadaceTabela extends React.Component {

    render() {
        return (
            <table class="table table-hover">
                <tbody>
                    <tr class="table-success">
                        <th scope="row">Akademska godina {this.props.akGod}</th>
                        {this.props.zadace.map(x =>
                            <td colSpan="2">{x.naziv}</td>
                        )}
                    </tr>
                    <tr class="table-success">
                        <th scope="row" >Predmet</th>
                        {this.props.zadace.map(x =>
                            <>
                                <td>Rok</td>
                                <td>Ostvareni bodovi</td>
                            </>
                        )}
                    </tr>
                    <tr class="table-light">
                        <td>pred</td>
                        {this.props.zadace.map(x =>
                            <>
                                <td>{x.rok}</td>
                                <td>{x.ostvBodovi}</td>
                            </>
                        )}
                    </tr>
                </tbody>
            </table>
        );
    }
}
export default ZadaceTabela;

//prihvata props: akGodina,  zadace[]