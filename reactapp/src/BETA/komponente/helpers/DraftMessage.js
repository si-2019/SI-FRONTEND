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
                    <div className="issue-message">
                        <Button variant="primary" type='submit' className="message-button">Uredi</Button>
                        <Button variant="primary" type='submit' className="message-button">Pošalji</Button>
                    </div>
                </ListGroup.Item>
            </ListGroup.Item>

        );
    })

};

export default DraftMessage;