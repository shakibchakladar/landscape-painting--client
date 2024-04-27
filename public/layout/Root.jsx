import { Outlet } from "react-router-dom";
import Nav from "../../src/components/Nav";
import Footer from "../../src/components/Footer";

const Root = () => {
    return (
        <div>
            <div className="py-10">
            <Nav></Nav>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;