import React, { Component } from 'react'

export class Ocjena extends Component {

    state = {
        ocjena : 5
    }

    izracunajOcjenu = () => {
        var suma = 0;
        this.props.ispiti.forEach(ispit => {
            if (ispit.polozen)
                suma = suma + ispit.bodovi;
        });
        this.props.zadace.forEach(zadaca => {
            suma = suma + zadaca.bodovi;
        });
        suma = suma + this.props.prisustvo;

        var ocjena = Math.round((suma + 5)/10);
        console.log(suma);
        //if (!(ocjena >= 6))
        //    return "Nije upisana ocjena"
        return ocjena;
    }

    componentDidMount(){
        this.setState({ocjena:this.izracunajOcjenu()});
    }

  render() {
    return (
      <div>
        <h2>{this.state.ocjena}</h2>
      </div>
    )
  }
}

export default Ocjena
