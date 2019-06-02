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
        }
    }

    setIssue = (item) => {
        this.setState({
            clickedItem: {
                data: item, expanded: true
            }
        });
    };

    deleteIssue = (idIssue) => {

        const { trashStudent, trashSS} = this.state;
        axios.put('http://localhost:31902/issues/archived/add', { trashStudent, trashSS, idIssue})
        .then((result) => {
            alert(result);
        });
    }

    componentWillReceiveProp(){
        alert("Usao sam sada ovo");
    }

    render() {
            return this.props.data.map((issue, index) => {
                return (
                    <div className="row">
                        <Card.Body
                            key={index}
                        >
                            <Card.Title>
                                <div className = "issueView">
                                    <div className = "issueButtonDelete">
                                        <Button onClick={() => this.deleteIssue(issue.id)}>Archive</Button>
                                    </div>
                                    <div className = "issueID">id:{issue.id}</div>
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
