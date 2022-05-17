import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import Button from '../../../components/UI/button/Button';
import classes from './KarzinkaForm.module.css';
import { orderProducts } from '../../../redux/actions/orderActions';
const TEST_PHONENUMBER_REGX = /^\+?[1-9][0-9]{11,11}$/;
const TEST_PLACESS_REGX = /[a-zA-Z]+/;
const TEST_NAME_REGX = /^[A-Z][-a-zA-Z]+$/;
const TEST_ZIP_REGX = /^[0-9]{4,6}$/

const KarzinkaForm = (props) => {
    const {cart} = useSelector(state => state.cart);
    const {user} = useSelector(state => state.authReducer);
    // input values
    const [fName, setFname] = useState('');
    const [lName, setLName] = useState('');
    const [country, setCountry] = useState('');
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddess2] = useState('');
    const [zip, setZip] = useState('');
    const [phone, setPhone] = useState('');
    const [defaultShipping, setDefaultShipping] = useState(false);
    // validation status
    const [isValidPhone, setIsValidPhone] = useState(false);
    const [isValidFname, setIsValidFname] = useState(false);
    const [isValidLname, setIsValidLname] = useState(false);
    const [isValidCountry, setIsValidCountry] = useState(false);
    const [isValidProvince, setIsValidProvince] = useState(false);
    const [isValidCity, setIsValidCity] = useState(false);
    const [isValidZip, setIsValidZip] = useState(false);
    const [isValidAddress, setIsValidAddress] = useState(false);
    const [validationError, setValidationError] = useState('');
    

    useEffect(() => {
        let testPhoneREGX = TEST_PHONENUMBER_REGX.test(phone);
        setIsValidPhone(testPhoneREGX)
    }, [phone])

    useEffect(() => {
        let testFNameREGX = TEST_NAME_REGX.test(fName);
        setIsValidFname(testFNameREGX)
    }, [fName])

    useEffect(() => {
        let testLNameREGX = TEST_NAME_REGX.test(lName);
    
        setIsValidLname(testLNameREGX)
    }, [lName])

    useEffect(() => {
        let testCountryREGX = TEST_PLACESS_REGX.test(country);
        setIsValidCountry(testCountryREGX)
    }, [country])

    useEffect(() => {
        let testProvinceREGX = TEST_PLACESS_REGX.test(province);
        setIsValidProvince(testProvinceREGX)
    }, [province])

    useEffect(() => {
        let testCityREGX = TEST_PLACESS_REGX.test(city);
        setIsValidCity(testCityREGX)
    }, [city])

    useEffect(() => {
        let testZipREGX = TEST_ZIP_REGX.test(zip);
        setIsValidZip(testZipREGX)
    }, [zip])

    useEffect(() => {
        let testAddressREGX = TEST_PLACESS_REGX.test(address);
        setIsValidAddress(testAddressREGX)
    }, [address])

    const handleKarzinkaSubmissionForm = (e) => {
        e.preventDefault();
        if(isValidPhone && isValidFname &&  isValidLname && isValidCountry && isValidProvince &&  isValidCity &&  isValidAddress){
            props.orderProducts(cart[0]?.product, cart[0]?.quantity, user, {
                fname: fName,
                lname: lName,
                address: address,
                phone: phone,
                email: user.email,
                basketMain: []
            });
        }
        else{
            console.log(isValidPhone , isValidFname ,  isValidLname , isValidCountry , isValidProvince ,  isValidCity ,  isValidAddress)
            setValidationError("Please provide all information correctly!")
        }
    }
    return (
        <form className={classes.karzinka__form} onSubmit={handleKarzinkaSubmissionForm}>
            <ul className={classes.form__collection}>
                <li>
                    <label htmlFor="name"> <span>*</span> Ваше имя :</label>
                    <input required className={classes.form__name} value={fName} onChange={e => setFname(e.target.value)} id="name" type="text" placeholder="Имя" />
                    <input required className={classes.form__surname} value={lName} onChange={e => setLName(e.target.value)}  id="surname" type="text" placeholder=" Фамилия"/>
                    
                </li>
                    {
                        !isValidFname && fName.length > 0 ? <p className={classes.validation__ins}>Enter valid name</p> : <></>
                    }
                    {
                        !isValidLname && lName.length > 0 ? <p className={classes.validation__ins}>Enter valid surname</p> : <></>
                    }
                <li>
                    <label htmlFor="region"> <span>*</span>Страна / регион :</label>
                    <input required id="region" type="text" value={country} onChange={e => setCountry(e.target.value)} placeholder="Укажите регион доставки"/>
                    {
                        !isValidCountry && country.length > 0 ? <p className={classes.validation__ins}>Enter valid country</p> : <></>
                    }
                </li>
                <li>
                    <label htmlFor="province"> <span>*</span>Государство / Провинция /<br></br> Регион :</label>
                    <input required id="province" type="text" value={province}  onChange={e => setProvince(e.target.value)} placeholder="Выберите состояние"/>
                </li>
                    {
                        !isValidProvince && province.length > 0 ? <p className={classes.validation__ins}>Enter valid Province</p> : <></>
                    }
                <li>
                    <label htmlFor="country"> <span>*</span>Город :</label>
                    <input required id="country" type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="Город"/>
                </li>
                    {
                        !isValidCity && city.length > 0 ? <p className={classes.validation__ins}>Enter valid city</p> : <></>
                    }
                <li>
                    <label htmlFor="address"> <span>*</span>Адрес:</label>
                    <input required id="address" type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="Адрес улитцы"/>
                </li>
                    {
                        !isValidAddress && address.length > 0 ? <p className={classes.validation__ins}>Enter valid address</p> : <></>
                    }
                <li>
                    <label htmlFor="address2">Адрес 2 :</label>
                    <input id="address2" type="text" value={address2} onChange={e => setAddess2(e.target.value)} placeholder="Квартира, номер комната…"/>
                </li>
                <li>
                    <label htmlFor="zip"> <span>*</span>ZIP / Почтовый индекс :</label>
                    <input required id="zip" maxLength={6} minLength={4} value={zip} onChange={e => setZip(e.target.value)} type="text" placeholder="Почтовый индекс "/>
                </li>
                    {
                         !isValidZip && zip.length > 0  ? <p className={classes.validation__ins}>Enter 4 or 6 digits</p> : <></>
                    }
                <li>
                    <label htmlFor="telephone"> <span>*</span>Номер телефона :</label>
                    <input required id="telephone" value={phone} onChange={e => setPhone(e.target.value)} type="text" placeholder="Ваш номер телефона"/>
                </li>
                    {
                        !isValidPhone && phone.length > 0 ? <p className={classes.validation__ins}>Enter phone number in international format</p> : <></>
                    }
            </ul>
           <div className={classes.btn_wrapper}>
            <div>
                <input type="checkbox" value={defaultShipping} onChange={e => setDefaultShipping(e.target.checked)}/><p>  Установить в качестве адреса доставки по умолчанию</p>
            </div>
            {validationError && <p style={{color: "red"}}>{validationError}</p>}
            <Button type="submit" maxwidth="195px" title="Сохранить"/>
           </div>
        </form>
    )
}

export default connect(null, { orderProducts })(KarzinkaForm)
