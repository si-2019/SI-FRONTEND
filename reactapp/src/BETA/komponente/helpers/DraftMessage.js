import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'

const DraftMessage = (props) => {
    return props.messages.map((message, index) => {
        return (
            <ListGroup.Item key={index}>
                <ListGroup.Item>
                    {message.tekst}
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button variant="primary" type='submit'>Edit</Button>
                    <Button variant="primary" type='submit'>Send</Button>
                    <Button variant="primary" type='submit'>Delete</Button>
                </ListGroup.Item>
            </ListGroup.Item>

        );
    })

};

export default DraftMessage;