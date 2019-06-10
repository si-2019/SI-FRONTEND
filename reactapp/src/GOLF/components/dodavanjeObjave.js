import React, { Component } from 'react'

class DodavanjeObjave extends Component{
    render(){
        return(

            <div>
                <div class="card" id="dodavanjeObjave">
                    <div class="card-body">
                        <div class="form-group">
                            <label class="col-form-label" for="inputDefault">Naslov: </label>
                            <input type="text" class="form-control" id="inputDefault"></input>
                         </div>
                         <div class="form-group">
                            <label class="col-form-label" for="inputDefault">Opis: </label>
                            <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                         </div>
                         <div class="form-group">
                            <label for="exampleInputFile">Datoteke: </label>
                            <br></br>
                            <input type="file"  multiple></input>
                        </div>
                        <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck1" checked=""></input>
                    <label class="custom-control-label" for="customCheck1">Sakrij objavu</label>
                </div>
                        <button type="button" class="btn btn-primary" id="dugmeObjavi">Objavi</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DodavanjeObjave