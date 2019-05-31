import React, {Component} from 'react';
import '../styles/Signup.css'

class  Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({username: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.username);
    }
    render() {
        return(
            <div style={signupStyle} className="juliet-form-container">
                <h1>Let's Talk</h1>
                <form onSubmit={this.handleSubmit} className="form juliet-form">
                    <label htmlFor="email">What is your email?</label>
                    <input type="email" name="username" onChange={this.handleChange} className="juliet-input" />
                    <button className="juliet-submit">Submit</button>
                </form>
            </div>
        )
    }
}

const signupStyle = {
    width: '50%',
    margin: 'auto',
    marginTop: '10rem'
}

export default Signup;