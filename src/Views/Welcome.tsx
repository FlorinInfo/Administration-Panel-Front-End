import { Link } from 'react-router-dom'
import {FunctionComponent, ReactNode} from "react";

const Welcome:FunctionComponent = () => {

    const date:Date = new Date();
    const today:ReactNode = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date);

    const content:ReactNode = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Welcome!</h1>

            <p><Link to="/dashboard/notes">View techNotes</Link></p>

            <p><Link to="/dashboard/users">View User Settings</Link></p>

        </section>
    )

    return content;
}
export default Welcome;