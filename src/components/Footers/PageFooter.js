import React from "react";
import { Link } from 'react-router-dom';

import './PageFooter/style.css'

const PageFooter = (props) => {
    const { isHome } = props;

    const BtnVoltar = () => {
        return (<Link to={`/`}>Voltar</Link>)
    }

    return (
        <div id="page-footer">
            <p>Atividades de React by <span>@annacia</span></p>
            {!isHome ? BtnVoltar() : ""}
        </div>
    );
}

export default PageFooter;