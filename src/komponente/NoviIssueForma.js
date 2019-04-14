import React from 'react';


function NoviIssueForma(props){

    function zatvoriNoviIssue(){
        document.getElementById('overlay').style.display = "none";
    }

    return (

        <div>
            <form>       

                <div className="row" style={{marginTop:'10px'}}>
                    <label className="col-1" style={{marginLeft:'12px', marginTop:'6px'}}>Naslov</label>
                    <select className="form-control col-9" id="naslovSelect">
                        <option>Problem 1</option>
                        <option>Problem 2</option>
                        <option>Problem 3</option>
                        <option>Problem 4</option>
                        <option>Problem 5</option>
                    </select>

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
