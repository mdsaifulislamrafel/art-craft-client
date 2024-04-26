import { useLoaderData } from "react-router-dom";
import { url } from "../utility/url";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateForm = () => {
    const update = useLoaderData();
    const { _id, image, item, subcategory, shortDescription, price, rating, customization, processing_time, stockStatus } = update;
    const handleUpdate = (e) => {
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
        const updateInfo = { image, item, subcategory, shortDescription, price, rating, customization, processing_time, stockStatus };
        fetch(`${url}/added/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Successfully',
                        icon: 'success',
                        confirmButtonText: `Cool`
                    })
                }
            })

    }

    return (
        <div className="max-w-lg mx-auto py-8 px-4 bg-white">
            <Helmet>
                <title>Update Craft Item</title>
            </Helmet>
            <h1 className="text-2xl font-bold text-center border-b-4 border-purple-950 mb-4">Update Craft Item</h1>
            <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                    <label className="block mb-1">Image URL:</label>
                    <input type="text" name="image" className="w-full border bg-white border-gray-300 rounded px-3 py-2" defaultValue={image} required />
                </div>
                <div>
                    <label className="block mb-1">Item Name:</label>
                    <input type="text" name="item_name" className="w-full border bg-white border-gray-300 rounded px-3 py-2" defaultValue={item} required />
                </div>
                <div>
                    <label className="block mb-1">Subcategory Name:</label>
                    <input type="text" name="subcategory_Name" className="w-full border bg-white border-gray-300 rounded px-3 py-2" defaultValue={subcategory} required />
                </div>
                <div>
                    <label className="block mb-1">Short Description:</label>
                    <textarea name="short_description" className="w-full border bg-white border-gray-300 rounded px-3 py-2" defaultValue={shortDescription} required ></textarea>
                </div>
                <div className="md:flex md:justify-between">
                    <div className="md:w-1/2">
                        <label className="block mb-1">Price:</label>
                        <input type="text" name="price" className="w-full border bg-white border-gray-300 rounded px-3 py-2" defaultValue={price} required />
                    </div>
                    <div className="md:w-1/2 md:ml-2">
                        <label className="block mb-1">Rating:</label>
                        <input type="text" name="rating" className="w-full border bg-white border-gray-300 rounded px-3 py-2" defaultValue={rating} required />
                    </div>
                </div>
                <div className="md:flex md:justify-between">
                    <div className="md:w-1/2">
                        <label className="block mb-1">Customization (Yes/No):</label>
                        <input type="text" name="customization" className="w-full border bg-white border-gray-300 rounded px-3 py-2" defaultValue={customization} required />
                    </div>
                    <div className="md:w-1/2 md:ml-2">
                        <label className="block mb-1">Processing Time:</label>
                        <input type="text" name="processing_time" className="w-full border bg-white border-gray-300 rounded px-3 py-2" defaultValue={processing_time} required />
                    </div>
                </div>
                <div>
                    <label className="block mb-1">Stock Status (In stock/Made to Order):</label>
                    <input type="text" name="stockStatus" className="w-full border bg-white border-gray-300 rounded px-3 py-2" defaultValue={stockStatus} required />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded w-full">Update</button>
            </form>
        </div>
    );
};

export default UpdateForm;
