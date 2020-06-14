import React from 'react';

const Footer = () => 
{
    return (
        <div>
            <footer id="colophon" className="site-footer clearfix">
                <div className="footer-info">
                    <div className="container">
                        <div className="row">
                            <div className="footer-logo">
                                <a className="img-responsive"  href='index.html' title='Mina' rel='home'><img src='wp-content/themes/mina/images/logo-dark.svg' alt='Mina'></img></a>
                            </div>
                            <div className="footer-menu">
                                <div className="footer-links">
                                    <ul>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3100"><a href="about-us/index.html">About</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3102"><a href="blog/index.html">News</a></li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3702"><a href="product-category/cosmetics/page/2/index.html">Cosmetics</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3608"><a href="pricing-extended/index.html">Pricing</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3099"><a href="beauty-gallery/index.html">Gallery</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3607"><a href="contact-us/index.html">Contacts</a></li>
                                    </ul>
                                </div>
                                <div className="footer-links">
                                    <ul className="social">
                                        <li className="facebook"><a href="home">
                                            <i className="fa fa-facebook hvr-wobble-top fa-2x" aria-hidden="true"></i>
                                            </a>
                                        </li>     
                                        <li className="twitter"><a href="home">
                                            <i className="fa fa-twitter hvr-wobble-top fa-2x" aria-hidden="true"></i>
                                            </a>
                                        </li>                                                                
                                        <li><a href="home">
                                            <i className="fa fa-linkedin hvr-wobble-top fa-2x" aria-hidden="true"></i>
                                            </a>
                                        </li> 
                                        <li><a href="home">
                                            <i className="fa fa-instagram fa-2x hvr-wobble-top" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li><a target="blank" title="Create website" href="http://kenzap.com/">
                                            <i className="fa fa-cloud hvr-wobble-top fa-2x" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>         
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        <div className="row">
                            <p>Copyright 2015-2019 | ALL RIGHTS RESERVED &copy;</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;