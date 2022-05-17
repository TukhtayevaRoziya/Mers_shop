import React from 'react'

import { InformationCard } from '../../../utils/helpers'
import picture1 from '../../../assets/home/info1.png'
import picture2 from '../../../assets/home/info2.png'
import picture3 from '../../../assets/home/info3.png'
import picture4 from '../../../assets/home/info4.png'

import style from './Information.module.css'

export const Information = () => {
  return (
    <div className={style.body}>
        <InformationCard img={picture1} title={'Качественный товар'} desc={'Купить качественные товары с низкой ценой'}/>
        <InformationCard img={picture2} title={'Круглосуточный сервис'} desc={'Купить качественные товары с низкой ценой'}/>
        <InformationCard img={picture3} title={'Экспресс-доставка'} desc={'Купить качественные товары с низкой ценой'}/>
        <InformationCard img={picture4} title={'Безопасная оплата'} desc={'Купить качественные товары с низкой ценой'}/>
    </div>
  )
}
