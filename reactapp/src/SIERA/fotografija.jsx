import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

class Fotografija extends Component {
    state = {
        StudentID: 1
    }
    
    
    render() {
        return (
            <div style={{ display: "inline-block" }}>
                <img style={{ height: "200px", width: "100%", display: "block" }} src={this.props.fotografija} />
            </div>
                );
            }
        }
        
        export default Fotografija;
