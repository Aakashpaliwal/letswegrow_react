import React from "react";
import "./home.css";
export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div
					className="site-blocks-cover overlay bg-light custom_bg_photo"
					// style={{"backgroundImage: url('images/hero_bg_1.jpg')"}}
					// style={{ backgroundImage: "url(../images/hero_bg_1.jpg)" }}
					id="home-section"
				>
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-12 text-center align-self-center text-intro">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										<h1
											className="text-white"
											data-aos="fade-up"
											data-aos-delay=""
										>
											We Are Digital Services
										</h1>
										<p
											className="lead text-white"
											data-aos="fade-up"
											data-aos-delay="100"
										>
											Lorem ipsum dolor sit amet,
											consectetur adipisicing elit.
											Dignissimos magnam maxime voluptates
											libero, nobis impedit aut corrupti
											sunt possimus.
										</p>
										<p
											data-aos="fade-up"
											data-aos-delay="200"
										>
											<a
												href="#services-section"
												className="btn smoothscroll btn-primary"
											>
												Our Services
											</a>
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
