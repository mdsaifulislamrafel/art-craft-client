import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { url } from "../utility/url";
import MyArtList from "./MyArtList";

const MyArt = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`${url}/myProduct/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [user?.email])

    const handleDelete = (id) => {
        fetch(`${url}/added/${id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.deletedCount > 0) {
                // Remove the deleted item from the list
                setItems(prevItems => prevItems.filter(item => item._id !== id));
            }
        });
    };

    return (
        <div>
            <h2 className="text-4xl font-bold text-center underline text-blue-700 my-5">My Art & Craft Item</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                {
                    items.map(item => <MyArtList key={item._id} handleDelete={handleDelete} item={item}></MyArtList>)
                }
            </div>
        </div>
    );
};

export default MyArt;
