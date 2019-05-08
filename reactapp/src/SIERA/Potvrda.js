import React from "react";
import PopUp from "./PopUp"
class Potvrda extends React.Component {
    constructor() {
        super();
        this.state = {
            visibleGreska:"hidden",
            visibleOk: "visible",
            successful: "true",
            isActive: false
        }
        this.handleVisible = this.handleVisible.bind(this);
    }
//treba dodati api za vidljivost
    handleVisible(){
        this.setState(prevstate=>{
            if(!prevstate.isActive){
                return{
                    visibleOk:"hidden",
                    isActive: true
                }
            }
            return{
                
            }
        });
    }
    render() {
        return (
            <div className="col-2">
                <PopUp 
                class="alert alert-dismissible alert-success" 
                style={{backgroundColor:"#14bb9d", borderColor:"#14bb9d", color:"white", visibility:this.state.visibleOk}}
                boldiraniTekst="Ok!"
                ostaliTekst="Uspjesno ste izmijenili svoje podatke."
                onClick={this.handleVisible}
                />
            
                <PopUp 
                class="alert alert-dismissible alert-danger" 
                style={{ backgroundColor: "#e74b3c", borderColor: "#e74b3c", color: "white", visibility: this.state.visibleGreska }}
                boldiraniTekst="Greška!"
                ostaliTekst="Nešto nije uredu. Molimo ponovite unos."
                onClick={this.handleVisible}
                /> 
            </div>
        );
    }
}

export default Potvrda;