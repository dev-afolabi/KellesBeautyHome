import React from 'react';
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
import MobileNav from './MobileNav';

const Header = () => {
    return (
            <header id="masthead" className="site-header">
                <div className="container">
                    <div className="row">
                        <div className="site-branding col-sm-2">
                            <h1 className="site-title">
                                <Link to='/' title='Mina' rel='home' className="logo-block">
                                    <img className="original_size" src='wp-content/uploads/2017/09/logo-white.svg' alt='Kelles'></img>
                                </Link>
                            </h1>
                        </div>
 
                        <div className="col-sm-10">
                            <Navbar />
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </header>
    );
}

export default Header;