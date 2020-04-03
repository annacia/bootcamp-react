import React from 'react';
import IndexHeader from '../../components/Headers/IndexHeader';
import ActivitiesList from '../../components/Lists/ActivitiesList';

const Home = () => {

    return(
        <>
        <IndexHeader title="React Bootcamp" subtitle="@WoMakersCode" />
        <ActivitiesList/>
        </>
    )
};

export default Home;