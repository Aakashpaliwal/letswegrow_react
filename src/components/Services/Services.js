import React from "react";
import "./service.css";

export default class Services extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{" "}
				<div className="site-section" id="services-section">
					<div className="container">
						<div className="row ">
							<div className="col-12 mb-5 position-relative">
								<h2 className="section-title text-center mb-5">
									Services
								</h2>
							</div>

							<div
								className="col-md-6 mb-4"
								data-aos="fade-up"
								data-aos-delay=""
							>
								<div className="service d-flex h-100">
									<div className="svg-icon">
										<img
											src={require("../images/flaticon/svg/002-travel-1.svg")}
											alt="Image"
											className="img-fluid"
										/>
									</div>
									<div className="service-about">
										<h3>Content Marketing</h3>
										<p>
											Far far away, behind the word
											mountains, far from the countries
											Vokalia and Consonantia, there live
											the blind texts.
										</p>
									</div>
								</div>
							</div>

							<div
								className="col-md-6 mb-4"
								data-aos="fade-up"
								data-aos-delay="100"
							>
								<div className="service d-flex h-100">
									<div className="svg-icon">
										<img
											src={require("../images/flaticon/svg/001-travel.svg")}
											alt="Image"
											className="img-fluid"
										/>
									</div>
									<div className="service-about">
										<h3>Social Media Marketing</h3>
										<p>
											Far far away, behind the word
											mountains, far from the countries
											Vokalia and Consonantia, there live
											the blind texts.
										</p>
									</div>
								</div>
							</div>

							<div
								className="col-md-6 mb-4"
								data-aos="fade-up"
								data-aos-delay=""
							>
								<div className="service d-flex h-100">
									<div className="svg-icon">
										<img
											src={require("../images/flaticon/svg/003-travel-2.svg")}
											alt="Image"
											className="img-fluid"
										/>
									</div>
									<div className="service-about">
										<h3>Brand &amp; Logo Design</h3>
										<p>
											Far far away, behind the word
											mountains, far from the countries
											Vokalia and Consonantia, there live
											the blind texts.
										</p>
									</div>
								</div>
							</div>

							<div
								className="col-md-6 mb-4"
								data-aos="fade-up"
								data-aos-delay="100"
							>
								<div className="service d-flex h-100">
									<div className="svg-icon">
										<img
											src={require("../images/flaticon/svg/004-travel-3.svg")}
											alt="Image"
											className="img-fluid"
										/>
									</div>
									<div className="service-about">
										<h3>Social Media Advertising</h3>
										<p>
											Far far away, behind the word
											mountains, far from the countries
											Vokalia and Consonantia, there live
											the blind texts.
										</p>
									</div>
								</div>
							</div>

							<div
								className="col-md-6 mb-4"
								data-aos="fade-up"
								data-aos-delay=""
							>
								<div className="service d-flex h-100">
									<div className="svg-icon">
										<img
											src={require("../images/flaticon/svg/005-travel-4.svg")}
											alt="Image"
											className="img-fluid"
										/>
									</div>
									<div className="service-about">
										<h3>Social Media Advertising</h3>
										<p>
											Far far away, behind the word
											mountains, far from the countries
											Vokalia and Consonantia, there live
											the blind texts.
										</p>
									</div>
								</div>
							</div>

							<div
								className="col-md-6 mb-4"
								data-aos="fade-up"
								data-aos-delay="100"
							>
								<div className="service d-flex h-100">
									<div className="svg-icon">
										<img
											src={require("../images/flaticon/svg/006-food.svg")}
											alt="Image"
											className="img-fluid"
										/>
									</div>
									<div className="service-about">
										<h3>Web Design / Development</h3>
										<p>
											Far far away, behind the word
											mountains, far from the countries
											Vokalia and Consonantia, there live
											the blind texts.
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
