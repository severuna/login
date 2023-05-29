import React from 'react';
import styles from './Page.module.scss';

const Page = ( { variant, content}) => {

    return (
        <div className={`${styles.page} column`}>
            <h1 className={`${styles.page_title}`}>{variant}</h1>
            {content}
        </div>
    );
};

export default Page;