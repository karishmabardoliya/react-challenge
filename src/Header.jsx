import { useState } from "react";
import { NavLink } from 'react-router-dom';
const Header = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>
                <div className="nav-container">
                    <NavLink to="/" className="nav-logo">
                        React Challenge
                        <i className="fa fa-code"></i>
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/add-joke"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Add Joke
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/history"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                History
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>)
}

export default Header;