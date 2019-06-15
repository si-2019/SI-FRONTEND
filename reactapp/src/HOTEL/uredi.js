import React from 'react'
import './liste/stil.css'
import DatePicker from 'react-datepicker'
import url from './url'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            idAnketa: props.match.params.id,
            datumIstekaAnkete: new Date(),
            nazivAnkete: '',
            showError: '',
            showSuccess: ''
        }
        this.handleDateChange = this.handleDateChange.bind(this)
        this.promijeni = this.promijeni.bind(this)
    }
    
    promijeni() {
       fetch(url + '/promijeniDatumIsteka', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                datumIstekaAnkete: this.state.datumIstekaAnkete,
                idAnketa: this.state.idAnketa,
            })  
        }).then((res, err) => {
            if(res.error) {
                this.setState({
                    showError: "Došlo je do greške!"
                })
            }
            else {
                this.setState({
                    showSuccess: "Uspješno ste promijenili datum roka za popunjavanje."
                })
            }
        })
    }

    render() {
        return (
            <div className="okvirListe">
                <div className="naslovliste">
                    <h1>Promijeni datum isteka</h1>
                </div>
                <div id="urediBody">
                    <div>
                        <h5>Anketa: {this.state.nazivAnkete}</h5>
                        <br/>
                    </div>
                    <h5>Datum isteka ankete:</h5>
                    <div>  
                        <DatePicker
                                onChange={this.handleDateChange} 
                                selected={this.state.datumIstekaAnkete} 
                                showTimeSelect
                                dateFormat="yyyy-MM-dd HH:mm:ss"
                                timeCaption="time"
                                />
                    </div>
                    <button className="btn btn-primary" onClick={this.promijeni} style={{
                        width: "30%",
                        marginTop: "10px",
                        marginBottom: "10px"
                    }}>
                        Promijeni
                    </button>
                    {
                    this.state.showSuccess &&
                        <div class="alert alert-dismissible alert-success">
                        <button type="button" class="close" data-dismiss="alert" onClick={() => { this.setState({ showSuccess: '' }); window.location.reload(); }}>&times;</button>
                        <strong>{this.state.showSuccess}</strong>
                        </div>
                    }
                    {
                        this.state.showError &&
                        <div className="alert alert-dismissible alert-danger">
                        <button type="button" className="close" data-dismiss="alert" onClick={() => { this.setState({ showError: '' }); }}>&times;</button>
                        {this.state.showError}
                        </div>
                    }

                 </div>
            </div>
        )
    }

    handleDateChange(date) {
        this.setState({
            datumIstekaAnkete: date,
            dateChanged: true
        });
    }
    
    componentDidMount() {
        fetch(url + '/dajOsnovno?idAnketa=' + this.state.idAnketa).then(res => res.json()).then(
            res => {
                this.setState({
                    anketa: res.anketa,
                    datumIstekaAnkete: new Date(Date.parse(res.anketa.datumIstekaAnkete)),
                    nazivAnkete: res.anketa.naziv
                })
                console.log(res)
            }
        )
    }

}