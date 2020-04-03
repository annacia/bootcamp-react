import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import './RegisterForm/style.css';

export class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            city: '',
            email: '',
            cpf: '',
            phone: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    checkFormValues = () => {
        let emailArroba = this.state.email.indexOf('@');
        let emailCom =  this.state.email.indexOf('.com');
        
        for (const property in this.state) {
            if (`${this.state[property]}` === '') {
                return false;
            }
        }

        if (emailArroba === -1 || emailCom === -1) {
            return false;
        }

        return true;
    }

    submitValues = event => {
        let status = this.checkFormValues();
        if (!status) {
            event.preventDefault();
            alert("Todos os campos devem ser preenchidos corretamente");
            console.log("Valores:" + JSON.stringify(this.state));
        }
    }

    handleChange(name, value) {
        setTimeout(() => {
            this.setState({
                [name]: value
            });
        }, 50)
    }

    render() {
        return( 
            <form id="register-form" onSubmit={this.submitValues}>
                <FormInput 
                    title="Nome Completo" 
                    name="name" 
                    onInputChange={this.handleChange}/>
                <FormInput 
                    title="Cidade" 
                    name="city" 
                    onInputChange={this.handleChange}/>
                <FormInput 
                    title="Email" 
                    name="email" 
                    placeholder="email@email.com" 
                    onInputChange={this.handleChange}/>
                <FormInput 
                    title="CPF" 
                    name="cpf" 
                    placeholder="000.000.000-00" 
                    mask="999.999.999-99"
                    onInputChange={this.handleChange}/>
                <FormInput 
                    title="Telefone" 
                    name="phone" 
                    placeholder="(xx) xxxxx-xxxx" 
                    mask="(99) 99999-9999"
                    onInputChange={this.handleChange}/>
                <SubmitButton/>
            </form>
        );
    }
}

class FormInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this); //qdo o metodo esta SEM arrow function BIND é necessario
    }

    handleChange(e) {
        this.props.onInputChange(e.target.name, e.target.value);
    }

    render(){
        return(
            <div>
                <span>{this.props.title}</span>
                <InputMask
                    type="text"
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                    onChange={this.handleChange}
                    mask={this.props.mask}
                />
            </div>
        );
    }
}

const SubmitButton = props => {
    return(
        <button>Inscrever</button>
    );
}

export default RegisterForm;