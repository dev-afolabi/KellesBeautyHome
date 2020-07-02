import React, { useEffect } from "react";
import {Link} from 'react-router-dom'
import Services from "./Services";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import {loadPackages, loadReservations} from "../../store/thunks/thunk"
import RegularContent from "./RegularContent";
import Events from "../Events/Events";
import { connect } from 'react-redux';

const Home = ({ packages, startLoadingPackages, isLoadingPackage}) => {
useEffect(() => {
	startLoadingPackages();
},[]);
  return (
    <div>
		<div id="content" className="site-content content-wrapper page-content">
			<div id="post-2446" className="post-2446 page type-page status-publish hentry">
				<div className="page-content-body">
					<div id="pl-2446" className="panel-layout">
						<div id="pg-2446-0" className="panel-grid panel-no-style">
							<div id="pgc-2446-0-0" className="panel-grid-cell">
								<div id="panel-2446-0-0-0" className="so-panel widget_mina_slider_widget panel-first-child" data-index="0">
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
																	<Link to="/book-reservation">MAKE RESERVATION</Link>
																</div>
															</div>
														</div>
														<div className="item ">
															<img src="wp-content/uploads/2017/03/slider2.jpg" alt=""></img>
															<div className="carousel-caption">
																<div className="carousel-caption-content">
																	<h2><span>Find and Book</span> <strong> COMPLETE PACKAGE</strong>ANYWHERE, ANYTIME</h2>
																	<Link to="/book-reservation">MAKE RESERVATION</Link>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</section>
									</div>
								</div>
								<Services />
								<HowItWorks />								 
								<Pricing packages={packages} isLoadingPackage={isLoadingPackage}/>
								<RegularContent/>
								<Events />

							</div>
						</div>
					</div>{" "}
				</div>
			</div>
		</div>
		<div className="clearfix"></div>
    </div>
  );
};

const mapStateToProps = (state) => {
	return {
		packages: state.package,
		reservations: state.reservation.reservations,
		isLoadingPackage: state.isLoadingPackages
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		startLoadingPackages: () => dispatch(loadPackages()),
		startLoadingReservations: () => dispatch(loadReservations()),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
