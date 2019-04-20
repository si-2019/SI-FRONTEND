import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import KreiranjeZadace from './kreiranjeZadace';
import AzuriranjeZadace from './azuriranjeZadace';


class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routeNaKreiranje: false,
            routeNaAzuriranje: false
        }
    }
    
    render() {
        return(
        <div>
            
            <BrowserRouter>
            <div className="card-header bg-primary text-light  mb-4">
                <h5>
                    <Link to="/KILO/kreiranjeZadace/?idPredmeta=3">
                        Kreiranje zadaće  
                    </Link>
                </h5>
                <h5>
                    <Link to="/KILO/azuriranjeZadace/?idPredmeta=3">
                        Ažuriranje zadaće 
                    </Link>
                </h5>
            </div>

                <Route path='/KILO/kreiranjeZadace/'  exact component={KreiranjeZadace}/>
                <Route path='/KILO/azuriranjeZadace/' exact component={AzuriranjeZadace}/>
            </BrowserRouter>
            
        </div>
        );
    }
}

export default MainContent