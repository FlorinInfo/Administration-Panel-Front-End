import { Link } from 'react-router-dom'
import {FunctionComponent, ReactNode} from "react";

const DashboardHeader:FunctionComponent = () => {

    const content:ReactNode = (
        <header className="dash-header">
            <div className="dash-header__container">
                <Link to="/dash">
                    <h1 className="dash-header__title">techNotes</h1>
                </Link>
                <nav className="dash-header__nav">
                    {/* add nav buttons later */}
                </nav>
            </div>
        </header>
    )

    return content
}
export default DashboardHeader;
