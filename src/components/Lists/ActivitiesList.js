import React from "react";
import { Link } from 'react-router-dom';

import './ActivitiesList/style.css'

function ActivitiesList() {
  
    return (
        <div id="activities-list">
            <ul>
                <li>
                    <Link to={`/formulario-cadastro`}>
                        Formulário de Cadastro de Alunas
                    </Link>
                </li>
                <li>
                    <Link to={`/formulario-cep`}>
                        Formulário de CEP
                    </Link>
                </li>
                <li>
                    <Link to={`/consumo-api`}>
                        Consumo de API do estudio Ghibli
                    </Link>
                </li>
                <li>
                    <Link to={`/refatorar-class`}>
                        Refatorar componente de Class
                    </Link>
                </li>
                <li>
                    <Link to={`/todo-list`}>
                        To-do List com Redux
                    </Link>
                </li>
                <li>
                    <Link to={`/react-router`}>
                        React Router
                    </Link>
                </li>
                <li>
                    <Link to={`/consumo-api-auth`}>
                        Consumo de API com autenticação
                    </Link>
                </li>
                <li>
                    <Link to={`/formulario-formik`}>
                        Formulário Formik
                    </Link>
                </li>
                <li>
                    <a href="https://github.com/React-Bootcamp-WoMarkersCode/cv-speed-hiring">
                        Projeto Final
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default ActivitiesList;