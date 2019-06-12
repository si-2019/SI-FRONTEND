import React from "react";
import ZadaceTabela from "./ZadaceTable";
import axios from "axios";

class Zadace extends React.Component{
    constructor(){
        super();
        this.state={
            studentId : 1,
            zadacePoGodinama:[{rok:"nkj", ostvBodovi:"njk"}]
        }
    }
    componentDidMount(){
        axios
            .get("http://localhost:31918/zadace/" + this.state.studentId)
            .then(res=>{
                this.setState({
                    zadacePoGodinama: res.data
                })
                console.log("res.data: " + res.data[0]);
            })
            .catch(err=>{
                console.log(err);
            })
    }
    render(){
        return(
            <>
            </>
        );
    }
}
export default Zadace;