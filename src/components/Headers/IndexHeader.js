import React from "react";

const IndexHeader = (props) => {
    const { title, subtitle } = props;
  
    return (
        <div id="index-header">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    );
}

export default IndexHeader;