import Lottie from "lottie-react";
import robotAnimation from "./robotAnimation.json";
const NoItem = () => {
    return (
        <div className="w-full md:w-[50%] lg:w-[30%] mx-auto">
            <Lottie animationData={robotAnimation} />
            <p className="text-center text-3xl text-gray-500">No items found.</p>
        </div>
    );
};

export default NoItem;