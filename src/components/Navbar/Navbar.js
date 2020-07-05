import React from "react";

const Navbar = (props) => {
	return (
		<div>
			{" "}
			<header
				className="site-navbar py-4 js-sticky-header site-navbar-target"
				role="banner"
			>
				<div className="container">
					<div className="row align-items-center justify-content-center">
						<div className="col-4">
							<h1 className="m-0 site-logo">
								<a href="index.html">Services</a>
							</h1>
						</div>

						<div className="col-8">
							<nav
								className="site-navigation position-relative text-right"
								role="navigation"
							>
								<ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
									<li>
										<a
											href="#home-section"
											className="nav-link"
										>
											Home
										</a>
									</li>
									<li>
										<a
											href="#about-section"
											className="nav-link"
										>
											About
										</a>
									</li>
									<li>
										<a
											href="#services-section"
											className="nav-link"
										>
											Services
										</a>
									</li>
									<li>
										<a
											href="#projects-section"
											className="nav-link"
										>
											Projects
										</a>
									</li>
									<li>
										<a
											href="#blog-section"
											className="nav-link"
										>
											Blog
										</a>
									</li>
									<li>
										<a
											href="#contact-section"
											className="nav-link"
										>
											Contact
										</a>
									</li>
								</ul>
							</nav>

							<a
								href="#"
								className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle float-right"
							>
								<span className="icon-menu h3"></span>
							</a>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
