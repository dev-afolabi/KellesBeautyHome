import React, { Component } from "react";
import moment from "moment";

class Calendars extends Component {
  state = {
    dateObject: moment(),
    allMonths: moment.months(),
  };

  weekdayShort = moment.weekdaysShort();

  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject).startOf("month").format("d");
    return firstDay;
  };

  currentDay = () => {
    return this.state.dateObject.format("D");
  };

  month = () => {
    return this.state.dateObject.format("MMMM");
  };

  year = () => {
    return this.state.dateObject.format("Y");
  };

  onPrev = () => {
    let current = "month";
    this.setState({
      dateObject: this.state.dateObject.subtract(1, current),
    });
  };

  onNext = () => {
    let current = "month";
    this.setState({
      dateObject: this.state.dateObject.add(1, current),
    });
  };

  onDayClick = (e,d) => {
      this.props.updateState(this.state.dateObject.date(d))
  }


  render() {
    let weekdayShortNames = this.weekdayShort.map((day) => {
      return <th key={day}>{day}</th>;
    });

    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td key={i} className="inactive"></td>);
    }

    let daysInMonth = [];
    for (let d = 1; d <= this.state.dateObject.daysInMonth(); d++) {
      let currentDay = d === this.currentDay() ? "selected" : "";
      daysInMonth.push(
        <td key={d} className={`${currentDay}`}>
        <button onClick={e => {this.onDayClick(e,d);}}>
            {d}
        </button>
        </td>
      );
    }

    var totalSlots = [...blanks, ...daysInMonth];

    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    let daysinmonth = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>;
    });

    return (
    <div className="col-md-8">
        <div className="booking-calendar">
            <h2>Select Date and Time</h2>
            <div className="calendar-info">
                <div className="calendar">
                    <div className="tab-content">
                        <div className="tab-pane active clearfix" id="09_2019">
                            <h3 className="month-title">
                                <span  onClick={this.onPrev}>
                                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                                </span>
                                        {this.month()} {this.year()}
                                <span onClick={this.onNext}>
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                </span>
                            </h3>
                            <table>
                                <thead className="calendar-header">
                                    <tr>{weekdayShortNames}</tr>
                                </thead>
                                <tbody className="calendar-body">{daysinmonth}</tbody>
                            </table>
                            <div className="calendar-footer">
                                <ul>
                                    <li>
                                        <button className="time-available ">08:00 AM</button>
                                    </li>
                                    <li>
                                        <button className="time-available ">09:00 AM</button>
                                    </li>
                                    <li>
                                        <button className="not-available ">10:00 AM</button>
                                    </li>
                                    <li>
                                        <button className="time-available ">01:15 PM</button>
                                    </li>
                                    <li>
                                        <button className="time-available ">02:50 PM</button>
                                    </li>
                                    <li>
                                        <button className="time-available ">04:00 PM</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="calendar-label">
                                <ul>
                                <li className="available">
                                    <span></span> Available
                                </li>
                                <li className="not-available">
                                    <span></span> Not Available
                                </li>
                                <li className="selected">
                                    <span></span> Selected
                                </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Calendars;
