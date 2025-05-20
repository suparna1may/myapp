import React from 'react';
import Logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Navbar() {
    const { cart } = useSelector(
        (state) => state.allCart
      );

    return (
        <>
            <div className="header">
                <div className="header-top">
                    <div className="container">
                        <div className="header-left">
                            <p className="welcome-msg">Welcome to STORE!</p>
                        </div>
                        <div className="header-right">


                            <span className="divider"></span>
                            <a href="#" className="contact d-lg-show"><i className="d-icon-map"></i>Contact</a>
                            <a className="login-link" href="#" data-toggle="login-modal"><i
                                className="d-icon-user"></i>Sign in</a>
                            <span className="delimiter">/</span>
                            <a className="register-link ml-0" href="#" data-toggle="login-modal">Register</a>

                        </div>
                    </div>
                </div>

                <div className="header-middle sticky-header fix-top sticky-content">
                    <div className="container">
                        <div className="header-left">
                            <a href="#" className="mobile-menu-toggle">
                                <i className="d-icon-bars2"></i>
                            </a>
                          
                            <Link to="/" class="logo">                             
                                <img src={Logo} alt="logo" width="153" height="44"/>
                          </Link>
                         

                            <div className="header-search hs-simple">
                                <form action="#" className="input-wrapper">
                                    <input type="text" className="form-control" name="search" autocomplete="off"
                                        placeholder="Search..." required />
                                    <button className="btn btn-search" type="submit" title="submit-button">
                                        <i className="d-icon-search"></i>
                                    </button>
                                </form>
                            </div>

                        </div>
                        <div className="header-right">
                            <a href="tel:#" className="icon-box icon-box-side">
                                <div className="icon-box-icon mr-0 mr-lg-2">
                                    <i className="d-icon-phone"></i>
                                </div>
                                <div className="icon-box-content d-lg-show">
                                    <h4 className="icon-box-title">Call Us Now:</h4>
                                    <p>0(800) 123-456</p>
                                </div>
                            </a>
                            <span className="divider"></span>
                            <div className="dropdown wishlist wishlist-dropdown off-canvas">
                                <a href="#" className="wishlist-toggle" title="wishlist">
                                    <i className="d-icon-heart"></i>
                                </a>
                                <div className="canvas-overlay"></div>

                                <div className="dropdown-box scrollable">
                                    <div className="canvas-header">
                                        <h4 className="canvas-title">wishlist</h4>
                                        <a href="#" className="btn btn-dark btn-link btn-icon-right btn-close">close<i
                                            className="d-icon-arrow-right"></i><span className="sr-only">wishlist</span></a>
                                    </div>
                                    
                                    <a href="#" className="btn btn-dark wishlist-btn mt-4"><span>Go To
                                        Wishlist</span></a>

                                </div>

                            </div>
                            <span className="divider"></span>
                            <div className="dropdown cart-dropdown type2 mr-0 mr-lg-2">
                              

                                <Link to="/Cart" className="cart-toggle label-block link">
                                   
                                    <i className="d-icon-bag"><span className="cart-count">{cart.length}</span></i>
                               </Link> 
                               

                            </div>
                            <div className="header-search hs-toggle mobile-search">
                                <a href="#" className="search-toggle">
                                    <i className="d-icon-search"></i>
                                </a>
                                <form action="#" className="input-wrapper">
                                    <input type="text" className="form-control" name="search" autocomplete="off"
                                        placeholder="Search your keyword..." required />
                                    <button className="btn btn-search" type="submit" title="submit-button">
                                        <i className="d-icon-search"></i>
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="header-bottom d-lg-show">
                    <div className="container">
                        <div className="header-left">
                            <nav className="main-nav">
                                <ul className="menu menu-active-underline">
                                    <li className="active">
                                        <Link to="/">Home</Link>
                                    </li>

                                    <li>
                                        <Link to="/Shop">Shop</Link>
                                    </li>
                                    <li>
                                        <Link to="/Cart">Cart</Link>
                                    </li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Wishlist</a></li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
