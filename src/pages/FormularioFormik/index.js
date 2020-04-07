import React from 'react';
import FormikForm from '../../components/Forms/FormikForm';
import IndexHeader from '../../components/Headers/IndexHeader'

const FormularioFormik = () => {

    return(
        <>
        <IndexHeader page_title="Formulário Formik" />
        <div className="App">
            <FormikForm />
        </div>
        </>
    )
};

export default FormularioFormik;