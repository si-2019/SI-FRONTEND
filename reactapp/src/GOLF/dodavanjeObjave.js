import React, { Component } from 'react'

class DodavanjeObjave extends Component{
    render(){
        return(
            <div className="card border-info mb-3">
                <div className="card-header">
                    <a href="#"><h3>Dodavanje objave</h3></a>
                </div>
                <div className="card-body">
                    <form>
                        Naslov: <br></br><input id="naslovObjave" type="text" name="naslovObjave" class="form-control mr-sm-2"></input>
                        Opis: <br></br>
                        <textarea rows="4" id="opisObjave"  name="opisObjave" class="form-control mr-sm-2"cols="2000"></textarea>
                       <br></br>
                        <input className="dugmic" type="file" multiple></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default DodavanjeObjave