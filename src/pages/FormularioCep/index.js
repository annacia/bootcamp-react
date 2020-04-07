import React from 'react';
import CepForm from '../../components/Forms/CepForm';
import IndexHeader from '../../components/Headers/IndexHeader'

const FormularioCep = () => {

    return(
        <div className="App">
            <IndexHeader page_title="Formulário de CEP" />
            <CepForm />
        </div>
    )
};

export default FormularioCep;