import React from "react";
import Slider from "./Slider";
import Services from "./Services";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import RegularContent from "./RegularContent";
import Events from "../Events/Events";

const Home = () => {
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
								<Pricing />
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
export default Home;
