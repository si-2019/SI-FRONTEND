import React from 'react'
import url from './url'
import './liste/stil.css'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id
        }
    }

    render() {
        return (
            <div className="okvirListe" id="containerKreiranje">
                
                <div className="naslovliste"><h1>Popunjena anketa #{this.state.id}</h1></div>
                
                <br></br>
                <div style={{backgroundColor: "white", width: "70%", margin: "auto"}}>
                    {this.state.anketa ? (
                    <div>
                        <br/>
                        <h5>Naziv ankete: {this.state.anketa.naziv}</h5>
                        <h5>Vrijeme popunjavanja: {(new Date(this.state.anketa.vrijemePopunjavanja)).toLocaleString('hr')}</h5>
                        <br/>
                        <h4>Pitanja:</h4>
                        <div style={{
                            width: "80%",
                            margin: "auto"
                        }}>
                        {(this.state.anketa.odgovori) && this.state.anketa.odgovori.map(pitanje => (
                            <div className="card-body-pitanje" style={{
                                textAlign: "center"
                            }}>
                                <h5>{pitanje[0].tekstPitanja}</h5>
                                {
                                    pitanje.map(odgovor => (
                                        <div>
                                            {odgovor.vrstaPitanja == 'multiple-choice' ? 
                                                <div>
                                                    {odgovor.tekstOdgovora}
                                                </div>
                                            : 
                                                <div>
                                                    {odgovor.odgovor}
                                                </div>
                                            }
                                        </div>
                                    ))
                                }
                                <br/>
                            </div>
                        ))}
                        </div>
                    </div>
                    ) : "Loading..."}
                </div>

            </div>
        )
    }

    componentDidMount() { 
       
        fetch(url + '/dajPopunjenuAnketu?id='+this.state.id, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            this.setState({
                anketa: result
            })
        }, error => {
            this.setState({
                error: [error, "error"]
            })
        })
    }

}