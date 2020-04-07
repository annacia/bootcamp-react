import React from 'react';
import RegisterForm from '../../components/Forms/RegisterForm';
import IndexHeader from '../../components/Headers/IndexHeader'

const FormularioCadastro = () => {

    return(
        <>
        <IndexHeader title="React Bootcamp" subtitle="@WoMakersCode" />
        <div id="form-page">
            <h3>Cadastro de Alunas</h3>
            <RegisterForm/>
        </div>
        </>
    );
};

export default FormularioCadastro;