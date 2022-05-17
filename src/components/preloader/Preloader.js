import React from 'react'

import Loader from '../../assets/preloader/loader.gif'

import style from './Preloader.module.css'

export const Preloader = () => {
    return <div className={style.body}>
        <img src={Loader} alt="Loader"/>
    </div>
}
