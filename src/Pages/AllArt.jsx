import { useLoaderData } from "react-router-dom";
import AllArtCard from "./AllArtCard";

const AllArt = () => {
    const allArt = useLoaderData();
    return (
        <div className="p-5">
            <h2 className="text-5xl text-center my-5 underline text-orange-400 font-bold">All Art & Craft Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    allArt.map((art) => <AllArtCard key={art._id} art={art}></AllArtCard>)
                }
            </div>
        </div>
    );
};

export default AllArt;