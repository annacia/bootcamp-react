import React, { useState, useEffect } from 'react';
import { useFormik } from "formik";
import axios from 'axios';

import './FindGifForm/style.css'

const initialValues = {
    text: ""
};

const FindGifForm = () => {
    const formik = useFormik({
        initialValues
    });

    const [ text, setText ] = useState("")
    const [ gif, setGif ] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    const getGifUrl = (response) => {
        if (response.status !== 200) {
            return "";
        }
        
        let data = response.data.data
        if (data.length > 0) {
            return data[0].images.downsized_large.url;
        }

        return "";
    }

    useEffect(() => {
        let keyApi = process.env.REACT_APP_GIPHY_API_KEY

        text && (isSubmitted === true) ? 
            axios.get("http://api.giphy.com/v1/gifs/search?q="+text+"&api_key="+keyApi+"&limit=1")
            .then(res => {
                setGif(getGifUrl(res))      
            })
        : setGif("")

    }, [gif, text, isSubmitted])

    const NotFound = () => {
        if (!isSubmitted) {
            return (<span></span>)
        }

        if (gif === "" && isSubmitted) {
            return(
                <span>Não foi encontrado nenhum gif</span>
            )
        }

        return (
            <img src={gif} alt={formik.values.text}></img>
        )
    }

    return (
        <div id="form-gif">
            <form id="form-content" 
            onSubmit={e => {
                e.preventDefault()
                setIsSubmitted(true);
                setText(formik.values.text)
            }}> 
                <input placeholder="Text" {...formik.getFieldProps("text")} />
                <button type="submit">Buscar Gif</button>
            </form>
            <NotFound/>
        </div>
    )
}
  
export default FindGifForm;
  