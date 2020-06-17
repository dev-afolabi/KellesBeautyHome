import React, {Component} from 'react'
import EventCard from './EventCard'

class Events extends Component
{
    render(){
        return(
            <div id="panel-2446-0-0-9" className="so-panel widget_mina_news_widget" data-index="9">
                <div className="so-widget-mina_news_widget so-widget-mina_news_widget-default-d75171398898">
                    <section className="latest-news">
                        <div className="section-header clearfix">
                          	<span>Keep in Touch</span>
                          	<h2><strong>Our Latest</strong> News</h2>
                            <div className="section-break"></div>
                        </div>
                        <div className="section-content">
                            <div className="container">
                                <div className="row">
                                    <div className="row">
                                        <EventCard />
                                        <EventCard />
                                        <EventCard />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Events