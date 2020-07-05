import React from "react";
import "./contact.css";

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{" "}
				<section className="site-section" id="contact-section">
					<div className="container">
						<div className="row">
							<div className="col-12 mb-5 position-relative">
								<h2 className="section-title text-center mb-5">
									Contact Form
								</h2>
							</div>
						</div>
						<div className="row justify-content-between">
							<div className="col-lg-6">
								<form action="#" className="form">
									<div className="row mb-4">
										<div className="form-group col-6">
											<input
												type="text"
												className="form-control"
												placeholder="First name"
											/>
										</div>
										<div className="form-group col-6">
											<input
												type="text"
												className="form-control"
												placeholder="Full name"
											/>
										</div>
									</div>

									<div className="row mb-4">
										<div className="form-group col-12">
											<input
												type="email"
												className="form-control"
												placeholder="Email address"
											/>
										</div>
									</div>

									<div className="row mb-4">
										<div className="form-group col-12">
											<input
												type="text"
												className="form-control"
												placeholder="Subject of the message"
											/>
										</div>
									</div>

									<div className="row mb-4">
										<div className="form-group col-12">
											<textarea
												name=""
												id=""
												cols="30"
												rows="10"
												className="form-control"
												placeholder="Type your message here.."
											></textarea>
										</div>
									</div>

									<div className="row">
										<div className="col-md-6">
											<input
												type="submit"
												className="btn btn-primary"
												value="Send Message"
											/>
										</div>
									</div>
								</form>
							</div>
							<div className="col-lg-5">
								<h3>London</h3>
								<ul className="list-unstyled mb-5">
									<li className="mb-3">
										<strong className="d-block mb-1">
											Address
										</strong>
										<span>
											203 Fake St. Mountain View, San
											Francisco, California, USA
										</span>
									</li>
									<li className="mb-3">
										<strong className="d-block mb-1">
											Phone
										</strong>
										<span>+1 232 3235 324</span>
									</li>
									<li className="mb-3">
										<strong className="d-block mb-1">
											Email
										</strong>
										<span>youremail@domain.com</span>
									</li>
								</ul>

								<h3>New York</h3>
								<ul className="list-unstyled">
									<li className="mb-3">
										<strong className="d-block mb-1">
											Address
										</strong>
										<span>
											203 Fake St. Mountain View, San
											Francisco, California, USA
										</span>
									</li>
									<li className="mb-3">
										<strong className="d-block mb-1">
											Phone
										</strong>
										<span>+1 232 3235 324</span>
									</li>
									<li className="mb-3">
										<strong className="d-block mb-1">
											Email
										</strong>
										<span>youremail@domain.com</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
