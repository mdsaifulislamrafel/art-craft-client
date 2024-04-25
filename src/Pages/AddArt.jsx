const AddArt = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="max-w-lg mx-auto py-8">
            <h1 className="text-2xl font-bold text-center border-b-4 border-purple-950  mb-4">Add Craft Item</h1>
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
                <div>
                    <label className="block mb-1">Price:</label>
                    <input type="text" name="price" className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label className="block mb-1">Rating:</label>
                    <input type="text" name="rating"  className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label className="block mb-1">Customization (Yes/No):</label>
                    <input type="text" name="customization" className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label className="block mb-1">Processing Time:</label>
                    <input type="text" name="processing_time" className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label className="block mb-1">Stock Status (In stock/Made to Order):</label>
                    <input type="text" name="stockStatus" className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label className="block mb-1">User Email:</label>
                    <input type="email" name="email" className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label className="block mb-1">User Name:</label>
                    <input type="text" name="userName" className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">Add</button>
            </form>
        </div>
    );
};

export default AddArt;
