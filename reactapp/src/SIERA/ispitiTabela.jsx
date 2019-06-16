import React, { Component } from "react";
import "./bootstrap.min.css";
import axios from "axios";

class IspitiTabela extends Component {
  state = {
    listaIspita: [
      [
        {
          idGodine: 11,
          nazivGodine: "2018/19",
          predmeti: [
            {
              idPredmet: 4,
              nazivPredmeta: "Projektovanje informacionih sistema",
              ispiti: []
            },
            { idPredmet: 5, nazivPredmeta: "DS", ispiti: [] },
            { idPredmet: 6, nazivPredmeta: "IEK", ispiti: [] },
            { idPredmet: 7, nazivPredmeta: "VI", ispiti: [] },
            {
              idPredmet: 8,
              nazivPredmeta: "ARM",
              ispiti: [
                {
                  idIspita: 1,
                  nazivIspita: "Prvi parcijalni",
                  bodovi: 10,
                  datum: "2019-05-01T09:00:00.000Z"
                },
                {
                  idIspita: 4,
                  nazivIspita: "Drugi parcijalni",
                  bodovi: 12,
                  datum: "2019-05-31T10:00:00.000Z"
                }
              ]
            },
            {
              idPredmet: 9,
              nazivPredmeta: "SI",
              ispiti: [
                {
                  idIspita: 2,
                  nazivIspita: "Prvi parcijalni",
                  bodovi: 18,
                  datum: "2019-05-05T10:00:00.000Z"
                }
              ]
            }
          ]
        }
      ],
      [
        {
          idGodine: 12,
          nazivGodine: "2017/18",
          predmeti: [{ idPredmet: 12, nazivPredmeta: "RA", ispiti: [] }]
        }
      ]
    ],
    trenutnoLogovaniStudentID: 1
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:31918/ispiti/` + this.state.trenutnoLogovaniStudentID
      )
      .then(res => {
        const lista = res.data.akademskeGodine;
        this.setState({ listaIspita: lista });
      });
  }

  srediDatum(datum) {
    var n = datum.indexOf("T");
    if (n != -1) {
      datum = datum.substring(0, n != -1 ? n : datum.length);
    }
    return datum;
  }

  render() {
    return (
      <div>
        {this.state.listaIspita.map((item, i) => (
          <table className="table table-hover" key={i}>
            <tbody>
              <tr className="table-success" key={item[0].idGodine}>
                <th scope="row" colSpan="7" style={{ textAlign: "center" }}>
                  Akademska godina: {item[0].nazivGodine}
                </th>
              </tr>
              {item[0].predmeti.map(itemPredmet => [
                <tr
                  className="table-success"
                  key={
                    itemPredmet.idPredmet + item[0].nazivGodine + "naziviIspita"
                  }
                >
                  {itemPredmet.ispiti.length == 0 ? null : <td />}
                  {itemPredmet.ispiti.map(itemIspiti => (
                    <td
                      colSpan="2"
                      style={{ textAlign: "center" }}
                      key={itemIspiti.idIspita}
                    >
                      {itemIspiti.nazivIspita}
                    </td>
                  ))}
                </tr>,
                <tr
                  className="table-success"
                  key={
                    itemPredmet.idPredmet +
                    item[0].nazivGodine +
                    "predmetDatumBodovi"
                  }
                >
                  {itemPredmet.ispiti.length == 0 ? null : (
                    <th scope="row">Predmet</th>
                  )}
                  {itemPredmet.ispiti.map(itemIspiti => [
                    <td
                      style={{ textAlign: "center" }}
                      key={itemIspiti.idIspita + "datum"}
                    >
                      Datum
                    </td>,
                    <td
                      style={{ textAlign: "center" }}
                      key={itemIspiti.idIspita + "bodovi"}
                    >
                      Ostvareni bodovi
                    </td>
                  ])}
                </tr>,
                <tr
                  className="table-light"
                  key={
                    itemPredmet.idPredmet + item[0].nazivGodine + "datumBodovi"
                  }
                >
                  {itemPredmet.ispiti.length == 0 ? null : (
                    <td style={{ textAlign: "center" }}>
                      {itemPredmet.nazivPredmeta}
                    </td>
                  )}
                  {itemPredmet.ispiti.map(itemIspiti => [
                    <td
                      style={{ textAlign: "center" }}
                      key={itemIspiti.idIspita + itemIspiti.datum}
                    >
                      {this.srediDatum(itemIspiti.datum)}
                    </td>,
                    <td
                      style={{ textAlign: "center" }}
                      key={
                        itemIspiti.idIspita +
                        itemIspiti.datum +
                        itemIspiti.bodovi
                      }
                    >
                      {itemIspiti.bodovi}
                    </td>
                  ])}
                </tr>
              ])}
            </tbody>
          </table>
        ))}
      </div>
    );
  }
}

export default IspitiTabela;
