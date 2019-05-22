import React from 'react'
import { Button } from '@material-ui/core';
import axios from 'axios';


class FAQ extends React.Component {
    constructor() {
        super();
        this.state = {
            issues: [ ],
            id: 4
        }
    }

componentDidMount(){
    axios.get('http://localhost:31902/frequentIssue/get').then( res => {
         console.log("stigao get")
        
        this.setState({issues: res.data, loading: true});
      })
}
    render() {
        let issues = this.state.issues
        return (
            <div>
                
                <h4 style={{ textAlign: 'center', color: 'primary' }}>Frequently asked questions</h4>
                    <hr className="my-4"></hr>


                    {issues.map((issue) =>
                        <div className="card border-dark mb-3"  >
                            <div className="card-header" >
                                <h4 className="card-title" style={{ textAlign: 'left'}}>Naslov: {issue.naziv}</h4>
                            </div>
                            <div className="card-body"  >
                                <p className="card-text" style={{ textAlign: 'left'}}>Odgovor: {issue.tekst}</p>

                            </div>



                        </div>
                    )}
               

            </div>
        );
    }
}
export default FAQ








