import React, {Component} from 'react';
import '../styles/Signup.css'
import Axios from 'axios';
class  Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            banedUser: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({username: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.username.length===0){}
        else{
            Axios.get('http://localhost:31910/blockedUser/'+ this.state.username).then(res=>{
                if(res.data === null){
                    this.props.onSubmit(this.state.username);
                
                }else{
                /*if(this.state.username === res.data.blockedUserId)*/
                    this.setState({
                        username: "",
                        banedUser : true
                    })

                }
            });
        }
    }
    render() {
        return(
            <div style={signupStyle} className="juliet-form-container">
                <h1>Let's Talk</h1>
                <form onSubmit={this.handleSubmit} className="form juliet-form">
                    <label htmlFor="email" style={{color: '#2C3E50'}}>What is your email?</label>
                    <input type="email" name="username" onChange={this.handleChange} className="juliet-input" /*value={this.state.username}*/ />
                    {this.state.banedUser?<p style={{color: "#000" , padding: '10px 0'}}>This user is banned</p> : null}
                    <button className="juliet-submit juliet-signup-button">Submit</button>
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