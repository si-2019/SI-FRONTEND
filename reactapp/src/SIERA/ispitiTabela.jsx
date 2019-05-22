import React, { Component } from "react";
import "./bootstrap.min.css";
import axios from "axios";

class IspitiTabela extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      listaIspita: [
        {
          nazivGodine: "2015/2016",
          predmeti: [
            {
              podaciOPredmetu: "Predmet 1",
              ispiti: [
                { datum: "20.03.2019", brojBodova: "17" },
                { datum: "20.05.2019", brojBodova: "20" },
                { datum: "10.07.2019", brojBodova: "40" }
              ]
            },
            {
              podaciOPredmetu: "Predmet 2",
              ispiti: [
                { datum: "10.03.2019", brojBodova: "14" },
                { datum: "10.05.2019", brojBodova: "11" },
                { datum: "04.07.2019", brojBodova: "25" }
              ]
            }
          ]
        },
        {
          nazivGodine: "2018/2019",
          predmeti: [
            {
              podaciOPredmetu: "Predmet 3",
              ispiti: [
                { datum: "20.03.2019", brojBodova: "17" },
                { datum: "20.05.2019", brojBodova: "20" },
                { datum: "10.07.2019", brojBodova: "40" }
              ]
            }
          ]
        }
      ],
      brojacTr: 0
    };
  }*/

  state = {
    listaIspita: [],
    trenutnoLogovaniStudentID: 1
  };

  /*povecaj() {
    this.state.brojacTr++;
  }*/

  componentDidMount() {
    axios
      .get(
        `http://localhost:31918/ispiti/` + this.state.trenutnoLogovaniStudentID
      )
      .then(res => {
        const lista = res.data.akademskeGodine;
        console.log(lista[0][0].predmeti);
        this.setState({ listaIspita: lista });
      });
  }

  render() {
    return (
      <div>
        {this.state.listaIspita.map((item, i) => (
          <table class="table table-hover" key={i}>
            <tbody>
              <tr class="table-success" key={item[0].idGodine}>
                <th scope="row" colSpan="7" style={{ textAlign: "center" }}>
                  Akademska godina: {item[0].nazivGodine}
                </th>
              </tr>
              {item[0].predmeti.map(itemPredmet => [
                <tr class="table-success">
                  {itemPredmet.ispiti.length == 0 ? "" : <td />}
                  {itemPredmet.ispiti.map((itemIspiti, j) => (
                    <td colSpan="2">{itemIspiti.nazivIspita}</td>
                  ))}
                </tr>,

                <tr class="table-success">
                  {itemPredmet.ispiti.length == 0 ? (
                    ""
                  ) : (
                    <th scope="row">Predmet</th>
                  )}
                  {itemPredmet.ispiti.map(() => [
                    <td>Datum</td>,
                    <td>Ostvareni bodovi</td>
                  ])}
                </tr>,
                <tr class="table-light">
                  {itemPredmet.ispiti.length == 0
                    ? ""
                    : itemPredmet.nazivPredmeta}
                  {itemPredmet.ispiti.map(itemIspiti => [
                    <td>{itemIspiti.datum}</td>,
                    <td>{itemIspiti.bodovi}</td>
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

/*{item.predmeti.map(itemPredmet => (
                <tr class="table-light" key={itemPredmet.podaciOPredmetu}>
                  <td scope="row">{itemPredmet.podaciOPredmetu}</td>
                  {itemPredmet.ispiti.map(itemIspiti => [
                    [
                      <td>{itemIspiti.datum}</td>,
                      <td>{itemIspiti.brojBodova}</td>
                    ]
                  ])}
                </tr>
              ))}*/

/*
              <tr class="table-success" key={item[0].idGodine}>
                <th scope="row">{item[0].nazivGodine} </th>
                <td colSpan="2">I parcijalni</td>
                <td colSpan="2">II parcijalni</td>
                <td colSpan="2">Usmeni</td>
              </tr>
              <tr class="table-success" key={item.nazivGodine + i}>
                <th scope="row">Predmet</th>
                <td>Datum</td>
                <td>Ostvareni bodovi</td>
                <td>Datum</td>
                <td>Ostvareni bodovi</td>
                <td>Datum</td>
                <td>Ostvareni bodovi</td>
              </tr>*/

export default IspitiTabela;
