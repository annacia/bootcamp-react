import React from 'react';
import IndexHeader from '../../components/Headers/IndexHeader';
import ActivitiesList from '../../components/Lists/ActivitiesList';
import PageFooter from '../../components/Footers/PageFooter';

const Home = () => {

    return(
        <>
        <IndexHeader page_title="Lista de Atividades"/>
        <ActivitiesList/>
        <PageFooter isHome={true}/>
        </>
    )
};

export default Home;