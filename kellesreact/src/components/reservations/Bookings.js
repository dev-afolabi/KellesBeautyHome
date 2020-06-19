import React, {Component} from 'react';
import BookingInfo from './BookingInfo';
import Calendars from './Calendar';
import './Booking.css'
//import Calendar from 'react-calendar';

class Bookings extends Component{
    render(){
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
                    <h1>Booking Date and Time</h1>
                  </div>
                </div>
              </div>
              <div className="section-content">
                <div className="container">
                  <div className="row">
                    <Calendars />
                    <BookingInfo />
                  </div>
                </div>
              </div>
            </section>

            <div className="clearfix"></div>
          </div>
        );
    }
}

export default Bookings