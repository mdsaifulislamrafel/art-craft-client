/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AllArtCard = ({ art }) => {
  const { _id, image, item, price } = art;
  return (
    <tbody>
      <tr  className="hover:bg-gray-50 border-b transition duration-300">
        <td className="py-4 px-4 flex justify-start">
          <img src={image} alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
        </td>
        <td className="py-4 px-6 border-b text-xl font-medium">{item}</td>
        <td className="py-4 px-6 border-b text-lg font-medium">${price}</td>
        <td className="py-4 px-6 border-b text-end">
          <Link to={`/details/${_id}`} className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Details</Link>
        </td>
      </tr>
    </tbody>
  );
};

export default AllArtCard;