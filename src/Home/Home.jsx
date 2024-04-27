import { Helmet } from "react-helmet-async";
import Slider from "../Pages/Slider";
import ArtSection from "../Pages/ArtSection";
import Teams from "../Pages/Teams";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider />
            <div className="p-10">
                <ArtSection />
            </div>
            <Teams />
        </div>
    );
};

export default Home;