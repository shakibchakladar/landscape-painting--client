import { Outlet } from "react-router-dom";
import Nav from "../../src/components/Nav";

const Root = () => {
    return (
        <div>
            <div className="py-10">
            <Nav></Nav>
            </div>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;