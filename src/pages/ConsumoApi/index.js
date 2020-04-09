import React from 'react';
import GhibliHeader from '../../components/Headers/GhibliHeader';
import MovieCardList from '../../components/Lists/MovieCardList';
import IndexHeader from '../../components/Headers/IndexHeader';
import PageFooter from '../../components/Footers/PageFooter';

const ConsumoApi = () => {
        return(
            <>
            <IndexHeader page_title="Consumo de API" />
            <GhibliHeader 
                subtitle="Studio Ghibli" 
                link="https://ghibliapi.herokuapp.com/"
            />
            <MovieCardList/>
            <PageFooter isHome={false}/>
            </>
        )
};

export default ConsumoApi;