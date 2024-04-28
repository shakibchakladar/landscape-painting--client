import { useContext } from "react";
import { AuthContext } from "../../provides/FirebasePovider";

const useAuth = () => {
    const all=useContext(AuthContext);
    return all;
};

export default useAuth;