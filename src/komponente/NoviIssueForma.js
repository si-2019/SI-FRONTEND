import React from 'react';
import CategoryComponent from './CategoryComponent'

function NoviIssueForma(props){


    function zatvoriNoviIssue(){
        document.getElementById('overlay').style.display = "none";
    }

    return (

        <div>
            <form>       

                <div className="row" style={{marginTop:'10px'}}>
                    <label className="col-1" style={{marginLeft:'12px', marginTop:'6px'}}>Naslov</label>
                    <CategoryComponent> </CategoryComponent>

                    <button onClick={zatvoriNoviIssue} type="button" className="btn btn-danger float-right" style={{marginLeft:'85px', width:'50px'}}>X</button>
                </div>

                <div className="form-group row col-12" style={{marginTop:'5px', marginLeft:'2px'}}>                    
                    <textarea className="form-control" id="exampleTextarea" rows="10"></textarea>
                </div>

                <div className="form-group row col-12">

                    <div className="custom-file col-8">
                        
                        <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                                               
                    </div>

                    <button type="submit" class="btn btn-outline-primary col-2">Save as draft</button>
                    <button type="submit" class="btn btn-outline-primary col-2">Send</button>           

                </div>
            </form>
        </div>
    );
}

export default NoviIssueForma;