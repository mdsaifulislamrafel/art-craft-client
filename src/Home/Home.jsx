import { Helmet } from "react-helmet-async";
import Slider from "../Pages/Slider";
import ArtSection from "../Pages/ArtSection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>House</title>
            </Helmet>
            <Slider />
            <div className="p-10">
                <ArtSection />
            </div>
        </div>
    );
};

export default Home;