import { useLoaderData } from "react-router-dom";

const CartDetails = () => {
    const Cart = useLoaderData();
    const { image, item, subcategory, shortDescription, price, rating, customization, processing_time, stockStatus, email, userName } = Cart;
    return (
        <div>
            {price}
        </div>
    );
};

export default CartDetails;