/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtList = ({ item, handleDelete }) => {
    const { _id, image, item: title, price, rating, customization, stockStatus } = item;

    const confirmDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(id);
            }
        });
    };

    return (
        <div className="w-full md:w-[80%] p-2 mx-auto">
            <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-[250px] rounded w-full object-cover object-center mb-6" src={image} alt="content" />
                <div className="md:flex justify-between items-center">
                    <div>
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{title}</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Price: ${price}</h2>
                        <p className="leading-relaxed text-base">Rating: {rating}</p>
                        <p className="leading-relaxed text-base">Customization: {customization}</p>
                        <h6 className="text-lg text-gray-900 font-medium title-font mb-4">Stock Status: {stockStatus}</h6>
                    </div>
                    <div className="space-y-5 md:space-y-10">
                        <Link to={`/update/${_id}`}><button className="btn btn-info text-white">Update</button></Link>
                        <br />
                        <button onClick={() => confirmDelete(_id)} className="btn btn-error text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyArtList;
