import React from 'react';
import IndexHeader from '../../components/Headers/IndexHeader';
import ExampleComponent from '../../components/me-transforme-em-funcao'

import './style.css'

const RefatorarClass = () => {

    return(
        <>
        <IndexHeader title="React Bootcamp" subtitle="@WoMakersCode" />
        <h3>Componente de classe refatorado para função</h3>
        <a className="codigo-btn" href="#">Código</a>
        <div id="componente-refatorado">
            <ExampleComponent/>
        </div>
        </>
    )
};

export default RefatorarClass;