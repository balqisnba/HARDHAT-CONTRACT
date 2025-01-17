import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Voting dApp</h1>
            </div>
            <nav className="nav-links">
                <ul>
                    <li>
                        <NavLink
                            to="/src/pages/Home.tsx"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/vote"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Vote
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/results"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Results
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact-us"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
