import { Helmet } from "react-helmet-async";
import Slider from "../Pages/Slider";
import ArtSection from "../Pages/ArtSection";
import Teams from "../Pages/Teams";
import Feedback from "../Pages/Feedback";

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
            <Feedback />
        </div>
    );
};

export default Home;