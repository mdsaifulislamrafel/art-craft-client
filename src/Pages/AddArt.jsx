import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { url } from "../utility/url";

const AddArt = () => {
    const { user } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const item = form.item_name.value;
        const subcategory = form.subcategory_Name.value;
        const shortDescription = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stockStatus = form.stockStatus.value;
        const email = user?.email;
        const userName = user?.displayName;
        const addInfo = { image, item, subcategory, shortDescription, price, rating, customization, processing_time, stockStatus, email, userName };
        fetch(`${url}/added`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Your product has been added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }

    return (
        <div className="max-w-lg mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold text-center border-b-4 border-purple-950 mb-4">Add Craft Item</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Image URL:</label>
                    <input type="text" name="image" className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label className="block mb-1">Item Name:</label>
                    <input type="text" name="item_name" className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label className="block mb-1">Subcategory Name:</label>
                    <input type="text" name="subcategory_Name" className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label className="block mb-1">Short Description:</label>
                    <textarea name="short_description" className="w-full border border-gray-300 rounded px-3 py-2"></textarea>
                </div>
                <div className="md:flex md:justify-between">
                    <div className="md:w-1/2">
                        <label className="block mb-1">Price:</label>
                        <input type="text" name="price" className="w-full border border-gray-300 rounded px-3 py-2" />
                    </div>
                    <div className="md:w-1/2 md:ml-2">
                        <label className="block mb-1">Rating:</label>
                        <input type="text" name="rating" className="w-full border border-gray-300 rounded px-3 py-2" />
                    </div>
                </div>
                <div className="md:flex md:justify-between">
                    <div className="md:w-1/2">
                        <label className="block mb-1">Customization (Yes/No):</label>
                        <input type="text" name="customization" className="w-full border border-gray-300 rounded px-3 py-2" />
                    </div>
                    <div className="md:w-1/2 md:ml-2">
                        <label className="block mb-1">Processing Time:</label>
                        <input type="text" name="processing_time" className="w-full border border-gray-300 rounded px-3 py-2" />
                    </div>
                </div>
                <div>
                    <label className="block mb-1">Stock Status (In stock/Made to Order):</label>
                    <input type="text" name="stockStatus" className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded w-full">Add</button>
            </form>
        </div>
    );
};

export default AddArt;
