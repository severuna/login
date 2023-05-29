import React from 'react';
import styles from './Input.module.scss';

const Input = ( { variant = 'text', content, sub, value}) => {

    const setInputType = () => {
        switch(variant) {
            case 'password': {
                return 'password'
            }

            case 'email': {
                return 'email'
            }

            case 'submit': {
                return 'submit'
            }

            default: {
                return 'text'
            }
        }
    }

    const setSubmit = () => {
        switch(sub) {
            case true: {
                return 'sub'
            }

            default: {
                return
            }
        }
    }

    return (
        <input type={setInputType()} value={value} placeholder={content} className={`${styles.input} ${styles[setSubmit()]}`} />
    );
};

export default Input;