import { useLoaderData } from "react-router-dom";
import AllArtCard from "./AllArtCard";
import { Helmet } from "react-helmet-async";

const AllArt = () => {
    const allArt = useLoaderData();
    return (
        <div className="p-5">
            <Helmet>
                <title>All Art & Craft Items</title>
            </Helmet>
            <h2 className="text-5xl text-center my-5 underline text-orange-400 font-bold">All Art & Craft Items</h2>

            <div>

                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay= "300" className="overflow-x-auto">
                    <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                        <thead>
                            <tr className="bg-[#0095FF] text-white">
                                <th className="py-4 px-6 text-lg text-left border-b">Product Image</th>
                                <th className="py-4 px-6 text-lg text-left border-b">Product Name</th>
                                <th className="py-4 px-6 text-lg text-left border-b">Price</th>
                                <th className="py-4 px-6 text-lg border-b text-end">Action</th>
                            </tr>
                        </thead>
                        {
                            allArt.map((art) => <AllArtCard key={art._id} art={art}></AllArtCard>)
                        }

                    </table>
                </div>


            </div>
        </div>
    );
};

export default AllArt;