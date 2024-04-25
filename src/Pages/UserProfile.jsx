import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";
AOS.init();

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="flex flex-col justify-center items-center h-full md:h-[70vh] " data-aos="zoom-out-up">
            <Helmet>
                <title>User Profile</title>
            </Helmet>
            <div className="p-10 md:p-20 shadow-lg font-sans rounded-xl space-y-4 flex flex-col justify-center items-center mx-auto bg-white" >
                <div className="relative group">
                    <img data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" className="w-[200px] h-[200px] bg-slate-500 object-cover rounded-full" src={user?.photoURL} alt="card navigate ui" />
                </div>

                <div className="text-center space-y-5">
                    <h1 data-aos="fade-left" data-aos-duration="2000" className="text-xl md:text-3xl font-bold text-gray-700">Your Name : {user?.displayName || "Name is not found"}</h1>
                    <p data-aos="fade-right" data-aos-duration="3000" className="text-gray-600 text-sm font-semibold">Your Email Address : {user?.email || "Email is not found"}</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;