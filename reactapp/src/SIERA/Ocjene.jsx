import React from "react";
import TabelaOcjene from "./TabelaOcjene";
class Ocjene extends React.Component{

    constructor(){
        super();
        this.state={
            akGodine: [{
                naziv: "2017",
                predmeti: [{
                    ocjena: "6",
                    naziv: "cupanje trave"
                },{
                    ocjena: "10",
                    naziv: "guglanje"
                }]
            },{
                naziv: "2018",
                predmeti: [{
                    ocjena: "7",
                    naziv: "jupi"
                }]
            }]
        }
    }
    render(){
        return(
            <>

                 {this.state.akGodine.map(god=>
                    <TabelaOcjene 
                    predmeti = {god.predmeti} 
                    akGod = {god.naziv}
                    />)}
               </>
            
        );
    }
}

export default Ocjene;