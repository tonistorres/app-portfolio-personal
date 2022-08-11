import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import imgLuaDark from '../../assets/img/loading.gif';
import './Loading.css';

function Loading() {

    const [removeLoading, setRemoveLoading] = useState(false);


    // Maneira correta de fazer um useEfect ComponentDidMount Utilizando o Hook
    // useEfect - callback + lista vazia []
    useEffect(() => {
        const handleStateRedirect = async () => {
            try {
                setTimeout(() => {
                    return setRemoveLoading(true);
                }, 5000);

            } catch (error) {
                console.log("Erro useEffect handleStateRedirect: ", error);
            }
        }
        handleStateRedirect();
    }, []);

   if(removeLoading) return <Redirect to="/home" />;

    return (
        
            <div className="lodad-main">
                <div><img src={imgLuaDark} alt="full Stack" /></div>
            </div>
        
    );
}

export default Loading;