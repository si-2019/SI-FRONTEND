import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import KreiranjeZadace from './kreiranjeZadace';
import AzuriranjeZadace from './azuriranjeZadace';

class MainContent extends React.Component {

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

                <Link to="/KILO/kreiranjeZadace/?idPredmeta=3">
                    Kreiranje    
                </Link>
                <Link to="/KILO/azuriranjeZadace/?idPredmeta=3">
                    Azuriranje    
                </Link>

                <Route path='/KILO/kreiranjeZadace/'  exact component={KreiranjeZadace}/>
                <Route path='/KILO/azuriranjeZadace/' exact component={AzuriranjeZadace}/>
            </BrowserRouter>
        </div>
        );
    }
}

export default MainContent