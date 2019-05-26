import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'


class FormaNewFAQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            naziv: '',
            tekst: '',
            id: 4
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        //Pokupiti naziv unesene kategorije i upisati je u bazu
        e.preventDefault();
        const { naziv, tekst } = this.state;
        axios.post('http://localhost:31902/frequentIssue/add', null, { params: { naziv, tekst } })
            .then((result) => {

                alert(result.data);
                this.props.triggerOnCloseModal2('false')
            });
    }

    onButtonCloseClicked = () => {
        this.props.triggerOnCloseModal2('false')
    }

    render() {

        return (

            <div id="noviIssue">
                <button
                    onClick={this.onButtonCloseClicked}
                    type="button" 
                    className="btn btn-danger float-right"
                    id="buttonZatvori"  
                    >X </button>


                <form>
                    <fieldset>



                        <div id="formica">
                            <label>Issue:   </label>
                            <input
                                name="naziv"
                                value={this.state.naziv}
                                onChange={this.handleChange}
                                className="form-control"
                                placeholder="Naslov issue-a">
                            </input>

                            <label >Odgovor: </label>
                            <textarea
                                className="form-control"
                                name="tekst"
                                value={this.state.tekst}
                                onChange={this.handleChange}
                                rows="5"
                                placeholder="Odgovor na issue"></textarea>

                        </div>




                        <button
                            className="btn btn-primary float-right"
                            onClick={this.onSubmit}
                            disabled={!this.state.tekst || !this.state.naziv}
                        >Objavi novi issue</button>

                    </fieldset>
                </form>


            </div>
        );
    }

}
export default FormaNewFAQ