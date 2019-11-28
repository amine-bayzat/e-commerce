import React from 'react';
import './sign-up.style.scss';

import { auth, createUserProfile } from '../../firebase/firebase.config';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-buttom/custom-button.component';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfile(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(error) {
            console.log(error)
        }
        
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name] : value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h1 className="title">I don't have an account</h1>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} label="Display Name" onChange={this.handleChange} />
                    <FormInput type="email" name="email" value={email} label="Email" onChange={this.handleChange} />
                    <FormInput type="password" name="password" value={password} label="Password" onChange={this.handleChange} />
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} label="Confirm Password" onChange={this.handleChange} />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;