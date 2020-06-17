import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Navbar extends Component
{
    render(){
        return (
            <nav id="site-navigation" className="navbar">
                <div className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul id="menu-main-menu" className="nav navbar-nav navbar-primary sf-menu">
                        <li id="menu-item-3100" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3100"><NavLink to="/about" >About</NavLink></li>
                        <li id="menu-item-3608" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3608"><NavLink to="/prices">Pricing</NavLink>
                            <ul className="sub-menu">
	                            {/* <li id="menu-item-3615" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3615"><NavLink href="product/traditional-package/index.html">Traditional Package</NavLink></li>
	                            <li id="menu-item-3614" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3614"><NavLink href="product-calendar/complete-package/index.html">Complete Package</NavLink></li>
	                            <li id="menu-item-3613" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3613"><NavLink href="product-calendar/luxury-package/index.html">Luxury Package</NavLink></li>
	                            <li id="menu-item-3612" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3612"><NavLink href="my-bookings/index.html">My Bookings</NavLink></li>
	                            <li id="menu-item-3610" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3610"><NavLink href="login/index.html">Login</NavLink></li>
	                            <li id="menu-item-3609" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3609"><NavLink href="register/index.html">Register</NavLink></li>
	                            <li id="menu-item-3616" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3616"><NavLink href="faq/index.html">FAQ</NavLink></li> */}
                            </ul>
                        </li>
                        <li id="menu-item-3099" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3099"><NavLink to="/beauty-gallery">Gallery</NavLink></li>
                        <li id="menu-item-3607" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3607"><NavLink to="/contact-us">Contacts</NavLink></li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="dropdown">
                            {/* <NavLink href="cart/index.html" className="dropdown-toggle cart-link" >
                            <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                            </NavLink> */}
                            <div className="dropdown-menu cart-preview">
                                <span className="cart-notice">You have 0 items in your cart *</span>
                                    {/* <NavLink href="cart/index.html" className="cart-view">View Cart</NavLink>
                                    <NavLink href="checkout/index.html" className="cart-checkout">Process Checkout</NavLink> */}
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;