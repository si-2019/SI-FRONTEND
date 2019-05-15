import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

class Fotografija extends Component {
    state = {
        StudentID: 1,
        fotografija: null
    }
    componentDidMount() {
        axios
            .get(
                `http://localhost:31918/studenti/` +
                this.state.StudentID
            )
            .then(res => {
                const fotka = res.data.map(obj => obj.fotografija);
                console.log(res.data);
                this.setState({ fotografija: fotka });
            });
    }
    
    render() {
        return (
            <div style={{ display: "inline-block" }}>
                <img style={{ height: "200px", width: "100%", display: "block" }} src={this.state.fotografija} />
            </div>
                );
            }
        }
        
        export default Fotografija;
