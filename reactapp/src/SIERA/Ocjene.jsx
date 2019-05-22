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
            }]
        }
    }
    render(){
        return(
                <TabelaOcjene 
                predmeti = {this.state.akGodine[0].predmeti} 
                akGod = {this.state.akGodine[0].naziv}
                />
            
        );
    }
}

export default Ocjene;