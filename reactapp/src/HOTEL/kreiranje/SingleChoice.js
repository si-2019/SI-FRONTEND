import React from 'react'
import './SingleChoiceStyle.css'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tekstPitanja: '',
            odgovori: ['', '']
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.dodajOdgovor = this.dodajOdgovor.bind(this)
        this.obrisiOdgovor = this.obrisiOdgovor.bind(this)
    }

    handleKeyDown(e) {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`; 
     }

     handleInputChange(event) {
        
        event.target.style.height = 'inherit';
        if(event.keyCode == 13)
            event.target.rows = event.target.value.split('\n').length + 1
        else
            event.target.rows = event.target.value.split('\n').length
        let name = event.target.name
        if(name != 'tekstPitanja') {
            let odgovori = this.state.odgovori
            odgovori[parseInt(name)] = event.target.value
            this.setState({
                odgovori,
                bb: event.target.value + " " + name
            })
        }
        else {
            this.setState({
                [event.target.name]: event.target.value
              })
        }
     }
    
      

    render() {
        return (
            <div class="card border-primary mb-3">
                <div class="form-group" style={{margin: "10px"}}>
                    <textarea class="form-control" placeholder="Unesi tekst pitanja" id="tekstPitanjaTextArea" rows="1" name="tekstPitanja" onKeyDown={this.handleInputChange}></textarea>
                </div>
                {this.state.odgovori.map((odgovor, i) => {
                    return (
                        <div className="row" style={{margin: "10px"}}>
                            <div className="col-1"></div>
                            <input id="radioQuestion" type="radio" disabled/>
                            <div class="form-group col-6" >
                                <textarea placeholder="Unesi tekst odgovora" class="form-control" id="tekstPitanjaTextArea" value={this.state.odgovori[i]} name={`${i}`} rows="1" onChange={this.handleInputChange}></textarea>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-secondary btn-block" name={`${i}`} onClick={this.dodajOdgovor} type="button">
                                    Dodaj
                                </button> 
                            </div>
                            <div className="col-2">
                                <button className="btn btn-secondary btn-block" name={`${i}`} onClick={this.obrisiOdgovor} type="button">
                                    Obriši
                                </button> 
                            </div>
                        </div>
                    )
                })}
                
            </div>
        )
    }
}