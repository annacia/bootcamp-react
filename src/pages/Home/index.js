import React from 'react';
import IndexHeader from '../../components/Headers/IndexHeader';
import ActivitiesList from '../../components/Lists/ActivitiesList';

const Home = () => {

    return(
        <>
        <IndexHeader page_title="Lista de Atividades"/>
        <ActivitiesList/>
        </>
    )
};

export default Home;