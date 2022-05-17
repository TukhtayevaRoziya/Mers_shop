import React from 'react';
import classes from './KarzinkaPaymentPanel.module.css';
import masterCard from '../../../assets/karzinka/MasterCard.png';
import visa from '../../../assets/karzinka/visa.png';
import Button from '../../../components/UI/button/Button';

const KarzinkaPaymentPanel = () => {
    const cancelBtn = {
        background: "transparent",
        marginRight: "39px",
        color: "#152A59",
        marginLeft: "200px"
    }
    return (
        <div className={classes.karzinka__paymentpanel}>
            <div className={classes.panel__container}>
                <div className={classes.container__title}>
                    <h1>Реквизиты платежа</h1>
                    <p>*Обязательное поле</p>
                </div>
                <form className={classes.panel__form}>
                    <div className={classes.payment__type}>
                        <label htmlFor="card" className={classes.input__flag}>Тип карты *</label>
                        <input defaultChecked={true} className={classes.card__visa} name="card" type="radio" />
                        <img src={visa} alt="" />
                        <input  className={classes.card__master}  name="card" type="radio" />
                        <img src={masterCard} alt="" />
                    </div>
                    <div className={classes.card__number}>
                        <label className={classes.input__flag} htmlFor="card_number">Тип карты *</label>
                        <input type="number" autoFocus={true}  />
                    </div>
                    <div className={classes.card__expirations}>
                        <label className={classes.input__flag} htmlFor="card_number">Месяц окончания *</label>
                        <input type="number"  className={classes.card__month}/>
                        <label className={classes.input__flag} htmlFor="card_number">Год окончания *</label>
                        <input type="number" className={classes.card__year} />
                    </div>
                    <div className={classes.card__cvv}>
                        <label className={classes.input__flag} htmlFor="card_number">CVN (код проверки <br></br> подлинности карты) *</label>
                        <div>
                            <p>Этот код напечатан на оборотной стороне карты и состоит из трех или четырех цифр.</p>
                            <input type="number" />
                        </div>
                    </div>
                    <div className={classes.payment__submit}>
                        <Button btnCss={cancelBtn} type="reset" maxwidth="141px" title="Отменить"/>
                        <Button type="submit" maxwidth="141px" title="Сохранить"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default KarzinkaPaymentPanel
