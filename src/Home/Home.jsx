import { Helmet } from "react-helmet-async";
import Slider from "../Pages/Slider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>House</title>
            </Helmet>
            <Slider />
        </div>
    );
};

export default Home;