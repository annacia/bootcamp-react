import React from 'react';
import CepForm from '../../components/Forms/CepForm';
import IndexHeader from '../../components/Headers/IndexHeader';
import PageFooter from '../../components/Footers/PageFooter';

const FormularioCep = () => {

    return(
        <div className="App">
            <IndexHeader page_title="Formulário de CEP" />
            <CepForm />
            <PageFooter isHome={false}/>
        </div>
    )
};

export default FormularioCep;