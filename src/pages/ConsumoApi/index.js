import React from 'react';
import GhibliHeader from '../../components/Headers/GhibliHeader';
import MovieCardList from '../../components/Lists/MovieCardList';
import IndexHeader from '../../components/Headers/IndexHeader'

const ConsumoApi = () => {
        return(
            <>
            <IndexHeader title="React Bootcamp" subtitle="@WoMakersCode" />
            <GhibliHeader 
                title="Consumo de API" 
                subtitle="Studio Ghibli" 
                link="https://ghibliapi.herokuapp.com/"
            />
            <MovieCardList/>
            </>
        )
};

export default ConsumoApi;