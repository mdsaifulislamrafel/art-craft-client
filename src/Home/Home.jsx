import { Helmet } from "react-helmet-async";
import Slider from "../Pages/Slider";
import ArtSection from "../Pages/ArtSection";
import Teams from "../Pages/Teams";
import Feedback from "../Pages/Feedback";
import ArtCategories from "../Pages/ArtCategories";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider />
            <div className="p-10">
                <ArtCategories />
                <ArtSection />
            </div>
            <Teams />
            <Feedback />
        </div>
    );
};

export default Home;