import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {loadPackages} from "../../store/thunks/thunk"

const StartBooking = ({packages, startLoadingPackages}) => {
    useEffect(() => {
        startLoadingPackages();
    },[]);
    
    let allPackages =  packages && packages.map((pack) => {
        return <option key={pack.packageid} value="Complete">{pack.name}</option>;
    });
    return (
        <div>
        <section className="booking-form">
            <div className="section-header">
            <div className="container">
                <div className="row">
                <img
                    src="../../wp-content/themes/mina/images/booking-form-header-img.png"
                    alt=""
                />
                <h1>Booking Information</h1>
                </div>
            </div>
            </div>
            <div className="section-content">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="booking-info">
                            <h2>Customer Information</h2>
                            <form method="post" action="#">
                                <div className="um-row _um_row_1 " style={{margin: "0 0 30px 0"}}>
                                    <div className="um-col-1">
                                        <div className="um-field um-field-first_name um-field-text um-field-type_text" data-key="first_name">
                                            <div className="um-field-label">
                                                <label htmlFor="first_name-2881">Full Name</label>
                                                <div className="um-clear"></div>
                                            </div>
                                            <div className="um-field-area">
                                                <input  autoComplete="off" className="um-form-field valid " type="text" name="first_name-2881" id="first_name-2881" placeholder="" data-validate="" data-key="first_name" />
                                            </div>
                                        </div>
                                        <div className="um-field um-field-user_email um-field-text um-field-type_text" data-key="user_email">
                                            <div className="um-field-label">
                                                <label htmlFor="address">Address</label>
                                                <div className="um-clear"></div>
                                            </div>
                                            <div className="um-field-area">
                                                <input  autoComplete="off" className="um-form-field valid " type="text" name="user_email-2881" id="address" placeholder="" data-validate="unique_email" data-key="user_email" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <label htmlFor="package">Select Package type</label>
                            <select name="package" id="package">
                                {allPackages}
                            </select>
                            
                            
                            {/* <p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam quis nostrud exerci tation.</p></p> */}
                        </div>
                        <Link to="/make-reservation">
                        <div className="booking-schedule">
                            <h3>Reservation</h3>
                            <p>Please select date</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <div className="clearfix"></div>
        </div>
        );
}

const mapStateToProps = (state) => {
	return {
		packages: state.package,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		startLoadingPackages: () => dispatch(loadPackages()),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(StartBooking);