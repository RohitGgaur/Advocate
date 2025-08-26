function Footer() {
	return (
		<footer className="bg-black text-white py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Map Section */}
				<div className="mb-12">
					<h3 className="text-2xl font-bold text-center mb-8">Our Location</h3>
					<div className="bg-white rounded-2xl shadow-lg overflow-hidden">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4962!3d28.4744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6b7832f0e6f%3A0x1b9a79e39e9e3b4a!2sGreater%20Noida%20West%2C%20Bisrakh%2C%20Gautam%20Buddha%20Nagar%2C%20Uttar%20Pradesh%20201306!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
							width="100%"
							height="400"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Judicioworks Office Location"
						></iframe>
					</div>
					<div className="text-center mt-4">
						<p className="text-gray-300 text-sm">
							📍 <span className="font-medium">Founder's Office:</span> B-805, ARIHANT ARDEN, GREATER NOIDA WEST, BISRAKH, GAUTAM BUDDHA NAGAR-201306
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="space-y-4">
						<h3 className="text-2xl font-bold text-brand">Judicioworks</h3>
						<p className="text-gray-300 leading-relaxed">
							Professional legal services with a commitment to excellence and client satisfaction.
						</p>
						<div className="flex space-x-4">
							<a href="https://www.linkedin.com/company/judicioworks-advocates-and-associates/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand transition-colors duration-300">
								<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
								</svg>
							</a>
							<a href="https://www.instagram.com/judicioworks?igsh=M3d2N3JnMnU5YjA2" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand transition-colors duration-300">
								<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
								</svg>
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h4 className="text-lg font-semibold">Quick Links</h4>
						<ul className="space-y-2">
							<li><a href="/" className="text-gray-300 hover:text-brand transition-colors duration-300">Home</a></li>
							<li><a href="/about" className="text-gray-300 hover:text-brand transition-colors duration-300">About Us</a></li>
							<li><a href="/team" className="text-gray-300 hover:text-brand transition-colors duration-300">Team</a></li>
							<li><a href="/blog" className="text-gray-300 hover:text-brand transition-colors duration-300">Blog</a></li>
							<li><a href="/contact" className="text-gray-300 hover:text-brand transition-colors duration-300">Contact</a></li>
						</ul>
					</div>

					{/* Contact Info */}
					<div className="space-y-4">
						<h4 className="text-lg font-semibold">Contact Info</h4>
						<div className="space-y-3">
							<div className="flex items-start space-x-3">
								<svg className="w-5 h-5 text-brand mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
								<div className="text-gray-300 text-sm">
									<p className="font-medium">Office:</p>
									<p>B-805, ARIHANT ARDEN, GREATER NOIDA WEST, BISRAKH, GAUTAM BUDDHA NAGAR-201306.</p>
								</div>
							</div>
							<div className="flex items-start space-x-3">
								<svg className="w-5 h-5 text-brand mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
								</svg>
								<div className="text-gray-300 text-sm">
									<p className="font-medium">Chamber:</p>
									<p>1040, TRIPLE STORY BUILDING, DISTRICT AND SESSIONS COURT, RDC- GHAZIABAD.</p>
								</div>
							</div>
							<div className="flex items-center space-x-3">
								<svg className="w-5 h-5 text-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
								<div className="text-gray-300 text-sm">
									<p>+91-7065767555</p>
									<p>+91-7065373327</p>
								</div>
							</div>
							<div className="flex items-center space-x-3">
								<svg className="w-5 h-5 text-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
								<div className="text-gray-300 text-sm">
									<p>judicioworks@gmail.com</p>
									<p>advocate.rishabhmalhotra5@gmail.com</p>
								</div>
							</div>
						</div>
					</div>

					{/* Office Hours */}
					<div className="space-y-4">
						<h4 className="text-lg font-semibold">Office Hours</h4>
						<div className="space-y-2 text-gray-300 text-sm">
							<div className="flex justify-between">
								<span>Monday - Friday:</span>
								<span>9:00 AM - 6:00 PM</span>
							</div>
							<div className="flex justify-between">
								<span>Saturday:</span>
								<span>10:00 AM - 4:00 PM</span>
							</div>
							<div className="flex justify-between">
								<span>Sunday:</span>
								<span>Closed</span>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-800 mt-12 pt-8 text-center">
					<p className="text-gray-400">
						© 2024 Judicioworks Advocates and Associates. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer 