import React from 'react';
import RegisterForm from '../../components/Forms/RegisterForm';
import IndexHeader from '../../components/Headers/IndexHeader';
import PageFooter from '../../components/Footers/PageFooter';

const FormularioCadastro = () => {

    return(
        <>
        <IndexHeader page_title="Cadastro de Alunas" />
        <div id="form-page">
            <RegisterForm/>
        </div>
        <PageFooter isHome={false}/>
        </>
    );
};

export default FormularioCadastro;