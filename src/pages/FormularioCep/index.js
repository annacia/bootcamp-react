import React from 'react';
import CepForm from '../../components/Forms/CepForm';
import './style.css';

const FormularioCep = () => {

    return(
        <div className="App">
            <h3>Formulário de CEP</h3>
            <CepForm />
        </div>
    )
};

export default FormularioCep;