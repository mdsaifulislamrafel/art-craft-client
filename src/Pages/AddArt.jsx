import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { url } from "../utility/url";
import { Helmet } from "react-helmet-async";

const AddArt = () => {
    const { user } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const item = form.item_name.value;
        const subcategory = form.subcategory_Name.value; // Changed from form.subcategory.value
        const shortDescription = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stockStatus = form.stockStatus.value;
        const email = user?.email;
        const userName = user?.displayName;
        const addInfo = { image, item, subcategory, shortDescription, price, rating, customization, processing_time, stockStatus, email, userName };
        console.log(addInfo);
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
                    form.reset();
                }
            })

    }

    return (
        <div className="max-w-lg mx-auto py-8 px-4 bg-white">
            <Helmet>
                <title>Add Art & Craft Item</title>
            </Helmet>
            <h1 className="text-2xl font-bold text-center border-b-4 text-black border-purple-950 mb-4">Add Art & Craft Item</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Image URL:</label>
                    <input type="text" name="image" className="w-full border bg-white border-gray-300 rounded px-3 py-2" required />
                </div>
                <div>
                    <label className="block mb-1">Item Name:</label>
                    <input type="text" name="item_name" className="w-full border bg-white border-gray-300 rounded px-3 py-2" required />
                </div>
                <div>
                    <label className="block mb-1">Subcategory Name:</label>
                    <select className="w-full border bg-white border-gray-300 rounded px-3 py-2" name="subcategory_Name" required>
                        <option value="Clay-made pottery">Clay-made pottery</option>
                        <option value="Stoneware">Stoneware</option>
                        <option value="Porcelain">Porcelain</option>
                        <option value="Terra Cotta">Terra Cotta</option>
                        <option value="Ceramics & Architectural">Ceramics & Architectural</option>
                        <option value="Home decor pottery">Home decor pottery</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1">Short Description:</label>
                    <textarea name="short_description" className="w-full border bg-white border-gray-300 rounded px-3 py-2" required ></textarea>
                </div>
                <div className="md:flex md:justify-between">
                    <div className="md:w-1/2">
                        <label className="block mb-1">Price:</label>
                        <input type="text" name="price" className="w-full border bg-white border-gray-300 rounded px-3 py-2" required />
                    </div>
                    <div className="md:w-1/2 md:ml-2">
                        <label className="block mb-1">Rating:</label>
                        <input type="text" name="rating" className="w-full border bg-white border-gray-300 rounded px-3 py-2" required />
                    </div>
                </div>
                <div className="md:flex md:justify-between">
                    <div className="md:w-1/2">
                        <label className="block mb-1">Customization (Yes/No):</label>
                        <select className="w-full border bg-white border-gray-300 rounded px-3 py-2" name="customization" required>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="md:w-1/2 md:ml-2">
                        <label className="block mb-1">Processing Time:</label>
                        <input type="text" name="processing_time" className="w-full border bg-white border-gray-300 rounded px-3 py-2" required />
                    </div>
                </div>
                <div>
                    <label className="block mb-1">Stock Status (In stock/Made to Order):</label>
                    <select className="w-full border bg-white border-gray-300 rounded px-3 py-2" name="stockStatus" required>
                        <option value="In stock">In stock</option>
                        <option value="Made to Order">Made to Order</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded w-full">Add</button>
            </form>
        </div>
    );
};

export default AddArt;
