import './Main.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import main_img from './assets/img/main.svg'

const Main = () => {
    return (
        <div className='main column'>
            <img src={main_img} alt='main img' className='main-img' />
            <Routes>
                <Route path='/login/' element={<Home />} />
                <Route path='/login/login' element={<Login />} />
                <Route path='/login/register' element={<Register />} />
            </Routes>
        </div>
    );
};

export default Main;