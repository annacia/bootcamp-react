import React from 'react';
import FormikForm from '../../components/Forms/FormikForm';
import IndexHeader from '../../components/Headers/IndexHeader';
import PageFooter from '../../components/Footers/PageFooter';

const FormularioFormik = () => {

    return(
        <>
        <IndexHeader page_title="Formulário Formik" />
        <div className="App">
            <FormikForm />
        </div>
        <PageFooter isHome={false}/>
        </>
    )
};

export default FormularioFormik;