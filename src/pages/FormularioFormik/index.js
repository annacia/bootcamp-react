import React from 'react';
import FormikForm from '../../components/Forms/FormikForm';
import IndexHeader from '../../components/Headers/IndexHeader'

import './style.css'

const FormularioFormik = () => {

    return(
        <>
        <IndexHeader title="React Bootcamp" subtitle="@WoMakersCode" />
        <div className="App">
            <h3>Formulário Formik</h3>
            <FormikForm />
        </div>
        </>
    )
};

export default FormularioFormik;