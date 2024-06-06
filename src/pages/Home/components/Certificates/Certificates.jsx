import React from 'react';
import s from "./Certificates.module.scss";
import {certificatesImagesData} from "./data.js";

function Certificates(props) {
    const certificatesImages = certificatesImagesData

    return (
        <div className={s.certificates}>
            {
                certificatesImages.length && certificatesImages.map(image => (
                    <img className={s.certificates__item} src={"/src/assets/" + image} alt=""/>

                ))
            }
        </div>
    );
}

export default Certificates;