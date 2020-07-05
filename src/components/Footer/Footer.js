import React from "react";
import "./footer.css";

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{" "}
				<footer className="site-section bg-light footer">
					<div className="container">
						<div className="row mb-5">
							<div className="col-md-3">
								<h3 className="footer-title">Services</h3>
								<p>
									<span className="d-inline-block d-md-block">
										203 Fake St. Mountain View,
									</span>{" "}
									San Francisco, California, USA
								</p>
							</div>
							<div className="col-md-5 mx-auto">
								<div className="row">
									<div className="col-lg-4">
										<h3 className="footer-title">
											Services
										</h3>
										<ul className="list-unstyled">
											<li>
												<a href="#">
													Content Marketing
												</a>
											</li>
											<li>
												<a href="#">Brand & Logo</a>
											</li>
											<li>
												<a href="#">
													Social Advertising
												</a>
											</li>
										</ul>
									</div>
									<div className="col-lg-4">
										<h3 className="footer-title">
											Resources
										</h3>
										<ul className="list-unstyled">
											<li>
												<a href="#">Social Marketing</a>
											</li>
											<li>
												<a href="#">Web Design</a>
											</li>
											<li>
												<a href="#">Web Development</a>
											</li>
										</ul>
									</div>
									<div className="col-lg-4">
										<h3 className="footer-title">
											Templates
										</h3>
										<ul className="list-unstyled">
											<li>
												<a href="#">Illustration</a>
											</li>
											<li>
												<a href="#">Video Editing</a>
											</li>
											<li>
												<a href="#">Copywriting</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-md-3">
								<h3 className="footer-title">Follow Me</h3>
								<a href="#" className="social-circle m-2">
									<span className="icon-twitter"></span>
								</a>
								<a href="#" className="social-circle m-2">
									<span className="icon-facebook"></span>
								</a>
								<a href="#" className="social-circle m-2">
									<span className="icon-instagram"></span>
								</a>
								<a href="#" className="social-circle m-2">
									<span className="icon-dribbble"></span>
								</a>
								<a href="#" className="social-circle m-2">
									<span className="icon-linkedin"></span>
								</a>
							</div>
						</div>

						<div className="row">
							<div className="col-12 text-center">
								<p>
									{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
									Copyright &copy;
									<script>
										document.write(new
										Date().getFullYear());
									</script>{" "}
									All rights reserved | This template is made
									with{" "}
									<i
										className="icon-heart"
										aria-hidden="true"
									></i>{" "}
									by{" "}
									<a
										href="https://colorlib.com"
										target="_blank"
									>
										Colorlib
									</a>
									{/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
								</p>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}
