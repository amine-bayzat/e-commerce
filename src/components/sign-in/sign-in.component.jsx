import React, { Component } from 'react';
import './sign-in.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-buttom/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.config'

class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        } 
    }

    handleSumbit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email: '',
                password: ''
            })
        } catch(error) {
            console.log(error)
        }
    }

    handleInput = e => {
        const {value, name} = e.target;

        this.setState({
            [name] : value
        })
    }

    render() {
        const {email, password} = this.state;
        return (
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSumbit}>
                    <FormInput type="email" label="Email" name="email" value={email} handlechange={this.handleInput} required/>
                    <FormInput type="password" label="Password" name="password" value={password} handlechange={this.handleInput} required/>

                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;