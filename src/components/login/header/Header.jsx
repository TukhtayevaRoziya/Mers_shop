import React from 'react'

import logo from '../../../assets/home/logo.png'
import style from './Header.module.css'

export const Header = () => {
  return (
    <div className={style.body}><img src={logo} alt="" /></div>
  )
}
