import React from "react";
import LicniPod from "./licniPod";
import Kontakt from "./kontaktPod";
import Tabs from "./TabsSiera";
import Pane from "./PaneSiera";

class Profil extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: 0 //indeks odabranog taba
        };
    }


    render() {
        return (
            <Tabs>
                <Pane label="Licni Podaci">
                    <LicniPod/>
                </Pane>
                <Pane label="Kontakt">
                    <Kontakt/>
                </Pane>
            </Tabs>
        );
    }
}

export default Profil;