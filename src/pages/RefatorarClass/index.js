import React from 'react';
import IndexHeader from '../../components/Headers/IndexHeader';
import ExampleComponent from '../../components/me-transforme-em-funcao'

import './style.css'

const RefatorarClass = () => {

    return(
        <>
        <IndexHeader page_title="Componente de classe refatorado para função" />
        <a className="codigo-btn" href="https://github.com/annacia/bootcamp-react/blob/master/src/components/me-transforme-em-funcao.js">Código</a>
        <div id="componente-refatorado">
            <ExampleComponent/>
        </div>
        </>
    )
};

export default RefatorarClass;