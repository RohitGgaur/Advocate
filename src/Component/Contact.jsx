function Contact() {
	return (
		<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			{/* Main Heading */}
			<div className="text-center mb-16">
				<h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
				<div className="w-24 h-1 bg-brand mx-auto"></div>
			</div>

			<div className="grid lg:grid-cols-2 gap-12">
				{/* Contact Information */}
				<div className="space-y-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
					
					{/* Office Address */}
					<div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-brand">
						<h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
							<svg className="w-6 h-6 text-brand mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
							</svg>
							Office
						</h3>
						<p className="text-gray-700 leading-relaxed">
							B-805, ARIHANT ARDEN, GREATER NOIDA WEST, BISRAKH,<br />
							GAUTAM BUDDHA NAGAR-201306.
						</p>
					</div>

					{/* Chamber Address */}
					<div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-brand">
						<h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
							<svg className="w-6 h-6 text-brand mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
							</svg>
							Chamber
						</h3>
						<p className="text-gray-700 leading-relaxed">
							1040, TRIPLE STORY BUILDING, DISTRICT AND SESSIONS<br />
							COURT, RDC- GHAZIABAD.
						</p>
					</div>

					{/* Phone Numbers */}
					<div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-brand">
						<h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
							<svg className="w-6 h-6 text-brand mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
							Phone
						</h3>
						<div className="space-y-2">
							<a href="tel:+917065767555" className="block text-gray-700 hover:text-brand transition-colors">
								+91-7065767555
							</a>
							<a href="tel:+917065373327" className="block text-gray-700 hover:text-brand transition-colors">
								+91-7065373327
							</a>
						</div>
					</div>

					{/* Email Addresses */}
					<div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-brand">
						<h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
							<svg className="w-6 h-6 text-brand mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							Email
						</h3>
						<div className="space-y-2">
							<a href="mailto:judicioworks@gmail.com" className="block text-gray-700 hover:text-brand transition-colors">
								judicioworks@gmail.com
							</a>
							<a href="mailto:advocate.rishabhmalhotra5@gmail.com" className="block text-gray-700 hover:text-brand transition-colors">
								advocate.rishabhmalhotra5@gmail.com
							</a>
						</div>
					</div>

					{/* Social Media */}
					<div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-brand">
						<h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
							<svg className="w-6 h-6 text-brand mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
							</svg>
							Social Media
						</h3>
						<div className="space-y-3">
							<a href="https://www.linkedin.com/company/judicioworks-advocates-and-associates/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-brand transition-colors">
								<svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
								</svg>
								LinkedIn
							</a>
							<a href="https://www.instagram.com/judicioworks?igsh=M3d2N3JnMnU5YjA2" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-brand transition-colors">
								<svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
								</svg>
								Instagram
							</a>
						</div>
					</div>
				</div>

				{/* Contact Form */}
				<div className="bg-white rounded-2xl shadow-lg p-8">
					<h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
					<form className="space-y-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
							<input 
								type="text" 
								className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent" 
								placeholder="Enter your full name" 
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
							<input 
								type="email" 
								className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent" 
								placeholder="Enter your email" 
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
							<input 
								type="tel" 
								className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent" 
								placeholder="Enter your phone number" 
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
							<input 
								type="text" 
								className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent" 
								placeholder="What is this regarding?" 
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
							<textarea 
								rows="4" 
								className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent" 
								placeholder="Tell us about your legal matter..."
							></textarea>
						</div>
						<button 
							type="submit" 
							className="w-full bg-brand text-white py-3 px-6 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-300 transform hover:scale-105"
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Contact 