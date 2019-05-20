import React from "react";
import ZadaceTabela from "./ZadaceTable";

class Zadace extends React.Component{
    constructor(){
        super();
        this.state={
            studentId : 1,
            akGodine: ["2017", "2018", "2019"],
            predmeti:["lala", "maca"],
            zadace:[{
                naziv: "Zadaca 1",
                rok:"DD/MM/YYYY",
                ostvBodovi: "4"
            },{
                naziv:"Zadaca 2",
                rok:"DD/MM/YYYY hehehehe",
                ostvBodovi: "434"
            },{
                naziv:"Zadaca 3",
                rok:"do besvijesti",
                ostvBodovi: "lmao jos bi bodove"
            }]
        }
    }
    componentDidMount(){
    }
    render(){
        return(
            <>
            <ZadaceTabela 
                akGodina={this.state.akGodine[0]}
                zadace={this.state.zadace}
            />
            </>
        );
    }
}
export default Zadace;