function About() {
	return (
		<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			{/* Main Heading */}
			<div className="text-center mb-16">
				<h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">About Judicioworks</h1>
				<div className="w-24 h-1 bg-brand mx-auto"></div>
			</div>

			{/* Introduction Section */}
			<div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border-l-4 border-brand">
				<h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Judicioworks Advocates and Associates</h2>
				<p className="text-gray-600 leading-relaxed text-lg">
					where legal excellence meets client satisfaction. Our firm is dedicated to providing comprehensive legal solutions tailored to meet the diverse needs of our clients in Delhi-NCR, with a focus on Ghaziabad and Noida.
				</p>
			</div>

			{/* Founder Section */}
			<div className="grid md:grid-cols-2 gap-8 mb-12">
				<div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-brand">
					<h3 className="text-2xl font-bold text-gray-800 mb-4">Our Founder</h3>
					<p className="text-gray-700 leading-relaxed text-base">
						Founded by <span className="font-semibold text-brand">Advocate Rishabh Malhotra</span>, who is enrolled with the State Bar Council of Delhi and is a member of the Delhi High Court Bar Association, Judicioworks prides itself on a team of experienced and dedicated attorneys.
					</p>
				</div>
				<div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-gray-300">
					<h3 className="text-2xl font-bold text-gray-800 mb-4">Court Coverage</h3>
					<p className="text-gray-700 leading-relaxed text-base">
						We deliver top-notch legal services in the District Courts of <span className="font-semibold">Ghaziabad, Noida, Greater Noida, and Delhi</span>, as well as the High Courts at Delhi and Allahabad.
					</p>
				</div>
			</div>

			{/* Practice Areas Section */}
			<div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
				<h3 className="text-2xl font-bold text-gray-800 mb-6">Our Expertise</h3>
				<p className="text-gray-600 leading-relaxed mb-6">
					Our expertise spans various practice areas including:
				</p>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
					{[
						"Civil Law", "Criminal Law", "Family Law", "Matrimonial Law", 
						"Corporate Law", "Real Estate Law", "Labour Law", "Claim Petitions", 
						"Writ Petitions"
					].map((area, index) => (
						<div key={index} className="flex items-center space-x-2">
							<div className="w-2 h-2 bg-brand rounded-full"></div>
							<span className="text-gray-700 font-medium">{area}</span>
						</div>
					))}
				</div>
				<p className="text-gray-600 leading-relaxed mt-6">
					Our attorneys possess the knowledge and skills necessary to handle even the most complex legal matters.
				</p>
			</div>

			{/* Client Focus Section */}
			<div className="bg-gradient-to-r from-brand to-brand/80 rounded-2xl p-8 mb-12 text-white">
				<h3 className="text-2xl font-bold mb-4">Client Satisfaction is Our Priority</h3>
				<p className="leading-relaxed text-white/90">
					We strive to provide personalised attention and guidance to each client. Whether you are facing a legal dispute, planning a business transaction, or seeking legal advice, you can trust Judicioworks to provide sound legal counsel and representation every step of the way.
				</p>
			</div>

			{/* Location & Environment */}
			<div className="grid md:grid-cols-2 gap-8 mb-12">
				<div className="bg-white rounded-2xl shadow-lg p-8">
					<h3 className="text-2xl font-bold text-gray-800 mb-4">Strategic Location</h3>
					<p className="text-gray-600 leading-relaxed">
						Conveniently located near you in the heart of two cities, <span className="font-semibold">Noida and Ghaziabad</span>, our firm offers a welcoming and professional environment where clients can feel comfortable discussing their legal concerns.
					</p>
				</div>
				<div className="bg-white rounded-2xl shadow-lg p-8">
					<h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Support</h3>
					<p className="text-gray-600 leading-relaxed">
						We understand that navigating the legal system can be daunting, which is why we are here to offer guidance and support to our clients throughout the legal process, in the best manner possible.
					</p>
				</div>
			</div>

			{/* Values Section */}
			<div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
				<h3 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment</h3>
				<p className="text-gray-600 leading-relaxed">
					At Judicioworks Advocates and Associates, we are committed to upholding the highest standards of <span className="font-semibold text-brand">integrity, professionalism, and ethical conduct</span>. With a track record of success and a reputation for excellence, you can trust us to protect your legal rights and advocate fiercely on your behalf.
				</p>
			</div>

			{/* Current Engagements */}
			<div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
				<h3 className="text-2xl font-bold text-gray-800 mb-4">Current Court Engagements</h3>
				<p className="text-gray-600 leading-relaxed">
					Judicioworks Advocates and Associates is currently engaged in handling cases in the District Courts of <span className="font-semibold">Ghaziabad, Noida, Greater Noida, and Delhi</span>, as well as before the High Courts in <span className="font-semibold">Allahabad and Delhi</span>, and the <span className="font-semibold">Supreme Court of India</span>.
				</p>
			</div>

			{/* Call to Action */}
			<div className="text-center bg-white rounded-2xl shadow-lg p-8">
				<h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h3>
				<p className="text-gray-600 leading-relaxed mb-6">
					Contact the best lawyers in Ghaziabad and Noida at Judicioworks Advocates and Associates today to schedule a consultation and learn how we can assist you with your legal needs.
				</p>
				<a 
					href="/contact" 
					className="inline-flex items-center justify-center rounded-md bg-brand px-8 py-3 text-white font-medium hover:bg-brand/90 transition-colors duration-300 transform hover:scale-105"
				>
					Schedule Consultation
				</a>
			</div>
		</section>
	)
}

export default About 