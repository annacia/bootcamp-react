import React from 'react';
import RegisterForm from '../../components/Forms/RegisterForm';
import IndexHeader from '../../components/Headers/IndexHeader'

const FormularioCadastro = () => {

    return(
        <>
        <IndexHeader page_title="Cadastro de Alunas" />
        <div id="form-page">
            <RegisterForm/>
        </div>
        </>
    );
};

export default FormularioCadastro;