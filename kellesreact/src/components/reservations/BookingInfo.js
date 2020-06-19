import React from 'react'

const BookingInfo = () => {
    return (
        <div className="col-md-4">
            <div className="booking-info">
                <h2>Order Summary</h2>
                <h3>Compet Package <strong><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">&#36;</span>350.00</span></strong></h3>
                <p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam quis nostrud exerci tation.</p></p>
                <div className="row">
                    <div className="col-lg-6">
                        <ul>
                            <li>
                                <i className="fa fa-check" aria-hidden="true"></i>
                                Air Brush
                            </li>
                            <li>
                                <i className="fa fa-check" aria-hidden="true"></i>
                                Retouch
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul>
                            <li>
                                <i className="fa fa-check" aria-hidden="true"></i>
                                Hairstyling
                            </li>
                            <li>
                                <i className="fa fa-check" aria-hidden="true"></i>
                                Lashes
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="booking-schedule">
                <h3>Reservation</h3>
                <p>Please select date</p>
            </div>
            <a id="calendar_confirm" rel="nofollow" href="index850d.html?add-to-cart=3595" data-quantity="1" data-product_id="3595" data-product_sku="" data-cart="http://mina.kenzap.com/cart/" data-dof="Thursday" data-time="a" data-timestamp="45345534" className="booking-btn  hidden product_type_simple add_to_cart_button ajax_add_to_cart">NEXT</a>
        </div>
    )
}

export default BookingInfo