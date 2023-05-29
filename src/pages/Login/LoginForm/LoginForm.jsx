import React from 'react';
import './LoginForm.scss';
import Input from '../../../components/module/Input/Input';
import { Link } from 'react-router-dom';

const LoginForm = () => {

    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log(`Login:`);
    }

    return (
        <form className='form column' onSubmit={handleSubmit}>
            <label className='form-label column'>
                <span>email</span>
                <Input variant='email' content={'info@example.com'} />
            </label>
            <label className='form-label column'>
                <span>password</span>
                <Input variant='password' />
            </label>
            <Input variant='submit' value='Login' sub={true} />
            <p className='form-footer'>Don’t have an account? <Link to='/login/register'>Register</Link></p>
        </form>
    );
};

export default LoginForm;