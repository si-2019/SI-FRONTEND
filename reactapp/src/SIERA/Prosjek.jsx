import React, { Component } from 'react';
import axios from "axios";

class Prosjek extends Component {
    constructor() {
        super();
        this.state = {
            StudentID: 2,
            ukupanProsjek: 2.0,
            prosjekGodina: [],
            zimski: [],
            ljetni: []
        }
    }
    
    componentDidMount() {
        axios
        .get(
            `http://localhost:31918/prosjek/` +
            this.state.StudentID
        )
        .then(res => {
            const Store = []; 
            Store.push(res.data);
            const uk = Store.map(obj => obj.ukupan);
            this.setState({ ukupanProsjek: uk });

            const prosjek = res.data.prosjeci.map(obj => obj.prosjekGodina);
            this.setState({prosjekGodina: prosjek});


            const zimski= res.data.prosjeci.map(obj => obj.zimski);
            this.setState({zimski: zimski});
            const ljetni= res.data.prosjeci.map(obj => obj.ljetni);
            this.setState({ljetni});

        });
}

vratiGod = (provjeri,i) => {
    if(provjeri== 0 ) return;
    else return (
    
            
            <label style={{ textAlign: "left" }}>{++i}. godina: {provjeri}</label>  
            
    
    )
}
vratiZimski = (provjeri,i) => {
    if(provjeri== 0 ) return;
    else return (
    
        <label style={{ textAlign: "left" }}>   Zimski semestar: {this.state.zimski[i]}</label>

    )
}
vratiLjetni = (provjeri,i) => {
    if(provjeri== 0 ) return;
    else return (
    
    
        <label style={{ textAlign: "left" }}>    Ljetni semestar: {this.state.ljetni[i]}</label>
       
    )
}

    render() { 
        return (
            <div className="container-fluid" style={{ height: "100%" }}>
                    <div className="d-flex justify-content-center" style={{ height: "100%" }}>
                        <div className="d-flex align-items-center">
                            <div class="row" style={{ margin: "0px" }}>
                                <div class="col-lg col-md" >

                                    <div class="card" style={{ width: "30rem" }}>
                                        <div class="card-body">
                                        <h3 class="card-title">Prosjek</h3>
                        <div style={{ visibility: "hidden" }}>dssffds</div>
                        <h6 class="card-subtitle mb-2 text-muted">Ukupan prosjek ciklusa: </h6>
                        <label>{this.state.ukupanProsjek}</label>
                        <div style={{ visibility: "hidden" }}>dssffds</div>
                        <div style={{ visibility: "hidden" }}>dssffds</div>
                        <div>
                        {this.state.prosjekGodina.map((prosjek,index) =>(
                            <div class="text-center">
                             <div className="row" class="text-center" >
                             {this.vratiGod(prosjek,index)}
                             </div>
                             <div className="row" class="text-center">
                             {this.vratiZimski(prosjek,index)}
                             </div>
                             <div className="row" class="text-center">
                             {this.vratiLjetni(prosjek,index)} 
                             </div>
                            
                             
                        
                         </div>
                        ))}                 
                        </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

          
            );
    }
}
 
export default Prosjek;
