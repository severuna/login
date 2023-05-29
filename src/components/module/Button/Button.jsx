import React from 'react';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const Button = ( {variant = 'black', link, content}) => {
    const selectColor = () => {
        switch ( variant ) {
            case 'yellow': {
                return 'yellow';
            }
            default: {
                return 'black';
            }
        }
    }
    return (
        <Link to={link} className={`${styles.btn} ${styles[selectColor()]}`}>{content}</Link>
    );
};

export default Button;