import React from 'react';
import ArchivedMessage from "./ArchivedMessage";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default class Archived extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            clickedItem: {
                data: null,
                expanded: false,
            },
            trashStudent: 2,
            trashSS: 0
        }
    }

    setIssue = (item) => {
        this.setState({
            clickedItem: {
                data: item, expanded: true
            }
        });
    };

    deleteIssue = (id_Issue) => {
        const {trashStudent, trashSS} = this.state;
        const id = id_Issue;
            
        axios.put('http://localhost:31902/issues/archived/delete', { trashStudent, trashSS, id })
        .then((result) => {
            alert(result);
        });
    }
    

    render() {
            return this.props.data.map((issue, index) => {
                return (
                    
                    <div className = "row">
                        <Card.Body
                            key={index}
                        >
                            <Card.Title>
                                <div className = "issueView">
                                    <div className = "issueButtonDelete">
                                        <Button onClick = {() => this.deleteIssue(issue.id)}>Delete</Button>
                                    </div>
                                    <div className = "issueID">id:{issue.id}</div>
                                    <div onClick={() => this.setIssue(issue.id)}>{issue.title}</div>
                                    
                                </div>
                            </Card.Title>
                            

                            {this.state.clickedItem.data === issue.id && this.state.clickedItem.expanded ?
                            <ListGroup>
                                <ArchivedMessage
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
