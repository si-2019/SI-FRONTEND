import React from "react";
import Notifikacija from '../SharedComponents/Notifikacija'

class PrijavljeniIspiti extends React.Component {
  state = { notifikacija: false, notifikacijaPoruka:'', severity:'' };

  renderNotification = () => {
    const {severity, notifikacija} = this.state
    let background
    if(severity === 'high')
      background = 'red';
    else 
      background = severity === 'medium' ? 'orange' : 'green'
    return notifikacija && (<div>
      <Notifikacija 
        poruka={this.state.notifikacijaPoruka}
        background={background} 
      />
    </div>)
  }

  odjavaSaIspita = () => {
    // await axios.delete(`/prijava/${el.idPredmet}/:studentID`)
    // Dobaviti status iz axiosa
    const status = 201;
    status === 200 && this.setState({
      notifikacija:true, 
      notifikacijaPoruka:"Uspjesna odjava sa ispita"
    })
    status !== 200 && this.setState({
      notifikacija:true, 
      notifikacijaPoruka:"Neuspjesna odjava sa ispita",
      severity: 'high'
    })
  }

  render() {
    return (
      <div>
        {this.renderNotification()}
        <h1>Prijavljeni ispiti</h1>
      </div>
    );
  }
}

export default PrijavljeniIspiti;
