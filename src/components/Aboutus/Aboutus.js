import React from "react";

export default class Aboutus extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div>
					<div className="site-section" id="about-section">
						<div className="container">
							<div className="row ">
								<div className="col-12 mb-4 position-relative">
									<h2 className="section-title">About Us</h2>
								</div>
								<div className="about_content_parent">
									<div className="item">
										<p>
											Even the all-powerful Pointing has
											no control about the blind texts it
											is an almost unorthographic life One
											day however a small line of blind
											text by the name of Lorem Ipsum
											decided to leave for the far World
											of Grammar.
										</p>

										<p>
											The Big Oxmox advised her not to do
											so, because there were thousands of
											bad Commas, wild Question Marks and
											devious Semikoli, but the Little
											Blind Text didn’t listen.
										</p>
									</div>
									<div className="item">
										<img
											src={require("../images/about.jpg")}
											alt="Image"
											className="img-fluid"
										/>
									</div>
									<div className="item">
										<p>
											Even the all-powerful Pointing has
											no control about the blind texts it
											is an almost unorthographic life One
											day however a small line of blind
											text by the name of Lorem Ipsum
											decided to leave for the far World
											of Grammar.
										</p>

										<p>
											The Big Oxmox advised her not to do
											so, because there were thousands of
											bad Commas, wild Question Marks and
											devious Semikoli, but the Little
											Blind Text didn’t listen.
										</p>
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
