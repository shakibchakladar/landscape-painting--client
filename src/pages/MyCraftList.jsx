import { useEffect, useState } from "react";
import useAuth from "../hooks/auth/useAuth";
import ItemCard from "../components/ItemCard";

const MyCraftList = () => {
    const { user } = useAuth();
    const [items,setItems]=useState([]);
    useEffect(() => {
        if (user?.email) {
            fetch(`https://landscape-painting-server.vercel.app/myProduct?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setItems(data);
                    // console.log(data);
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });
        }
    }, [user]);
    return (
        <div>
            <h2>This is my list of email :{items.length}</h2>
           <div className="grid grid-cols-2 px-8">
           {
                items?.map(item=><ItemCard key={item._id} item={item}></ItemCard>)
            }
           </div>
        </div>
    );
};

export default MyCraftList;
