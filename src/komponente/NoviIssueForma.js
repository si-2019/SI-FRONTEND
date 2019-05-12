import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

class NoviIssueForma extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            issueText: ''
        }
    }

    zatvoriNoviIssue = () => {
        document.getElementById('overlay').style.display = "none";
    };


    onChangeIssueText = (object) => {
        this.setState({issueText: object.target.value})
    };


                    <button
                        onClick={() =>
                            window.confirm('Prekinuti pisanje issuea?') && zatvoriNoviIssue()
                        }
                        type="button"
                        className="btn btn-danger float-right"
                        style={{marginLeft:'85px', width:'50px'}}
                        id="zatvoriNoviIssue"
                    >
                        X
                    </button>
                </div>


    render() {
        let warning;
        if (this.state.issueText === '') {
            warning = (
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 7 }}>
                            <label style={{color: '#C40D0D'}}>
                                Ispunite polje za opis issue-a
                            </label>
                        </Col>
                    </Row>
                </Container>
            );
        }
        return (
            <div>
                <form>

                    <div className="row" style={{marginTop: '10px'}}>
                        <label className="col-1" style={{marginLeft: '12px', marginTop: '6px'}}>Naslov</label>
                        <select className="form-control col-9" id="naslovSelect">
                            <option>Problem 1</option>
                            <option>Problem 2</option>
                            <option>Problem 3</option>
                            <option>Problem 4</option>
                            <option>Problem 5</option>
                        </select>

                        <button
                        onClick={() =>
                            window.confirm('Prekinuti pisanje issuea?') && zatvoriNoviIssue()
                        }
                        type="button"
                        className="btn btn-danger float-right"
                        style={{marginLeft:'85px', width:'50px'}}
                        id="zatvoriNoviIssue"
                    >
                        X
                    </button>
                    </div>

                    <div className="form-group row col-12" style={{marginTop: '5px', marginLeft: '2px'}}>
                        <textarea
                            className="form-control"
                            id="exampleTextarea"
                            rows="10"
                            value={this.state.issueText}
                            onChange={this.onChangeIssueText}
                        />
                    </div>

                    <div className="form-group row col-12">

                        <div className="custom-file col-8">

                            <input type="file" class="form-control-file" id="exampleInputFile"
                                   aria-describedby="fileHelp"/>

                        </div>

                        <button type="submit" class="btn btn-outline-primary col-2">Save as draft</button>
                        <button
                            type="submit"
                            class="btn btn-outline-primary col-2"
                            disabled={!this.state.issueText}
                        >
                            Send
                        </button>
                        {warning}
                    </div>
                </form>
            </div>
        );
    }
}

export default NoviIssueForma;