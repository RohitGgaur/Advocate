function Team() {
	const teamMembers = [
		{
			id: 1,
			name: "RISHABH MALHOTRA",
			title: "ADVOCATE",
			role: "FOUNDER",
			image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
			description: "Leading the firm with strategic vision and legal expertise."
		},
		{
			id: 2,
			name: "GAJENDRA SINGH ARYA",
			title: "ADVOCATE",
			role: "MENTOR",
			image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
			description: "Providing guidance and mentorship to the team."
		},
		{
			id: 3,
			name: "RAGHAV SEHGAL",
			title: "ADVOCATE",
			role: "ASSOCIATE",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
			description: "Specialized in corporate and civil litigation."
		},
		{
			id: 4,
			name: "JASKARAN SINGH BHANDARI",
			title: "ADVOCATE",
			role: "ASSOCIATE",
			image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
			description: "Expert in family and property law matters."
		},
		{
			id: 5,
			name: "SHIVAM CHAUDHARY",
			title: "JUNIOR PARALEGAL",
			role: "SUPPORT STAFF",
			image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
			description: "Providing essential legal support and research."
		}
	]

	return (
		<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<h2 className="text-4xl font-bold text-center text-gray-800 mb-16">TEAM MEMBERS</h2>
			
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{teamMembers.map((member) => (
					<div key={member.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div className="relative">
							<img 
								src={member.image} 
								alt={member.name}
								className="w-full h-80 object-cover"
							/>
							<div className="absolute top-4 right-4 bg-brand text-white px-3 py-1 rounded-full text-sm font-medium">
								{member.role}
							</div>
						</div>
						<div className="p-6 text-center">
							<h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
							<p className="text-brand font-semibold mb-2">{member.title}</p>
							<p className="text-gray-600 leading-relaxed">{member.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Team 