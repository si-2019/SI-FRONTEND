import React from "react";
import ZadaceTabela from "./ZadaceTable";

class Zadace extends React.Component{
    constructor(){
        super();
        this.state={
            studentId : 1,
            akGodine: ["2017"],
            predmeti:["lala", "maca"],
            zadace:[{
                naziv: "Zadaca 1",
                rok:"DD/MM/YYYY",
                ostvBodovi: "4"
            },{
                naziv:"Zadaca 2",
                rok:"DD/MM/YYYY hehehehe",
                ostvBodovi: "434"
            }]
        }
    }

    componentDidMount(){
        //api koji ce vratit zadace za studenta + akademske godine i predmete
        //trebace mi zadace za 1 predmet
    }
    render(){
        return(
            <ZadaceTabela 
                akGod={this.state.akGodine[0]}
                zadace={this.state.zadace}
                />
        );
    }
}
export default Zadace;