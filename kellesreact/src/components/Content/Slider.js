import React from 'react';

const Slider = () => {
    return (
        <div className="so-widget-mina_slider_widget so-widget-mina_slider_widget-default-d75171398898">
			<section className="hero">
				<div className="hero-content">
					<div id="main-slider" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#main-slider" data-slide-to="0" className="active"></li>
							<li data-target="#main-slider" data-slide-to="1" className=""></li>
						</ol>
						<div className="carousel-inner" role="listbox">
							<div className="item active">
								<img src="images/second_test.jpg" alt=""></img>
								<div className="carousel-caption">
									<div className="carousel-caption-content">
										<h2><span>Find and Book</span><strong> LUXURY PACKAGE</strong>ANYWHERE, ANYTIME</h2>
										<a href="product-calendar/luxury-package/index.html">MAKE RESERVATION</a>
									</div>
								</div>
							</div>
							<div className="item ">
								<img src="wp-content/uploads/2017/03/slider2.jpg" alt=""></img>
								<div className="carousel-caption">
									<div className="carousel-caption-content">
										<h2><span>Find and Book</span> <strong> COMPLETE PACKAGE</strong>ANYWHERE, ANYTIME</h2>
										<a href="product-calendar/complete-package/index.html">MAKE RESERVATION</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
    )
}

export default Slider