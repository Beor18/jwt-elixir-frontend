import React, { Component } from 'react';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            password_confirmation: '',
            errors: {}
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.email]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        }
        console.log(user);
    }

    render() {
        return(
            <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Registrarse</h2>
            <form onSubmit={ this.handleSubmit }>
               
                <div className="form-group">
                    <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email }
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    name="password_confirm"
                    onChange={ this.handleInputChange }
                    value={ this.state.password_confirmation }
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Registrar Usuario
                    </button>
                </div>
            </form>
        </div>
        )
    }
}

export default Register;