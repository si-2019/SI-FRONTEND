import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'

const IssueMessage = (props) => {
    return props.messages.map((message, index) => {
        return (
            <ListGroup.Item key={index}>
                <ListGroup.Item>
                    {message.tekst}
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button variant="primary" type='submit'>Odgovori</Button>
                    <Button variant="primary" type='submit'>Obriši</Button>
                </ListGroup.Item>
            </ListGroup.Item>

        );
    })

};

export default IssueMessage;