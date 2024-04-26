import { Link, useLoaderData } from "react-router-dom";

const CartDetails = () => {
    const Cart = useLoaderData();
    const { image, item, subcategory, shortDescription, price, rating, customization, processing_time, stockStatus } = Cart;
    
    return (
        <section className=" bg-white text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{item}</h1>
                        <div className="flex mb-4">
                            <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
                            <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
                            <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
                        </div>
                        <p className="leading-relaxed mb-4">{shortDescription}</p>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Category</span>
                            <span className="ml-auto text-gray-900">{subcategory}</span>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Rating</span>
                            <span className="ml-auto text-gray-900">{rating}</span>
                        </div>
                        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                            <span className="text-gray-500">Customization</span>
                            <span className="ml-auto text-gray-900">{customization}</span>
                        </div>
                        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                            <span className="text-gray-500">Processing Time</span>
                            <span className="ml-auto text-gray-900">{processing_time}</span>
                        </div>
                        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                            <span className="text-gray-500">Stock Status</span>
                            <span className="ml-auto text-gray-900">{stockStatus}</span>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">Price : ${price}</span>
                            <Link to={"/"} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Back</Link>
                            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-[550px] h-64 object-cover object-center rounded" src={image} />
                </div>
            </div>
        </section>
    );
};

export default CartDetails;