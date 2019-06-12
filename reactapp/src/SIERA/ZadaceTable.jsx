import React from "react";

class ZadaceTabela extends React.Component {

    render() {
        return (
            <table class="table table-bordered text-center bg-active border-solid" style={{  float: "left", marginLeft: "20px"}}>
                <tbody>
                    <tr class="bg-primary text-light">
                        <th class="tabtip" scope="row">Akademska godina {this.props.akGodina}</th>
                        {this.props.zadace.map(x =>
                            <th class="tabtip" colSpan="2">{x.naziv}</th>
                        )}
                    </tr>
                    <tr class="bg-primary text-light">
                        <th class="tabtip" scope="row" >Predmet</th>
                        {this.props.zadace.map(x =>
                            <>
                                <th class="tabtip">Rok</th>
                                <th class="tabtip">Ostvareni bodovi</th>
                            </>
                        )}
                    </tr>
                    <tr class="tabtip1">
                        <td>predmet neki</td>
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