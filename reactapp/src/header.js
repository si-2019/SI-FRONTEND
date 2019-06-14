import React from 'react'
import {Link} from 'react-router-dom'

export default class App extends React.Component {
    render() {

        let timovi = ["Alpha", "Beta", "Charlie", "Delta", "Echo", "Fox", "Golf", "Hotel", "India",
                        "Juliet", "Kilo", "Lima", "Mike", "November", "Oscar", 
                         "Papa", "Romeo", "Siera", "Tango", "Uniform"];
            
                         

        return (
            
            <div style={{backgroundColor: "#00203f", height:"40px"}} class="nav-link active"> 
                {timovi.map(t => <div style={{display: "inline"}}> <Link style={{color: "#adefd1"}} to={`/${t}`}> {t} </Link> </div>)}
                <button type="button" className="odjava" data-placement="right" margin-left="70%" text-align="center" onClick={this.Odjavi} >Odjavi se</button>   
                
                <button onClick={() => this.setState({ modalShow: true })} >Prikazi log</button> 
          </div>

        ) 
    }
}