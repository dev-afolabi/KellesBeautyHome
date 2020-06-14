import React, {Component} from 'react'

class Navbar extends Component
{
    render(){
        return (
            <nav id="site-navigation" className="navbar">
                <div className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul id="menu-main-menu" className="nav navbar-nav navbar-primary sf-menu"><li id="menu-item-3100" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3100"><a href="about-us/index.html">About</a></li>
                        <li id="menu-item-3102" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3102"><a href="blog/index.html">News</a></li>
                        <li id="menu-item-3608" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3608"><a href="pricing-extended/index.html">Pricing</a>
                            <ul className="sub-menu">
	                            <li id="menu-item-3615" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3615"><a href="product/traditional-package/index.html">Traditional Package</a></li>
	                            <li id="menu-item-3614" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3614"><a href="product-calendar/complete-package/index.html">Complete Package</a></li>
	                            <li id="menu-item-3613" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3613"><a href="product-calendar/luxury-package/index.html">Luxury Package</a></li>
	                            <li id="menu-item-3612" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3612"><a href="my-bookings/index.html">My Bookings</a></li>
	                            <li id="menu-item-3610" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3610"><a href="login/index.html">Login</a></li>
	                            <li id="menu-item-3609" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3609"><a href="register/index.html">Register</a></li>
	                            <li id="menu-item-3616" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3616"><a href="faq/index.html">FAQ</a></li>
                            </ul>
                        </li>
                        <li id="menu-item-3099" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3099"><a href="beauty-gallery/index.html">Gallery</a></li>
                        <li id="menu-item-3607" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3607"><a href="contact-us/index.html">Contacts</a></li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="dropdown">
                            <a href="cart/index.html" className="dropdown-toggle cart-link" >
                            <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                            </a>
                            <div className="dropdown-menu cart-preview">
                                <span className="cart-notice">You have 0 items in your cart *</span>
                                    <a href="cart/index.html" className="cart-view">View Cart</a>
                                    <a href="checkout/index.html" className="cart-checkout">Process Checkout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;