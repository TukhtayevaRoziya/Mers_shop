import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from '../../../components/UI/button/Button';
import classes from './AccountPersonal.module.css';
import { personalInfo } from '../../../redux/actions/personalInfoActions';
import { connect } from 'react-redux';
const TEST_NAME_REGX = /^[A-Z][-a-zA-Z]+$/;
const TEST_NAMEKR_REGX = /^[А-Я][-а-яА-Я]+$/;
const TEST_PLACES_REGX = /[a-zA-Z]+/;
const TEST_PHONENUMBER_REGX = /^\+?[1-9][0-9]{11,11}$/;; //with international format 13 symbol
const TEST_EMAIL_REGX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const AccountPersonal = (props) => {
    const btnCss = {
        marginLeft: "180px"
    }

    const [fName, setFname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const [isValidFname, setIsValidFname] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPhone, setIsValidPhone] = useState(false);
    const [isValidAddress, setIsValidAddress] = useState(false);

    useEffect(() => {
        const testFnameREGX = TEST_NAME_REGX.test(fName);
        const testKrFnameREGX = TEST_NAMEKR_REGX.test(fName);
        setIsValidFname(testFnameREGX || testKrFnameREGX);
    }, [fName])

    useEffect(() => {
        const testEmailREGX = TEST_EMAIL_REGX.test(email);
        setIsValidEmail(testEmailREGX);
    }, [email])

    useEffect(() => {
        const testPhoneREGX = TEST_PHONENUMBER_REGX.test(phone);
        setIsValidPhone(testPhoneREGX);
    }, [phone])

    useEffect(() => {
        const testAddressREGX = TEST_PLACES_REGX.test(address);
        setIsValidAddress(testAddressREGX);
    }, [address])


    const handleUserPersonalInfo = (e) => {
        e.preventDefault();
        // if XSS occures
        const dblFnameCheck = isValidFname;
        const dblEmailCheck = isValidEmail;
        const dblPhoneCheck = isValidPhone;
        const dblAddressCheck = isValidAddress;
        if(dblEmailCheck &&  dblFnameCheck && dblPhoneCheck && dblAddressCheck){
            props.personalInfo({fname: fName, email: email, phone: phone, address: address})
        }
    }

    console.log(isValidAddress, address);
    return (
        <div className={classes.account__personal}>
            <div className={classes.personal__header}>
                <h1>Личная информация</h1>
            </div>
            <div className={classes.personal__container}>
                <h2>Базовая информация</h2>
                <form className={classes.input__container} onSubmit={handleUserPersonalInfo}>
                    <div className={classes.input__wrapper}>
                        <label htmlFor="personal__name"><span>*</span> Ваше имя :</label>
                        <input value={fName} onChange={e => setFname(e.target.value)} id="personal__name" type="text" placeholder="Имя" />
                    </div>
                    {
                        !isValidFname && fName.length > 0 ? <p>Name is invalid!</p> : <></>
                    }
                    <div className={classes.input__wrapper}>
                        <label htmlFor="personal__email"> <span>*</span> Электронная почта:</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} id="personal__email" type="text" placeholder="Email" />
                    </div>
                    {
                        !isValidEmail && email.length > 0 ? <p>Email is invalid!</p> : <></>
                    }
                    <div className={classes.input__wrapper}>
                        <label htmlFor="personal__number"> <span>*</span> Телефон:</label>
                        <input value={phone} onChange={e => setPhone(e.target.value)} id="personal__number" type="text" placeholder="Phone number" />
                    </div>
                    {
                        !isValidPhone && phone.length > 0 ? <p>Email is invalid!</p> : <></>
                    }
                     
                     <div className={classes.input__wrapper}>
                        <label htmlFor="personal__address"> <span>*</span> Адрес:</label>
                        <input value={address} onChange={e => setAddress(e.target.value)} id="personal__address" type="text" placeholder="Address" />
                    </div>
                    {
                        !isValidAddress && address.length > 0 ? <p>Address is invalid!</p> : <></>
                    }
                    <Button btnCss={btnCss} type="submit" maxwidth="141px" title="Сохранить"/>
                </form>
            </div>
        </div>
    )
}

export default connect(null, { personalInfo }) (AccountPersonal)