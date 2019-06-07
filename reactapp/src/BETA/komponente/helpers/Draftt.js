import React from 'react';
import DraftMessage from "./DraftMessage.js";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default class Draft extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
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
                data: item, expanded: true
            },
        });
    };


    deleteIssue = (idIssue) => {

        axios.delete('http://localhost:31902/issues/draft/delete', { 
            params: {
                id: idIssue
            }
        })
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
                                        <Button onClick={() => this.deleteIssue(issue.id)}>Delete</Button>
                                    </div>
                                    <div className = "issueID">id:{issue.id}</div>
                                    <div onClick={() => this.setIssue(issue.id)}>{issue.title}</div>
                                    
                                </div>
                            </Card.Title>
                            

                            {this.state.clickedItem.data === issue.id && this.state.clickedItem.expanded ?
                            <ListGroup>
                                <DraftMessage
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
