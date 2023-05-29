import React from 'react';
import Page from '../../components/module/Page/Page';
import LoginForm from './LoginForm/LoginForm';

const Login = () => {
    return (
        <Page variant={'Login'} content={<>
            <LoginForm />
        </>} />
    );
};

export default Login;