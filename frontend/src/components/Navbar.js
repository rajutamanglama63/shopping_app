import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-content">
                    <div className="brand">
                        <h1>MERN shopping_app</h1>
                    </div>
                    <div className="menu">
                        <ul>
                            <li className="cart-btn">
                                <Link to="/cart">
                                    <i className="fas fa-shopping-cart"></i>
                                    <span className="cart">Cart</span>
                                    <span className="number">0</span>
                                </Link>
                            </li>
                            <li className="shop">
                                <Link to="/">
                                    Shop
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hamberger-menu">
                        <div className="ham-menu">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
