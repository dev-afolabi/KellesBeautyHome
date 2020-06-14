import React, {Component} from 'react';

class MobileNav extends Component
{
    render(){
        return (
            <nav id="site-navigation-mobile" className="navbar mobile-navigation">
                <ul className="nav navbar-nav">
                    <li className="dropdown">
                        <a href="cart/index.html" className="dropdown-toggle cart-link" >
                        <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                        </a>
                                        
                    </li>
                    <li>
                        <button type="button" className="navbar-toggle offcanvas-toggle" data-toggle="offcanvas" data-target="#js-bootstrap-offcanvas">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </li>
                </ul>
                <div className="navbar-offcanvas navbar-offcanvas-touch navbar-offcanvas-right" id="js-bootstrap-offcanvas">
                    <button type="button" className="offcanvas-toggle closecanvas" data-toggle="offcanvas" data-target="#js-bootstrap-offcanvas">
                        <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                    </button>
                    <ul id="menu-main-menu-1" className="nav navbar-nav">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3100">
                            <a href="about-us/index.html">About</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3102">
                            <a href="blog/index.html">News</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3608">
                            <a href="pricing-extended/index.html">Pricing</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3099">
                            <a href="beauty-gallery/index.html">Gallery</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3607">
                            <a href="contact-us/index.html">Contacts</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default MobileNav;