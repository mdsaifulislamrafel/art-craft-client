import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>House</title>
            </Helmet>
            <h2 className="text-4xl mt-20">This is a home</h2>
        </div>
    );
};

export default Home;