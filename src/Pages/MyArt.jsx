import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { url } from "../utility/url";


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
            {item.length}
        </div>
    );
};

export default MyArt;