import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { url } from "../utility/url";
import MyArtList from "./MyArtList";
import { Helmet } from "react-helmet-async";
import NoItem from "./NoItem";
import { IoIosArrowDown } from "react-icons/io";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";

const MyArt = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [filterType, setFilterType] = useState("yes");

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



    const handleFilterClick = (filter) => {
        setFilterType(filter);
    };

    const sortItem = (item, filter) => {
        if (filter === "yes") {
            return item;
        } else {
            return item.slice().sort((a, b) => {
                if (a[filter] < b[filter]) {
                    return -1;
                }
                if (a[filter] > b[filter]) {
                    return 1;
                }
                return 0;
            });
        }
    };

    return (
        <div>
            <Helmet>
                <title>My Art & Craft Item</title>
            </Helmet>
            <div className="text-center">
                <Menu>
                    <MenuHandler>
                        <Button className="bg-[#23BE0A] mt-5 w-fit md:w-44"><span className="flex items-center justify-center gap-2">Sort By <IoIosArrowDown className="text-2xl font-bold" /></span></Button>
                    </MenuHandler>
                    <MenuList className="p-5  w-44 border-2 space-y-3">
                        <MenuItem className="hover:bg-green-400 rounded-lg py-2" onClick={() => handleFilterClick("yes")}>Yes</MenuItem>
                        <MenuItem className="hover:bg-green-400 rounded-lg py-2" onClick={() => handleFilterClick("customization")}>No</MenuItem>
                    </MenuList>
                </Menu>
            </div>
            <h2 className="text-4xl font-bold text-center underline text-blue-700 my-5">My Art & Craft Item</h2>
            {items.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">

                    {
                        sortItem(items, filterType).map(item => <MyArtList key={item._id} handleDelete={handleDelete} item={item}></MyArtList>)
                    }
                </div>
                : <> <NoItem /> </>}
        </div>
    );
};

export default MyArt;
