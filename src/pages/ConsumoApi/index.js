import React from 'react';
import GhibliHeader from '../../components/Headers/GhibliHeader';
import MovieCardList from '../../components/Lists/MovieCardList';

const ConsumoApi = () => {
        return(
            <>
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