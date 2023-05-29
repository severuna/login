import React from 'react';
import Input from '../../../components/module/Input/Input';
import { Link } from 'react-router-dom';

const RegisterForm = () => {

    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log(`Register:`);;
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
            <label className='form-label column'>
                <span>confirm password</span>
                <Input variant='password' />
            </label>
            <Input variant='submit' value='Register' sub={true} />
            <p className='form-footer'>Already have account? <Link to='/login/login'>Login</Link></p>
        </form>
    );
};

export default RegisterForm;