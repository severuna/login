import './Main.scss';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

const Main = () => {
    return (
        <div className='main column'>
            <NavBar />
            <Routes>
                <Route path='/login/' element={<Login />} />
                <Route path='/login/register' element={<Register />} />
            </Routes>
        </div>
    );
};

export default Main;