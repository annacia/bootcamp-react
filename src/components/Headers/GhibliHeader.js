import React from "react";
import logo from './GhibliHeader/img/logo.png';
import './GhibliHeader/style.css';

const GhibliHeader = (props) => {
    const { title, subtitle, link } = props;
  
    return (
        <div id="ghibli-header">
            <h3>{title}</h3>
            <h4>
                <a href={link}>
                    {subtitle}
                </a>
            </h4>
            <img src={logo} alt={subtitle}/>
        </div>
    );
}

export default GhibliHeader;