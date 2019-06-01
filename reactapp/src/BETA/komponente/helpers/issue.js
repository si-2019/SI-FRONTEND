import React from 'react';
import IssueMessage from "./IssueMessage";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

export default class Issue extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
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

    render() {
            return this.props.data.map((issue, index) => {
                return (
                    <div className="row">
                    <Card.Body
                        key={index}
                        onClick={() => this.setIssue(issue.id)}
                    >
                        <Card.Title>
                        <div className="row">
                        <div className="col-1">id:{issue.id}</div>
                        <div className="col-11">{issue.title}</div>
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
