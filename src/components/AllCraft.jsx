import { useLoaderData } from "react-router-dom";
import AllCraftCard from "./AllCraftCard";

const AllCraft = () => {
    const allCraft=useLoaderData()
    return (
        <div className="py-10">
            <h2 className="text-5xl text-red-500">All Art & craft Items:{allCraft.length}</h2>
           <div className="grid grid-cols-1 md:grid-cols-3">
           {
                allCraft.map(craft=><AllCraftCard key={craft._id} craft={craft}></AllCraftCard>)
            }
           </div>
            
        </div>
    );
};

export default AllCraft;