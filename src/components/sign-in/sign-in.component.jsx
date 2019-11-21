import React, { Component } from 'react';
import './sign-in.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-buttom/custom-button.component'

class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        } 
    }

    handleSumbit = event => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }

    handleInput = e => {
        const {value, name} = e.target;

        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSumbit}>
                    <FormInput type="email" label="Email" name="email" value={this.state.email} handlechange={this.handleInput} required/>
                    <FormInput type="password" label="Password" name="password" value={this.state.password} handlechange={this.handleInput} required/>

                    <CustomButton type="sumbit" >Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;