import React from "react";
import "./testimonial.css";

export default class Testimonial extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{" "}
				<section className="site-section bg-primary">
					<div className="container">
						<div className="row">
							<div className="col-12 mb-5 position-relative">
								<h2 className="section-title text-center mb-5 text-white">
									What Client Are Sayings
								</h2>
							</div>
						</div>
						<div className="owl-carousel slide-one-item">
							<div className="slide">
								<blockquote>
									<p>
										Far far away, behind the word mountains,
										far from the countries Vokalia and
										Consonantia, there live the blind texts.
										Separated they live in Bookmarksgrove
										right at the coast of the Semantics, a
										large language ocean.
									</p>
									<p>
										<cite>&mdash; Jean Smith</cite>
									</p>
								</blockquote>
							</div>
							<div className="slide">
								<blockquote>
									<p>
										A small river named Duden flows by their
										place and supplies it with the necessary
										regelialia. It is a paradisematic
										country, in which roasted parts of
										sentences fly into your mouth.
									</p>
									<p>
										<cite>&mdash; Carl Spencer</cite>
									</p>
								</blockquote>
							</div>
							<div className="slide">
								<blockquote>
									<p>
										Even the all-powerful Pointing has no
										control about the blind texts it is an
										almost unorthographic life One day
										however a small line of blind text by
										the name of Lorem Ipsum decided to leave
										for the far World of Grammar.
									</p>
									<p>
										<cite>&mdash; Ryan Peters</cite>
									</p>
								</blockquote>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
