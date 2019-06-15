import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import ProfessorsAvailability from "./ProfessorsAvailability/ProfessorsAvailability";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>

                    <Route path="/echo" exact component={ProfessorsAvailability} />
                    <Route path="/echo/professors-availability" exact component={ProfessorsAvailability} />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;