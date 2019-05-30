import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import ListGroup from 'react-bootstrap/ListGroup';
import Link from 'react-router-dom/Link';

const UnosPrisustvaSedmice = (props) => {
    const sedmice = [
        "Sedmica 1",
        "Sedmica 2",
        "Sedmica 3",
        "Sedmica 4",
        "Sedmica 5",
        "Sedmica 6",
        "Sedmica 7",
        "Sedmica 8",
        "Sedmica 9",
        "Sedmica 10",
        "Sedmica 11",
        "Sedmica 12",
        "Sedmica 13",
        "Sedmica 14",
    ];

    return (
        <div>
            <CardDeck>
                <Card style={{ border: '0.5px solid gray' }} className="text-center">
                    {
                        sedmice.slice(0, 7).map((s, index) => {
                            return (
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Link to="UnosPrisustva" onClick={() => props.handleClickSedmica(index + 1)}> {s} </Link>
                                    </ListGroup.Item>
                                </ListGroup>
                            );
                        })
                    }
                </Card>
                <Card style={{ border: '0.5px solid gray' }} className="text-center">
                    {
                        sedmice.slice(7, 14).map((s, index) => {
                            return (
                                <ListGroup variant="flush">
                                    <ListGroup.Item >
                                        <Link to="UnosPrisustva" onClick={() => props.handleClickSedmica(index + 1)}> {s} </Link>
                                    </ListGroup.Item>
                                </ListGroup>
                            );
                        })
                    }
                </Card>
            </CardDeck>
        </div>
    );
}

export default UnosPrisustvaSedmice;