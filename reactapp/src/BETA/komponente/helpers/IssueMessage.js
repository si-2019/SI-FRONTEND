import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

const IssueMessage = (props) => {
    
    return props.messages.map((message, index) => {

        var date = new Date(message.datum);
        
        
        return (
            <ListGroup.Item key={index}>
                <ListGroup.Item >
                    <div className="row" id = "BETA_divIDVrijeme">
                        
                        <div className="col-1">id:{message.id}</div>
                        <div className="col-11">Datum i vrijeme: {date.toLocaleString()}</div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="row">
                        <div className="col-11">{message.tekst}</div>
                    </div>
                </ListGroup.Item>
                
            </ListGroup.Item>

        );
    })

};

export default IssueMessage;