import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { url } from "../utility/url";
import MyArtList from "./MyArtList";


const MyArt = () => {
    const { user } = useContext(AuthContext);
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`${url}/myProduct/${user?.email}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [user?.email])

    return (
        <div>
            <h2 className="text-4xl uppercase font-bold text-center underline my-5">My Added Product</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                {
                    item.map(item => <MyArtList key={item._id} item={item}></MyArtList>)
                }
            </div>
        </div>
    );
};

export default MyArt;