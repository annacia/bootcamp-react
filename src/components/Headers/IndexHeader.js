import React from "react";
import logo from './IndexHeader/img/logo.png';

import './IndexHeader/style.css'

const IndexHeader = (props) => {
    const { title, subtitle } = props;
  
    return (
        <div id="index-header">
            <h1>{title}</h1>
            <img src={logo} alt={subtitle}/>
            <h2>{subtitle}</h2>
        </div>
    );
}

export default IndexHeader;