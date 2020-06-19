import React from 'react'
import Package from './Package'

const Pricing = ({packages}) => {
    return (
        <div id="panel-2446-0-0-3" className="so-panel widget_mina_pricing_classNameic_widget" data-index="3">
            <div className="so-widget-mina_pricing_classNameic_widget so-widget-mina_pricing_classNameic_widget-default-d75171398898">
                <section className="package">
                    <div className="container">
                        <div className="row">
                            <div className="section-header clearfix">
                                <span>Choose Our Makeup Offer</span>
                                <h2>
                                    <strong>Special Price</strong> Package
                                </h2>
                                <div className="section-break"></div>
                            </div>
                            <div className="section-content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh
                                    <br />
                                    euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat. Ut wisi enim ad minim
                                    <br />
                                    veniam, quis nostrud exerci tation.
                                </p>
                         
                              { packages && packages.map(packaged => {
                                  return (
                                      <Package package={packaged} key={packaged.packageid}/>
                                  )
                              })}
                       
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default Pricing