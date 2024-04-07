import React from "react";
import {Link} from 'react-router-dom';      // for rendering the data
import './Navbar.css';

function Navbar()
{
    return(
        <div className="navbar">
            <nav>
                <header>
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/help">Help</Link></li>
                    <li><Link to="/loginform">Login</Link></li>
                    <li><Link to="/delete">Delete</Link></li>

                </ul>
                </header>
            </nav>
        </div>
    );
}

export default Navbar;