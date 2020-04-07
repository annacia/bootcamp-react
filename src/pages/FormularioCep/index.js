import React from 'react';
import CepForm from '../../components/Forms/CepForm';
import IndexHeader from '../../components/Headers/IndexHeader'
import './style.css';

const FormularioCep = () => {

    return(
        <div className="App">
            <IndexHeader title="React Bootcamp" subtitle="@WoMakersCode" />
            <h3>Formulário de CEP</h3>
            <CepForm />
        </div>
    )
};

export default FormularioCep;