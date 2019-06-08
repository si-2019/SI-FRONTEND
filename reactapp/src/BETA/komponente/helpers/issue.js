import React from 'react';
import IssueMessage from "./IssueMessage";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';
import axios from 'axios'

export default class Issue extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            trashStudent: 1,
            trashSS: 0,
            issueID: null,
            clickedItem: {
                data: null,
                expanded: false,
            },
            newArray: this.props.data,
        }
    }

    setIssue = (item) => {
        this.setState({
            clickedItem: {
                data: item, 
                expanded: true
            },
            

        });
    };

    archiveIssue = (idIssue) => {

        const { trashStudent, trashSS} = this.state;
        axios.put('http://localhost:31902/issues/archived/add', { trashStudent, trashSS, idIssue})
        .then((result) => {

            for(let i = 0; i < this.props.data.length; i++){
                if(this.props.data[i].id == idIssue){
                    this.props.data.splice(i, 1);
                    this.setState({
                        newArray: this.props.data
                    })
                }
            }

            this.props.triggerRefreshList(this.state.newArray);
        });

        
    }

    componentWillReceiveProp(){
        alert("Usao sam sada ovo");
    }

    render() {
            return this.props.data.map((issue, index) => {
                let d = issue.messages[0].datum;
                let datum = [];
                datum.push(d[11]);
                datum.push(d[12]);
                datum.push(d[13]);
                datum.push(d[14]);
                datum.push(d[15]);
                datum.push('    ');
                datum.push(d[8]);
                datum.push(d[9]);
                datum.push('.');
                datum.push(d[5]);
                datum.push(d[6]);
                datum.push('.');
                datum.push(d[0]);
                datum.push(d[1]);
                datum.push(d[2]);
                datum.push(d[3]);
                datum.push('.'); 

                return (
                    <div className="row">
                        <Card.Body
                            key={index}
                        >
                            <Card.Title>
                                <div className = "issueView">
                                    <div className = "issueButtonDelete">
                                        <Button onClick={() => this.archiveIssue(issue.id)}>Arhiviraj</Button>
                                    </div>
                                    <div className = "issueID">id:{issue.id}</div>
                                    <div className = "issueDate">          {datum}</div>
                                    <div onClick={() => this.setIssue(issue.id)}>{issue.title}</div>
                                    
                                </div>
                            </Card.Title>
                            

                            {this.state.clickedItem.data === issue.id && this.state.clickedItem.expanded ?
                            <ListGroup>
                                <IssueMessage
                                messages={issue.messages}
                                /> 
                            </ListGroup> : null
                            }
                            
                        </Card.Body>
                    </div>
                );
            })
        }
}
