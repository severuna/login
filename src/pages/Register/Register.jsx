import React from 'react';
import './Register.scss';
import Page from '../../components/module/Page/Page';
import RegisterForm from './RegisterForm/RegisterForm';

const Register = () => {
    return (
        <Page variant={'Register'} content={
            <>
                <RegisterForm />
            </>
        }/>
    );
};

export default Register;