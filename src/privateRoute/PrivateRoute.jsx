import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/auth/useAuth";

const PrivateRoute = ({children}) => {
    const {user}=useAuth();
    const location=useLocation();
    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    } else
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;