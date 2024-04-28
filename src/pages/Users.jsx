import { useLoaderData } from "react-router-dom";
import UserCard from "../components/UserCard";

const Users = () => {
  const loadedData = useLoaderData();
  return (
    <div>
      <h2>user:{loadedData.length}</h2>
      <h2>userrs:</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          {loadedData.map((user) => (
            <UserCard key={user._id} user={user}></UserCard>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Users;
