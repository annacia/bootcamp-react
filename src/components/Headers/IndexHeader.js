import React from "react";
import logo from './IndexHeader/img/logo.png';

import './IndexHeader/style.css'

const IndexHeader = (props) => {
    const { page_title } = props;
  
    return (
        <div id="index-header">
            <h1>React Bootcamp</h1>
            <img src={logo} alt="@WoMakersCode"/>
            <h2>@WoMakersCode</h2>
            <h3>{page_title}</h3>
        </div>
    );
}

export default IndexHeader;