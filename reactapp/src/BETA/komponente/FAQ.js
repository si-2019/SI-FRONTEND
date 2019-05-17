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
                <div className="jumbotron">
                    <h3>Frequently asked questions</h3>
                    <hr className="my-4"></hr>


                    {issues.map((issue) =>
                        <div className="card border-dark mb-3"  >
                            <div className="card-header">
                                <h4 className="card-title">Naslov: {issue.naziv}</h4>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{issue.tekst}</p>

                            </div>



                        </div>
                    )}
                </div>

            </div>
        );
    }
}
export default FAQ








