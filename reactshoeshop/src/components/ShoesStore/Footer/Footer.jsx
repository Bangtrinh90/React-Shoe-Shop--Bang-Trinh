import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div>
				<footer className='footer'>
					<div className='footer-top'>
						<div className='medium-container'>
							<div className='row'>
								<div className='col-12 col-md-4 mb-md-0 mb-4'>
									<h2 className='footer-heading'>GET HELP</h2>
									<ul className='list-unstyled'>
										<li>
											<a href='#link' className='d-block'>
												Contact us
											</a>
										</li>
										<li>
											<a href='#link' className='d-block'>
												Shopping
											</a>
										</li>
										<li>
											<a href='#link' className='d-block'>
												NIKEID
											</a>
										</li>
										<li>
											<a href='#link' className='d-block'>
												Nike+
											</a>
										</li>
									</ul>
								</div>
								<div className='col-12 col-md-4 mb-md-0 mb-4 border-left'>
									<h2 className='footer-heading'>ORDERS</h2>
									<ul className='list-unstyled'>
										<li>
											<a href='#link' className='d-block'>
												Payment options
											</a>
										</li>
										<li>
											<a href='#link' className='d-block'>
												Shipping and delivery
											</a>
										</li>
										<li>
											<a href='#link' className='d-block'>
												Returns
											</a>
										</li>
									</ul>
								</div>
								<div className='col-12 col-md-4 mb-md-0 mb-4 border-left'>
									<h2 className='footer-heading'>REGISTER</h2>
									<span className='footer-review'>
										Create one account to mange everything you do with Nike,
										from your shopping preferences to your Nike+ activity
									</span>
									<div className='footer-more'>
										<a href='#link'>Learn more</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='footer-bottom'>
						<div className='medium-container'>
							<div className='row'>
								<div className='col-12 col-md-4 mb-md-0 mb-4'>
									<h2 className='footer-heading'>EMAIL SIGN UP</h2>
									<span className='footer-review'>
										Be the first to know about new products and special offers
									</span>
									<div className='footer-more'>
										<a href='#link'>Sign up now</a>
									</div>
								</div>
								<div className='col-12 col-md-4 mb-md-0 mb-4 border-left'>
									<h2 className='footer-heading'>GIFT CARDS</h2>
									<span className='footer-review'>
										Give the gift that always first
									</span>
									<div className='footer-more'>
										<a href='#link'>View cards</a>
									</div>
								</div>
								<div className='col-12 col-md-4 mb-md-0 mb-4 border-left'>
									<h2 className='footer-heading'>STORES NEAR YOU</h2>
									<span className='footer-review'>
										Locate a Nike retail store or authorized retailer
									</span>
									<div className='footer-more'>
										<a href='#link'>Search</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer;
