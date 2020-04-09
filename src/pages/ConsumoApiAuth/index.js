import React from 'react';
import IndexHeader from '../../components/Headers/IndexHeader';
import FindGifForm from '../../components/Forms/FindGifForm';
import PageFooter from '../../components/Footers/PageFooter';

const ConsumoApiAuth = () => {

    return(
        <>
        <IndexHeader page_title="Consumo de API com autenticação" />
        <FindGifForm />
        <PageFooter isHome={false}/>
        </>
    )
};

export default ConsumoApiAuth;