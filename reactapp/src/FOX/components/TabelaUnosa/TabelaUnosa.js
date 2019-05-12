import React, {Component } from 'react';
import Footer from './components/Footer/Footer';

class TabelaUnosa extends Component {


    render() {
        return(
           <Container>
                <Row>

                </Row>
                <Row>
                    <Col md={{span: 6, offset: 4}} > 
                        <label> Index: </label>
                        <input type="text" name="name" />
                        <Button variant="primary">Pretrazi</Button>
                    </Col>
                </Row>
           </Container>

        );

    }


}


export default TabelaUnosa;