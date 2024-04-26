/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AllArtCard = ({art}) => {
    const { _id,image, item, shortDescription, price } = art;
    return (
        <div className="mx-auto w-full space-y-4 rounded-lg bg-white p-6 shadow-lg  dark:bg-[#2f2f53]">
        <img width={200} height={200} className="h-[275px] w-full rounded-lg object-cover" src={image} alt="card navigate ui" />
        <div className="grid gap-2">
          <h1 className="text-lg font-semibold text-white ">{item}</h1>
          <p className="text-sm  dark:text-white/60 text-white">{shortDescription}</p>
          <div className="text-lg text-white font-semibold">Price : $ {price}</div>
        </div>
        <div className="flex gap-4">
          <Link to={`/details/${_id}`}><button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">View Details</button></Link>
        </div>
      </div>
    );
};

export default AllArtCard;