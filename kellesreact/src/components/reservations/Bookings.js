import React, {Component} from 'react';
import BookingInfo from './BookingInfo';
import Calendars from './Calendar';
import './Booking.css';

class Bookings extends Component{
    state = {
      selectedDay:null
    }

    updateState = (date) => {
      this.setState({
        ...this.state,
      selectedDay: date
    })
    }

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
                    <Calendars updateState={this.updateState}/>
                    <BookingInfo selectedDay={this.state.selectedDay}/>
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