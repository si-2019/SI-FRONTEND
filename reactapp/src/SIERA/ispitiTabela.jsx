import React, { Component } from "react";
import "./bootstrap.min.css";

class IspitiTabela extends Component {
  constructor(props) {
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
  }

  /*state = {
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
    ]
  };*/

  povecaj() {
    this.state.brojacTr++;
  }

  render() {
    return (
      <div>
        {this.state.listaIspita.map((item, i) => (
          <table class="table table-hover" key={i}>
            <tbody>
              <tr class="table-success" key={item.nazivGodine}>
                <th scope="row">{item.nazivGodine} </th>
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
              </tr>
              {item.predmeti.map(itemPredmet => (
                <tr class="table-light" key={itemPredmet.podaciOPredmetu}>
                  <td scope="row">{itemPredmet.podaciOPredmetu}</td>
                  {itemPredmet.ispiti.map(itemIspiti => [
                    [
                      <td>{itemIspiti.datum}</td>,
                      <td>{itemIspiti.brojBodova}</td>
                    ]
                  ])}
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    );
  }
}

export default IspitiTabela;
