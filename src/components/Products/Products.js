import React from "react";
import "./products.css";

export default class Products extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{" "}
				<section
					className="site-section block__62272"
					id="projects-section"
				>
					<div className="container">
						<div className="row mb-5">
							<div className="col-12 position-relative">
								<h2 className="section-title text-center mb-5">
									Projects
								</h2>
							</div>
						</div>

						<div
							className="row justify-content-center mb-5"
							data-aos="fade"
						>
							<div
								id="filters"
								className="filters text-center button-group col-md-7"
							>
								<button
									className="btn btn-primary active"
									data-filter="*"
								>
									All
								</button>
								<button
									className="btn btn-primary"
									data-filter=".web"
								>
									Web
								</button>
								<button
									className="btn btn-primary"
									data-filter=".design"
								>
									Design
								</button>
								<button
									className="btn btn-primary"
									data-filter=".brand"
								>
									Brand
								</button>
							</div>
						</div>

						<div id="posts" className="row no-gutter">
							<div className="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
								<a
									href="images/img_5.jpg"
									className="item-wrap fancybox"
								>
									<span className="icon-search2"></span>
									<img
										className="img-fluid"
										src={require("../images/img_5.jpg")}
									/>
								</a>
							</div>

							<div className="item brand col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
								<a
									href="images/img_6.jpg"
									className="item-wrap fancybox"
								>
									<span className="icon-search2"></span>
									<img
										className="img-fluid"
										src={require("../images/img_6.jpg")}
									/>
								</a>
							</div>

							<div className="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
								<a
									href="images/img_7.jpg"
									className="item-wrap fancybox"
								>
									<span className="icon-search2"></span>
									<img
										className="img-fluid"
										src={require("../images/img_7.jpg")}
									/>
								</a>
							</div>

							<div className="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
								<a
									href="images/img_1.jpg"
									className="item-wrap fancybox"
								>
									<span className="icon-search2"></span>
									<img
										className="img-fluid"
										src={require("../images/img_1.jpg")}
									/>
								</a>
							</div>
							<div className="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
								<a
									href="images/img_2.jpg"
									className="item-wrap fancybox"
								>
									<span className="icon-search2"></span>
									<img
										className="img-fluid"
										src={require("../images/img_2.jpg")}
									/>
								</a>
							</div>

							<div className="item brand col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
								<a
									href="images/img_3.jpg"
									className="item-wrap fancybox"
								>
									<span className="icon-search2"></span>
									<img
										className="img-fluid"
										src={require("../images/img_3.jpg")}
									/>
								</a>
							</div>

							<div className="item design col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
								<a
									href="images/img_4.jpg"
									className="item-wrap fancybox"
								>
									<span className="icon-search2"></span>
									<img
										className="img-fluid"
										src={require("../images/img_4.jpg")}
									/>
								</a>
							</div>

							<div className="item design col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
								<a
									href="images/img_8.jpg"
									className="item-wrap fancybox"
								>
									<span className="icon-search2"></span>
									<img
										className="img-fluid"
										src={require("../images/img_8.jpg")}
									/>
								</a>
							</div>

							<div className="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
								<a
									href="images/img_9.jpg"
									className="item-wrap fancybox"
								>
									<span className="icon-search2"></span>
									<img
										className="img-fluid"
										src={require("../images/img_9.jpg")}
									/>
								</a>
							</div>

							<div className="item design col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
								<a
									href="images/img_10.jpg"
									className="item-wrap fancybox"
								>
									<span className="icon-search2"></span>
									<img
										className="img-fluid"
										src={require("../images/img_10.jpg")}
									/>
								</a>
							</div>

							<div className="item brand col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
								<a
									href="images/img_11.jpg"
									className="item-wrap fancybox"
								>
									<span className="icon-search2"></span>
									<img
										className="img-fluid"
										src={require("../images/img_11.jpg")}
									/>
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
