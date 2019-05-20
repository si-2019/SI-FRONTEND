import React from "react";
import Fotografija from "./fotografija";


class Profil extends React.Component{
    constructor(){
        super();
        this.state = {
            ime: "Bacam hejt",
            prezime: "ovom predmetu",
            StudentID: 1,
            fotka: null
        }
    }

    render(){
        return(
            <>
                <div className="card mb-3" style={{ minWidth: "300px", maxWidth: "500px" }}>
                    <h3 className="card-header">{this.state.ime} {this.state.prezime}</h3>
                    <Fotografija fotografija={this.state.fotka} />
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <h6 className="card-subtitle text-muted"></h6>
                    </div>
                    
                   
                </div>
            </>
        );
    }
}

export default Profil;