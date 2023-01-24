import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useLocation } from 'react-router-dom'
import React, {Component, FunctionComponent} from "react";

const DashboardFooter:FunctionComponent = () => {

    const navigate = useNavigate()
    const { pathname } : {pathname:string} = useLocation()

    const onGoHomeClicked = () => navigate('/dash')

    let goHomeButton:null | React.ReactNode = null
    if (pathname !== '/dash') {
        goHomeButton = (
            <button
                className="dash-footer__button icon-button"
                title="Home"
                onClick={onGoHomeClicked}
            >
                <FontAwesomeIcon icon={faHouse} />
            </button>
        )
    }

    const content:React.ReactNode = (
        <footer className="dash-footer">
            {goHomeButton}
            <p>Current User:</p>
            <p>Status:</p>
        </footer>
    )
    return content
}
export default DashboardFooter;