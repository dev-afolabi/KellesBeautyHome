import React, { Component } from 'react';
import moment from 'moment';

class Calendars extends Component{

    state = {
        dateObject: moment(),
        allMonths: moment.months()
    }

    weekdayShort = moment.weekdaysShort();

    firstDayOfMonth = () => {
        let dateObject = this.state.dateObject;
        let firstDay = moment(dateObject).startOf("month").format("d")
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
    }

    onPrev = () =>{
        let curr = "month";
        this.setState({
            dateObject: this.state.dateObject.subtract(1,curr)
        });
    };

    onPrev = () =>{
        let curr = "month";
        this.setState({
            dateObject: this.state.dateObject.add(1,curr)
        });
    }

    monthList = props => {}

    render(){
        let weekdayShortName = this.weekdayShort.map(day => {
            return (
                    <li key={day}>{day}</li>     
            )
        });

    

        let blanks = [];
        for(let i = 0; i<this.firstDayOfMonth(); i++){
            blanks.push(
            <li className="inactive"></li>
            );
        };

        let daysInMonth = [];
        for(let d = 1; d<=this.state.dateObject.daysInMonth(); d++){
            let currentDay = d == this.currentDay() ? "selected" : ""
            daysInMonth.push(
                <li key={d} >
                    <button className={`${currentDay}`}>{d}</button>
                </li>
            )
        }
        var totalSlots = [...blanks, ...daysInMonth];
  
    return (
        <div className="col-md-8">
        <div className="booking-calendar">
                        <h2>Select Date and Time</h2>
                        <div className="calendar-info">
                            <div className="calendar">
                                <ul className="nav nav-month">
                                    <li className="">
                                        <a href="#08_2019" data-toggle="tab">August 2019</a>
                                    </li>
                                    <li className="active">
                                        <a href="#09_2019" data-toggle="tab">September 2019</a>
                                    </li>
                                    <li className="">
                                        <a href="#10_2019" data-toggle="tab">October 2019</a>
                                    </li>      
                                </ul>
                                <div className="tab-content">
                                        <div className="tab-pane active clearfix" id="09_2019">
                                            <h3 className="month-title"> 
                                                <a className="month-prev" onClick={this.onPrev}>
                                                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                </a> 
                                                {this.month()} {this.year()}
                                                <a className="month-next" onClick={this.onNext}>
                                                    <i className="fa fa-angle-right" aria-hidden="true" onClick={this.onNext}></i>
                                                </a>
                                            </h3>
                                            <div className="calendar-header">
                                                <ul>
                                                    {weekdayShortName}
                                                </ul>
                                            </div>
                                            <div className="calendar-body">
                                                <ul>
                                                    {totalSlots}
                                                </ul>
                                            </div>















                                            <div className="calendar-footer">
                                                <ul>
                                                                        </ul>
                                            </div>

            
                                            <div className="calendar-footer">
                                                <ul>
                                                    
                                                        <li><button className="time-available ">08:00 AM</button></li>

                                                    
                                                        <li><button className="time-available ">09:00 AM</button></li>

                                                    
                                                        <li><button className="not-available ">10:00 AM</button></li>

                                                    
                                                        <li><button className="time-available ">01:15 PM</button></li>

                                                    
                                                        <li><button className="time-available ">02:50 PM</button></li>

                                                    
                                                        <li><button className="time-available ">04:00 PM</button></li>

                                                    
                                                </ul>
                                            </div>
                                            <div className="calendar-label">
                                                <ul>
                                                    <li className="available"><span></span> Available</li>
                                                    <li className="not-available"><span></span> Not Available</li>
                                                    <li className="selected"><span></span> Selected</li>
                                                </ul>
                                            </div>
                                        </div>




































































                                        
                                        <div className="tab-pane  clearfix" id="09_2019">
                                            <h3 className="month-title"> 
                                                <a href="#" className="month-prev">
                                                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                </a> 
                                                September 2019                                                <a href="#" className="month-next">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                </a>
                                            </h3>
                                            <div className="calendar-header"><ul><li>M</li><li>T</li><li>W</li><li>T </li><li>F</li><li>S</li><li>S </li></ul></div><div className="calendar-body"><ul><li className="inactive"> </li><li className="inactive"> </li><li className="inactive"> </li><li className="inactive"> </li><li className="inactive"> </li><li className="inactive"> </li><li id="calendar_09_2019_1_9_2019"><button data-timestamp="1567296000" data-dof="Sunday" data-date="September 1, 2019" className="calclick not-available">1</button></li><li id="calendar_09_2019_2_9_2019"><button data-timestamp="1567382400" data-dof="Monday" data-date="September 2, 2019" className="calclick available">2</button></li><li id="calendar_09_2019_3_9_2019"><button data-timestamp="1567468800" data-dof="Tuesday" data-date="September 3, 2019" className="calclick available">3</button></li><li id="calendar_09_2019_4_9_2019"><button data-timestamp="1567555200" data-dof="Wednesday" data-date="September 4, 2019" className="calclick available">4</button></li><li id="calendar_09_2019_5_9_2019"><button data-timestamp="1567641600" data-dof="Thursday" data-date="September 5, 2019" className="calclick available">5</button></li><li id="calendar_09_2019_6_9_2019"><button data-timestamp="1567728000" data-dof="Friday" data-date="September 6, 2019" className="calclick available">6</button></li><li id="calendar_09_2019_7_9_2019"><button data-timestamp="1567814400" data-dof="Saturday" data-date="September 7, 2019" className="calclick available">7</button></li><li id="calendar_09_2019_8_9_2019"><button data-timestamp="1567900800" data-dof="Sunday" data-date="September 8, 2019" className="calclick not-available">8</button></li><li id="calendar_09_2019_9_9_2019"><button data-timestamp="1567987200" data-dof="Monday" data-date="September 9, 2019" className="calclick available">9</button></li><li id="calendar_09_2019_10_9_2019"><button data-timestamp="1568073600" data-dof="Tuesday" data-date="September 10, 2019" className="calclick available">10</button></li><li id="calendar_09_2019_11_9_2019"><button data-timestamp="1568160000" data-dof="Wednesday" data-date="September 11, 2019" className="calclick available">11</button></li><li id="calendar_09_2019_12_9_2019"><button data-timestamp="1568246400" data-dof="Thursday" data-date="September 12, 2019" className="calclick available">12</button></li><li id="calendar_09_2019_13_9_2019"><button data-timestamp="1568332800" data-dof="Friday" data-date="September 13, 2019" className="calclick available">13</button></li><li id="calendar_09_2019_14_9_2019"><button data-timestamp="1568419200" data-dof="Saturday" data-date="September 14, 2019" className="calclick available">14</button></li><li id="calendar_09_2019_15_9_2019"><button data-timestamp="1568505600" data-dof="Sunday" data-date="September 15, 2019" className="calclick not-available">15</button></li><li id="calendar_09_2019_16_9_2019"><button data-timestamp="1568592000" data-dof="Monday" data-date="September 16, 2019" className="calclick available">16</button></li><li id="calendar_09_2019_17_9_2019"><button data-timestamp="1568678400" data-dof="Tuesday" data-date="September 17, 2019" className="calclick available">17</button></li><li id="calendar_09_2019_18_9_2019"><button data-timestamp="1568764800" data-dof="Wednesday" data-date="September 18, 2019" className="calclick available">18</button></li><li id="calendar_09_2019_19_9_2019"><button data-timestamp="1568851200" data-dof="Thursday" data-date="September 19, 2019" className="calclick available">19</button></li><li id="calendar_09_2019_20_9_2019"><button data-timestamp="1568937600" data-dof="Friday" data-date="September 20, 2019" className="calclick available">20</button></li><li id="calendar_09_2019_21_9_2019"><button data-timestamp="1569024000" data-dof="Saturday" data-date="September 21, 2019" className="calclick available">21</button></li><li id="calendar_09_2019_22_9_2019"><button data-timestamp="1569110400" data-dof="Sunday" data-date="September 22, 2019" className="calclick not-available">22</button></li><li id="calendar_09_2019_23_9_2019"><button data-timestamp="1569196800" data-dof="Monday" data-date="September 23, 2019" className="calclick available">23</button></li><li id="calendar_09_2019_24_9_2019"><button data-timestamp="1569283200" data-dof="Tuesday" data-date="September 24, 2019" className="calclick available">24</button></li><li id="calendar_09_2019_25_9_2019"><button data-timestamp="1569369600" data-dof="Wednesday" data-date="September 25, 2019" className="calclick available">25</button></li><li id="calendar_09_2019_26_9_2019"><button data-timestamp="1569456000" data-dof="Thursday" data-date="September 26, 2019" className="calclick available">26</button></li><li id="calendar_09_2019_27_9_2019"><button data-timestamp="1569542400" data-dof="Friday" data-date="September 27, 2019" className="calclick available">27</button></li><li id="calendar_09_2019_28_9_2019"><button data-timestamp="1569628800" data-dof="Saturday" data-date="September 28, 2019" className="calclick available">28</button></li><li id="calendar_09_2019_29_9_2019"><button data-timestamp="1569715200" data-dof="Sunday" data-date="September 29, 2019" className="calclick not-available">29</button></li><li id="calendar_09_2019_30_9_2019"><button data-timestamp="1569801600" data-dof="Monday" data-date="September 30, 2019" className="calclick available">30</button></li><li className="inactive"> </li><li className="inactive"> </li><li className="inactive"> </li><li className="inactive"> </li><li className="inactive"> </li><li className="inactive"> </li></ul></div>
                <div className="calendar-footer">
                    <ul>
                                            </ul>
                </div>

            
                                            <div className="calendar-footer">
                                                <ul>
                                                    
                                                        <li><button className="time-available ">08:00 AM</button></li>

                                                    
                                                        <li><button className="time-available ">09:00 AM</button></li>

                                                    
                                                        <li><button className="not-available ">10:00 AM</button></li>

                                                    
                                                        <li><button className="time-available ">01:15 PM</button></li>

                                                    
                                                        <li><button className="time-available ">02:50 PM</button></li>

                                                    
                                                        <li><button className="time-available ">04:00 PM</button></li>

                                                    
                                                </ul>
                                            </div>
                                            <div className="calendar-label">
                                                <ul>
                                                    <li className="available"><span></span> Available</li>
                                                    <li className="not-available"><span></span> Not Available</li>
                                                    <li className="selected"><span></span> Selected</li>
                                                </ul>
                                            </div>
                                        </div>

                                        
                                        <div className="tab-pane  clearfix" id="10_2019">
                                            <h3 className="month-title"> 
                                                <a href="#" className="month-prev">
                                                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                </a> 
                                                October 2019                                                <a href="#" className="month-next">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                </a>
                                            </h3>
                                            <div className="calendar-header"><ul><li>M</li><li>T</li><li>W</li><li>T </li><li>F</li><li>S</li><li>S </li></ul></div><div className="calendar-body"><ul><li className="inactive"> </li><li id="calendar_10_2019_1_10_2019"><button data-timestamp="1569888000" data-dof="Tuesday" data-date="October 1, 2019" className="calclick available">1</button></li><li id="calendar_10_2019_2_10_2019"><button data-timestamp="1569974400" data-dof="Wednesday" data-date="October 2, 2019" className="calclick available">2</button></li><li id="calendar_10_2019_3_10_2019"><button data-timestamp="1570060800" data-dof="Thursday" data-date="October 3, 2019" className="calclick available">3</button></li><li id="calendar_10_2019_4_10_2019"><button data-timestamp="1570147200" data-dof="Friday" data-date="October 4, 2019" className="calclick available">4</button></li><li id="calendar_10_2019_5_10_2019"><button data-timestamp="1570233600" data-dof="Saturday" data-date="October 5, 2019" className="calclick available">5</button></li><li id="calendar_10_2019_6_10_2019"><button data-timestamp="1570320000" data-dof="Sunday" data-date="October 6, 2019" className="calclick not-available">6</button></li><li id="calendar_10_2019_7_10_2019"><button data-timestamp="1570406400" data-dof="Monday" data-date="October 7, 2019" className="calclick available">7</button></li><li id="calendar_10_2019_8_10_2019"><button data-timestamp="1570492800" data-dof="Tuesday" data-date="October 8, 2019" className="calclick available">8</button></li><li id="calendar_10_2019_9_10_2019"><button data-timestamp="1570579200" data-dof="Wednesday" data-date="October 9, 2019" className="calclick available">9</button></li><li id="calendar_10_2019_10_10_2019"><button data-timestamp="1570665600" data-dof="Thursday" data-date="October 10, 2019" className="calclick available">10</button></li><li id="calendar_10_2019_11_10_2019"><button data-timestamp="1570752000" data-dof="Friday" data-date="October 11, 2019" className="calclick available">11</button></li><li id="calendar_10_2019_12_10_2019"><button data-timestamp="1570838400" data-dof="Saturday" data-date="October 12, 2019" className="calclick available">12</button></li><li id="calendar_10_2019_13_10_2019"><button data-timestamp="1570924800" data-dof="Sunday" data-date="October 13, 2019" className="calclick not-available">13</button></li><li id="calendar_10_2019_14_10_2019"><button data-timestamp="1571011200" data-dof="Monday" data-date="October 14, 2019" className="calclick available">14</button></li><li id="calendar_10_2019_15_10_2019"><button data-timestamp="1571097600" data-dof="Tuesday" data-date="October 15, 2019" className="calclick available">15</button></li><li id="calendar_10_2019_16_10_2019"><button data-timestamp="1571184000" data-dof="Wednesday" data-date="October 16, 2019" className="calclick available">16</button></li><li id="calendar_10_2019_17_10_2019"><button data-timestamp="1571270400" data-dof="Thursday" data-date="October 17, 2019" className="calclick available">17</button></li><li id="calendar_10_2019_18_10_2019"><button data-timestamp="1571356800" data-dof="Friday" data-date="October 18, 2019" className="calclick available">18</button></li><li id="calendar_10_2019_19_10_2019"><button data-timestamp="1571443200" data-dof="Saturday" data-date="October 19, 2019" className="calclick available">19</button></li><li id="calendar_10_2019_20_10_2019"><button data-timestamp="1571529600" data-dof="Sunday" data-date="October 20, 2019" className="calclick not-available">20</button></li><li id="calendar_10_2019_21_10_2019"><button data-timestamp="1571616000" data-dof="Monday" data-date="October 21, 2019" className="calclick available">21</button></li><li id="calendar_10_2019_22_10_2019"><button data-timestamp="1571702400" data-dof="Tuesday" data-date="October 22, 2019" className="calclick available">22</button></li><li id="calendar_10_2019_23_10_2019"><button data-timestamp="1571788800" data-dof="Wednesday" data-date="October 23, 2019" className="calclick available">23</button></li><li id="calendar_10_2019_24_10_2019"><button data-timestamp="1571875200" data-dof="Thursday" data-date="October 24, 2019" className="calclick available">24</button></li><li id="calendar_10_2019_25_10_2019"><button data-timestamp="1571961600" data-dof="Friday" data-date="October 25, 2019" className="calclick available">25</button></li><li id="calendar_10_2019_26_10_2019"><button data-timestamp="1572048000" data-dof="Saturday" data-date="October 26, 2019" className="calclick available">26</button></li><li id="calendar_10_2019_27_10_2019"><button data-timestamp="1572134400" data-dof="Sunday" data-date="October 27, 2019" className="calclick not-available">27</button></li><li id="calendar_10_2019_28_10_2019"><button data-timestamp="1572220800" data-dof="Monday" data-date="October 28, 2019" className="calclick available">28</button></li><li id="calendar_10_2019_29_10_2019"><button data-timestamp="1572307200" data-dof="Tuesday" data-date="October 29, 2019" className="calclick available">29</button></li><li id="calendar_10_2019_30_10_2019"><button data-timestamp="1572393600" data-dof="Wednesday" data-date="October 30, 2019" className="calclick available">30</button></li><li id="calendar_10_2019_31_10_2019"><button data-timestamp="1572480000" data-dof="Thursday" data-date="October 31, 2019" className="calclick available">31</button></li><li className="inactive"> </li><li className="inactive"> </li><li className="inactive"> </li></ul></div>
                <div className="calendar-footer">
                    <ul>
                                            </ul>
                </div>

            
                                            <div className="calendar-footer">
                                                <ul>
                                                    
                                                        <li><button className="time-available ">08:00 AM</button></li>

                                                    
                                                        <li><button className="time-available ">09:00 AM</button></li>

                                                    
                                                        <li><button className="not-available ">10:00 AM</button></li>

                                                    
                                                        <li><button className="time-available ">01:15 PM</button></li>

                                                    
                                                        <li><button className="time-available ">02:50 PM</button></li>

                                                    
                                                        <li><button className="time-available ">04:00 PM</button></li>

                                                    
                                                </ul>
                                            </div>
                                            <div className="calendar-label">
                                                <ul>
                                                    <li className="available"><span></span> Available</li>
                                                    <li className="not-available"><span></span> Not Available</li>
                                                    <li className="selected"><span></span> Selected</li>
                                                </ul>
                                            </div>
                                        </div>

                                        
                                        

                                        
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
    )
    }
}

export default Calendars