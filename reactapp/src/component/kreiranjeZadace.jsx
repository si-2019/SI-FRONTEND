import React from 'react'

class KreiranjeZadace extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            idPredmeta: "",
            radnja: "Kreiranje",
            naziv: "",
            datum: "",
            vrijeme: "23:59",
            postavka: "",
            brojZadataka: 1,
            sviTipoviIsti: false,
            listaTipova: [],
            sviBodoviIsti: false,
            listaBodova: [],
            ukupnoBodova: 0,
        }
    }
    
    setAllState = () => {
        if(this.props === null) { // u pitanju je kreiranje i state su defaultni
            this.setState = () => {
                this.state.idPredmeta = 1;
            }
        }
        else { // u pitanju je azuriranje i state treba popuniti podacima
            
        }

    }

    render() {
        return(
        <div>
            kr
        </div>)
    }
}

export default KreiranjeZadace