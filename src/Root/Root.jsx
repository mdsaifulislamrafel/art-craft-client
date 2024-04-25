import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';
const Root = () => {
    return (
        <div className='w-full mx-auto'>
            <Navbar />
            <div className='min-h-[calc(100vh-162.66px)]'>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};  

export default Root;