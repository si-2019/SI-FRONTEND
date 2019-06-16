import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import ModalChangeLog from './ROMEO/components/HomePage/ModalChangeLog'
import { createBrowserHistory } from "history";

export default class App extends React.Component {

    Odjavi = (e) => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("id");
        const history = createBrowserHistory();
        history.push('/romeo/login');
        window.location.reload();
    }

    PrikaziLog = (e) => {
        this.refs.modal.show()
    }

    PrikaziHeader() {
        var logiran = localStorage.getItem("token");
        if((window.location.pathname.includes("romeo") || window.location.pathname.includes("Romeo")) && logiran == null) {
            return false;
        }
        return true;
    }

    JeLiLogiran() {
        var logiran = localStorage.getItem("token");
        if(logiran) return ([
            <button onClick={this.PrikaziLog} >Prikazi log</button>,
            <button type="button" className="odjava" data-placement="right" margin-left="70%" text-align="center" onClick={this.Odjavi} >Odjavi se</button>
        ]);
        return;
    }

    render() {

        let timovi = ["Alpha", "Beta", "Charlie", "Delta", "Echo", "Fox", "Golf", "Hotel", "India",
                        "Juliet", "Kilo", "Lima", "Mike", "November", "Oscar", 
                         "Papa", "Romeo", "Siera", "Tango", "Uniform"];

        if(this.PrikaziHeader()) {
            return (
            
                <div className="Sve">
                <div style={{backgroundColor: "#00203f",marginTop:"25px", paddingBottom:"83px", display:"inline" }} className="nav-link active">
                    {timovi.map(t => <div style={{display: "inline"}}> <Link style={{color: "#adefd1"}} to={`/${t}`}> {t} </Link> </div>)}
                    {this.JeLiLogiran()}
                    <ModalChangeLog container={this} ref = "modal" />
                    
                    
                </div>
                <div style={{marginLeft:"86%", display:"inline", width:"50px" }} className="header">
                        <img 
                    src="http://etf.unsa.ba/etf/css/images/etf-dugi.gif"
                    alt="new"
                    data-placement="right"
                />
                </div>
            </div>
    
            )
        }
        return null;
        
    }
}