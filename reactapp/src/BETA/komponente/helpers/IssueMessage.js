import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'

const IssueMessage = (props) => {
    return props.messages.map((message, index) => {
        return (
            <ListGroup.Item key={index}>
                <ListGroup.Item>
                    <div className="row">
                        <div className="col-1">id:{message.id}</div>
                        <div className="col-11">{message.tekst}</div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                <div className="row">
                        <div className="col-1"></div>
                        <div className="col-11">
                    <Button variant="primary" type='submit'>Reply</Button>
                    <Button variant="primary" type='submit'>Delete</Button>
                    </div></div>
                </ListGroup.Item>
            </ListGroup.Item>

        );
    })

};

export default IssueMessage;