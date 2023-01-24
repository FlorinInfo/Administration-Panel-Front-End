import DashboardHeader from "../components/DashboardHeader";
import DashboardFooter from "../components/DashboardFooter";
import {Outlet} from "react-router-dom";

const DashboardLayout = ()=>{
    return (
        <>
            <DashboardHeader/>
            <div className="dash-container">
                <Outlet/>
            </div>
            <DashboardFooter/>
        </>
    )
}

export default DashboardLayout;