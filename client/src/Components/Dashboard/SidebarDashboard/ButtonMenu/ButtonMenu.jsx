import React from 'react';
import { Link } from 'react-router-dom';

import style from './ButtonMenu.module.css';

export default function ButtonMenu ({ className, img, link, value}){
    return (
        <Link className={ `${className} ${style.button}` } to={ link }>
            <img src={ img } alt="svg" className={ style.img}/>
            <span>{ value }</span>
        </Link>
    )
}