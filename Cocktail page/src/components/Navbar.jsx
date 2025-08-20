import { Link } from "react-router-dom";
import Cocktail from "../assets/Cocktails.png";
import "../styles/Navbar.css";
import { useState } from "react";

function Navbar() {
    const handleHamburger = () => {
        setHamburger(!hamburger);
    };
    const [hamburger, setHamburger] = useState(false);


    return (
        <nav className={hamburger ? 'navbar active' : 'navbar'}>
            <div className="navbar-menu">
                <div className="main-logo">
                    <img src={Cocktail} alt="Cocktails" />
                    <h1>Cocktails Page</h1>
                </div>
                <button className={hamburger ? 'hamburger open' : 'hamburger'} onClick={handleHamburger}></button>
                <ul className={hamburger ? 'menu active' : 'menu'}>
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="contact">Contact</Link>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
