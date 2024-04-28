import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedData=useLoaderData();
    return (
        <div>
            <h2>user:{loadedData.length}</h2>
            <h2>userrs:</h2>
            
        </div>
    );
};

export default Users;