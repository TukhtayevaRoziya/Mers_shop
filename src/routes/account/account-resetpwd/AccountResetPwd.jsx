import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import Button from '../../../components/UI/button/Button';
import classes from './AccountResetPwd.module.css';
import { resetPassword } from '../../../redux/actions/resetPwdActions';
const TEST_PASSWORD_REGX =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/;

const AccountResetPwd = (props) => {
    const resetPWDStatus = useSelector(state => state.resetPwd);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [err, setErr] = useState('');

    const [isValidOldPassword, setIsValidOldPassword] = useState(false);
    const [isValidNewPassword, setIsValidNewPassword] = useState(false);
    const [iseValidConfirmPassword, setIsValidConfirmPassword] = useState(false);
    const [samePassword, setSamePassword] = useState(false);

    useEffect(() => {
        const testOldPasswordREGX = TEST_PASSWORD_REGX.test(oldPassword);
        setIsValidOldPassword(testOldPasswordREGX)
    }, [oldPassword])

    useEffect(() => {
        const testNewPasswordREGX = TEST_PASSWORD_REGX.test(newPassword);
        setIsValidNewPassword(testNewPasswordREGX)
    }, [newPassword])

    useEffect(() => {
        const testConfirmPasswordREGX = TEST_PASSWORD_REGX.test(confirmPassword);
        setIsValidConfirmPassword(testConfirmPasswordREGX)
    }, [confirmPassword])

    useEffect(() => {
        const samePasswords = newPassword === confirmPassword;
        setSamePassword(samePasswords)
    }, [newPassword, confirmPassword])

    const btnCss = {
        marginLeft: "218px"
    }

    const handlePasswordReset = (e) => {
        e.preventDefault();
        // if XSS occures 
        const dblOldCheck = isValidOldPassword;
        const dblNewCheck = isValidNewPassword;
        if(dblOldCheck && dblNewCheck && samePassword){
            props.resetPassword({oldPassword, newPassword, confirmPassword})
            if(!resetPWDStatus.err){
                setConfirmPassword("")
                setOldPassword("");
                setNewPassword("")
            }
        }
        else{
            setErr("Please fill out every field corretly!")
        }
    }
    return (
        <div className={classes.account__resetpwd}>
            <div className={classes.resetpwd__header}>
                <h1>Изменить пароль</h1>
            </div>
            <div className={classes.resetpwd__container}>
                {
                    err && <p>{err}</p>
                }
                <form className={classes.resetpwd__form} onSubmit={handlePasswordReset}>
                    <div className={classes.input__wrapper}>
                        <label htmlFor="password__name"><span>*</span> Существующий пароль:</label>
                        <input value={oldPassword} onChange={e => setOldPassword(e.target.value)} type="password" id="password__name" placeholder="Имя"/>
                    </div>
                    {
                        !isValidOldPassword && oldPassword.length > 0 ? <p>Old password is invalid!</p> : <></>
                    }
                    <div className={classes.input__wrapper}>
                        <label htmlFor="password__new"><span>*</span> Hовый пароль:</label>
                        <input value={newPassword} onChange={e => setNewPassword(e.target.value)} type="text" id="password__new" placeholder="New Password"/>
                    </div>
                    {
                        !isValidNewPassword && newPassword.length > 0 ? <p>New password is invalid!</p> : <></>
                    }
                    <div className={classes.input__wrapper}>
                        <label htmlFor="password__repeat"><span>*</span> Повторно введите пароль:</label>
                        <input type="text" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} id="password__repeat" placeholder="Repeat Password"/>
                    </div>
                    {
                        !iseValidConfirmPassword && confirmPassword.length > 0 ? <p>Confirm password is invalid!</p> : <></>
                    }
                    {
                        !samePassword && confirmPassword.length > 0 ? <p>Confirm password should match!</p> : <></>
                    }
                    {
                        resetPWDStatus?.message && <p style={resetPWDStatus?.err ? {color: "red"} : {color: "#000"}}>{resetPWDStatus.message}</p>  
                    }
                    <Button btnCss={btnCss} maxwidth="141px" type="submit" title="Сохранить"/>
                </form>
            </div>
        </div>
    )
}

export default connect(null, { resetPassword }) (AccountResetPwd)
