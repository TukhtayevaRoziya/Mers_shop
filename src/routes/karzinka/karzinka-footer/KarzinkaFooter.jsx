import React from 'react';
import classes from './KarzinkaFooter.module.css';
import clearPay from '../../../assets/karzinka/clearpay.png';
import dmca from '../../../assets/karzinka/dmca-1.png';
import masterCard from '../../../assets/karzinka/MasterCard.png';
import norton from '../../../assets/karzinka/norton-1.png';
import paypal from '../../../assets/karzinka/PayPal.png';
import visa from '../../../assets/karzinka/visa.png';

const KarzinkaFooter = () => {
    const footerDummmyData = [clearPay, dmca, masterCard, norton, paypal, visa]; 
    return (
        <div className={classes.karzinka__footer}>
            <div className={classes.payment__options}>
                {
                    footerDummmyData.map((paymentOption, index) => 
                        <img key={index} className={classes.payment__option} src={paymentOption} alt="" />
                    )
                }
            </div>
            <p>Copyright ©2021 Hercules.com Все права защищены.</p>
        </div>
    )
}

export default KarzinkaFooter
