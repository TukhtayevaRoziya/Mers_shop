import React from 'react';
import PropTypes from 'prop-types'
import classes from './Button.module.css';

const Button = ({title, type, btnCss, disabled, loading, loadingText, maxwidth}) => {
    return (
        <button type={type} style={disabled  || loading ? {opacity: 0.7, maxWidth: maxwidth, ...btnCss} : {opacity: 1, maxWidth: maxwidth, ...btnCss}} disabled={disabled || loading} className={classes.button}>
            {loading ? loadingText : title}
        </button>
    )
}


Button.propTypes = {
    title: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    loadingText: PropTypes.string,
    maxwidth: PropTypes.string,
    type: PropTypes.string
};


export default Button
