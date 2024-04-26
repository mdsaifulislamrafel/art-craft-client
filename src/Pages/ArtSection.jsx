import { useEffect, useState } from "react";
import { url } from "../utility/url";
import ArtCart from "./ArtCart";
import { Typewriter } from "react-simple-typewriter";


const ArtSection = () => {
    const [art, setArt] = useState([]);
    useEffect(() => {
        fetch(`${url}/added`)
            .then((res) => res.json())
            .then((data) => setArt(data));
    }, [])
    return (
        <div>
            <h2 className="text-2xl my-10 text-center underline md:text-5xl text-[#FF497C] font-bold">Explore <Typewriter words={['Our Product']} delaySpeed={1000} typeSpeed={100} loop={0} /></h2>
            <div className="grid  grid-cols-1 gap-4 md:gap-10 md:grid-cols-3 lg:grid-cols-4">
                {art.slice(0, 8).map(art => <ArtCart key={art._id} art={art}></ArtCart>)}
            </div>
        </div>
    );
};

export default ArtSection;