import React, { Component } from 'react'

class dodavanjeObjave extends Component{
    render(){
        return(
            <div className="card border-info mb-3">
                <div className="card-header">
                    <a href="#"><h3>Dodavanje objave</h3></a>
                </div>
                <div className="card-body">
                    <form>
                        Naslov: <br></br><input id="naslovObjave" type="text" name="naslovObjave" class="form-control mr-sm-2"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default dodavanjeObjave