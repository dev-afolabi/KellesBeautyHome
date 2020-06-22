import React, { useEffect } from "react";
import Slider from "./Slider";
import Services from "./Services";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import {loadPackages, loadReservations} from "../../store/thunks/thunk"
import RegularContent from "./RegularContent";
import Events from "../Events/Events";
import { connect } from 'react-redux';

const Home = ({ packages, startLoadingPackages, startLoadingReservations}) => {
useEffect(() => {
	startLoadingPackages();
	startLoadingReservations();
});
  return (
    <div>
		<div id="content" className="site-content content-wrapper page-content">
			<div id="post-2446" className="post-2446 page type-page status-publish hentry">
				<div className="page-content-body">
					<div id="pl-2446" className="panel-layout">
						<div id="pg-2446-0" className="panel-grid panel-no-style">
							<div id="pgc-2446-0-0" className="panel-grid-cell">
								<Slider />
								<Services />
								<HowItWorks />
								<Pricing packages={packages}/>
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
		packages: state.package.packages,
		reservations: state.reservation.reservations
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		startLoadingPackages: () => dispatch(loadPackages()),
		startLoadingReservations: () => dispatch(loadReservations()),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
