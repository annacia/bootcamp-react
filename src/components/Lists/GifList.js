import React, { useState, useEffect } from 'react';
import { useFormik } from "formik";
import axios from 'axios';

const GifList = (props) => {
    const [ gif, setGif ] = useState("")

    useEffect(() => {
        props.text ? 
            axios.get("http://api.giphy.com/v1/gifs/search?q=pikachu&api_key=&limit=1")
            .then(res => {
                console.log(res)
                setGif(res)
            })
        : setGif("")

    }, [gif, props.text])

    return (
        <img src={gif} alt={props.text}></img>
    )
}

export default GifList;