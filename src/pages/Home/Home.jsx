import React from 'react';
import './Home.scss';
import Button from '../../components/module/Button/Button';

const Home = () => {
    return (
        <div className='home column'>
            <h1 className='title'>Welcome</h1>
            <div className='home-links column'>
                <Button variant='yellow' link={'/login/register'} content={'Create Account'}/>
                <Button variant='black' link={'/login/login'} content={'Login'}/>
            </div>
        </div>
    );
};

export default Home;