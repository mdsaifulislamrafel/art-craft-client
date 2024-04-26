import { useEffect, useState } from "react";
import { url } from "../utility/url";
import ArtCart from "./ArtCart";
import { Typewriter } from "react-simple-typewriter";


const ArtSection = () => {
    const [art, setArt] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(`${url}/added`)
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setArt(data)
            });
    }, [])
    if (loading) {
        return <div className="w-10 h-10 my-5 mx-auto animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>

    }
    return (
        <div>
            <h2 className="text-2xl my-10 text-center underline md:text-5xl text-[#FF497C] font-bold">Explore <Typewriter words={['Our Product']} delaySpeed={1000} typeSpeed={100} cursor enabled loop={0} /></h2>
            <div className="grid  grid-cols-1 gap-4 md:gap-10 md:grid-cols-3 lg:grid-cols-4">

                {art.slice(0, 8).map(art => <ArtCart key={art._id} loading={loading} art={art}></ArtCart>)}
            </div>
        </div>
    );
};

export default ArtSection;