import { useParams, Link } from 'react-router-dom'

function PracticeAreaDetail() {
	const { id } = useParams()

	const practiceAreas = [
		{
			id: 1,
			title: "CRIMINAL LAW",
			description: "Criminal law pertains to crimes, their prosecution, and the punishment of individuals who commit them. At Judicioworks, we specialise in criminal law, offering expert legal representation to individuals facing criminal charges in Delhi, Noida, and Ghaziabad. Our experienced criminal defence attorneys are dedicated to protecting the rights of our clients and ensuring fair treatment throughout the legal process. We handle a wide range of criminal cases, including rape, dowry death, dowry harassment, traffic challans, drug offenses, assault, theft, white-collar crimes, and juvenile offenses, among others. With our comprehensive understanding of criminal law and commitment to personalised attention, we strive to achieve the best possible outcomes for our clients.",
			image: new URL('../assets/Adv photos/0b1aa852-5596-46af-b9bc-7eaf8d344286.jpg', import.meta.url).href,
			services: ["Criminal Defense", "Prosecution", "Rights Protection", "Case Handling", "Legal Representation"]
		},
		{
			id: 2,
			title: "CIVIL LAW",
			description: "We specialise in civil law, offering comprehensive legal services to individuals and businesses involved in civil disputes in Delhi, Noida, and Ghaziabad. Civil law encompasses a broad range of legal matters, including contracts, property disputes, family law, personal injury claims, and more. Our skilled civil attorneys are committed to providing effective representation and personalised solutions tailored to meet the unique needs of each client. Whether you are seeking to resolve a contract dispute, navigate a divorce, or pursue compensation for a personal injury, our firm is here to guide you through every step of the legal process.",
			image: new URL('../assets/Adv photos/0d321f48-4faa-4453-a6c9-2b65b62ca34f.jpg', import.meta.url).href,
			services: ["Contract Disputes", "Property Disputes", "Personal Injury", "Legal Representation", "Dispute Resolution"]
		},
		{
			id: 3,
			title: "FAMILY LAW",
			description: "We understand the sensitive nature of family and matrimonial law matters and provide compassionate yet strategic legal representation to clients facing such challenges in Delhi, Noida, and Ghaziabad. Our experienced family law attorneys help individuals navigate through family disputes, including divorce, child custody, alimony, adoption, and domestic violence issues. We prioritise the well-being and best interests of our clients and their families, offering sound legal advice, negotiation skills, and courtroom advocacy to achieve favourable outcomes.",
			image: new URL('../assets/Adv photos/0e09e9db-eadc-45f0-b5b8-ba2f2119124a.jpg', import.meta.url).href,
			services: ["Divorce", "Child Custody", "Alimony", "Adoption", "Domestic Violence"]
		},
		{
			id: 4,
			title: "REAL ESTATE LAW",
			description: "Our firm offers comprehensive legal services in real estate law, including matters related to the Real Estate (Regulation and Development) Act (RERA) and consumer courts in Delhi, Noida, and Ghaziabad. Our dedicated attorneys specialise in navigating real estate transactions, property disputes, and consumer protection issues. We provide expert guidance and representation to protect your rights and interests, from drafting and reviewing contracts to resolving disputes through negotiation, mediation, or litigation.",
			image: new URL('../assets/Adv photos/0f5ca8a5-cf4a-47c2-b788-f4eca5a4a859.jpg', import.meta.url).href,
			services: ["RERA Compliance", "Property Transactions", "Property Disputes", "Contract Review", "Dispute Resolution"]
		},
		{
			id: 5,
			title: "CLAIM PETITIONS",
			description: "We specialise in handling a wide range of claim petitions, including railway claims and motor accident claims in Delhi, Noida, and Ghaziabad. Our experienced legal team works diligently to ensure that our clients receive fair compensation for their losses. Whether you've been injured in a railway accident or a motor vehicle collision, we provide expert legal representation every step of the way, from gathering evidence to negotiating with insurance companies or representing you in court.",
			image: new URL('../assets/Adv photos/19a78edd-929d-4383-8dd0-7febab8ed5df.jpg', import.meta.url).href,
			services: ["Railway Claims", "Motor Accident Claims", "Insurance Negotiation", "Evidence Gathering", "Court Representation"]
		},
		{
			id: 6,
			title: "COMMERCIAL LITIGATION",
			description: "We specialise in commercial litigation, covering matters such as recovery cases, cheque bounce issues, and arbitration disputes in Delhi, Noida, and Ghaziabad. Our experienced advocates navigate the complexities of commercial disputes, providing strategic legal solutions tailored to your specific needs. Whether you're seeking to recover outstanding debts, resolve cheque bounce issues, or engage in arbitration proceedings, we effectively represent your interests.",
			image: new URL('../assets/Adv photos/1e8e9664-4cf5-4b2b-8165-b8514fba6848.jpg', import.meta.url).href,
			services: ["Recovery Cases", "Cheque Bounce", "Arbitration", "Commercial Disputes", "Strategic Solutions"]
		},
		{
			id: 7,
			title: "CONSUMER PROTECTION LAW",
			description: "We understand the importance of protecting consumer rights and ensuring fair treatment in the marketplace in Delhi, Ghaziabad, and Noida. Our firm handles consumer matters, including disputes related to product defects, unfair trade practices, and deficient services. We advocate for the rights of consumers, holding businesses accountable for their actions, and provide expert legal representation to seek redress for issues with faulty products, deceptive advertising, or unsatisfactory services.",
			image: new URL('../assets/Adv photos/277e71d1-444d-428d-9d3e-5c44258cb78a.jpg', import.meta.url).href,
			services: ["Consumer Rights", "Product Defects", "Unfair Trade Practices", "Deficient Services", "Legal Advocacy"]
		},
		{
			id: 8,
			title: "LABOUR AND EMPLOYMENT LAW",
			description: "We recognize the complexities involved in navigating labour and employment laws for both employers and employees in Delhi, Ghaziabad, Noida, and Greater Noida. Our firm provides comprehensive legal services tailored to address a wide range of labour and employment matters. Whether you are an employer seeking guidance on compliance with employment regulations or an employee facing issues such as wrongful termination, discrimination, or unpaid wages, our experienced advocates assist you in protecting your rights and interests.",
			image: new URL('../assets/Adv photos/33880aad-b7f8-408b-b487-bbe2fa2d4cc2.jpg', import.meta.url).href,
			services: ["Employment Compliance", "Wrongful Termination", "Discrimination", "Unpaid Wages", "Rights Protection"]
		},
		{
			id: 9,
			title: "CONVEYANCING AND COURT MARRIAGES",
			description: "We offer comprehensive legal services in conveyancing, legal advice, and marriage registration, including court marriage facilitation in Delhi, Ghaziabad, Noida, and Greater Noida. Our skilled advocates provide guidance in property transactions, ensuring smooth processes and addressing any legal complexities. Additionally, we offer legal advice across various areas of law and facilitate marriage registrations, including court marriages, ensuring compliance with legal formalities and procedures.",
			image: new URL('../assets/Adv photos/3c861e77-c005-4c02-88f7-660cd8dd863a.jpg', import.meta.url).href,
			services: ["Conveyancing", "Property Transactions", "Court Marriages", "Marriage Registration", "Legal Advice"]
		},
		{
			id: 10,
			title: "WRIT AND SPECIAL LEAVE PETITIONS",
			description: "We specialise in handling Writ Petitions and Special Leave Petitions (SLPs) before various judicial forums, including High Courts and the Supreme Court of India. Our experienced advocates draft, file, and argue writ petitions and SLPs, seeking legal remedies and constitutional reliefs. Whether it's challenging governmental actions, asserting fundamental rights, or seeking appellate relief, we provide strategic legal representation to achieve favourable outcomes.",
			image: new URL('../assets/Adv photos/3ec1a0af-3f0d-43bc-8cd7-c688c246fe37.jpg', import.meta.url).href,
			services: ["Writ Petitions", "Special Leave Petitions", "Constitutional Reliefs", "High Court", "Supreme Court"]
		}
	]

	const practiceArea = practiceAreas.find(area => area.id === parseInt(id))

	if (!practiceArea) {
		return (
			<div className="min-h-screen bg-gray-50 py-16">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-3xl font-bold text-gray-800 mb-4">Practice Area Not Found</h1>
					<p className="text-gray-600 mb-8">The requested practice area could not be found.</p>
					<Link to="/" className="bg-brand text-white px-6 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors">
						Back to Home
					</Link>
				</div>
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-gray-50 py-16">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Breadcrumb */}
				<nav className="mb-8">
					<ol className="flex items-center space-x-2 text-sm text-gray-600">
						<li><Link to="/" className="hover:text-brand transition-colors">Home</Link></li>
						<li><span className="mx-2">/</span></li>
						<li><Link to="/" className="hover:text-brand transition-colors">Practice Areas</Link></li>
						<li><span className="mx-2">/</span></li>
						<li className="text-gray-800 font-medium">{practiceArea.title}</li>
					</ol>
				</nav>

				{/* Header Section */}
				<div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
					<div className="relative">
						<img 
							src={practiceArea.image} 
							alt={practiceArea.title}
							className="w-full h-80 object-cover"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-40"></div>
						<div className="absolute bottom-6 left-6">
							<h1 className="text-4xl font-bold text-white mb-2">{practiceArea.title}</h1>
							<p className="text-white/90 text-lg">Expert Legal Services</p>
						</div>
					</div>
				</div>

				{/* Content Grid */}
				<div className="grid lg:grid-cols-3 gap-8">
					{/* Main Content */}
					<div className="lg:col-span-2">
						<div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
							<h2 className="text-2xl font-bold text-gray-800 mb-6">Overview</h2>
							<p className="text-gray-700 leading-relaxed text-lg">
								{practiceArea.description}
							</p>
						</div>

						<div className="bg-white rounded-2xl shadow-lg p-8">
							<h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Judicioworks?</h2>
							<div className="grid md:grid-cols-2 gap-6">
								<div className="flex items-start space-x-3">
									<div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
										<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<div>
										<h3 className="font-semibold text-gray-800 mb-1">Expert Attorneys</h3>
										<p className="text-gray-600 text-sm">Experienced legal professionals with deep expertise</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
										<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<div>
										<h3 className="font-semibold text-gray-800 mb-1">Personalized Attention</h3>
										<p className="text-gray-600 text-sm">Tailored solutions for your specific legal needs</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
										<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<div>
										<h3 className="font-semibold text-gray-800 mb-1">Strategic Approach</h3>
										<p className="text-gray-600 text-sm">Comprehensive legal strategies for optimal outcomes</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
										<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<div>
										<h3 className="font-semibold text-gray-800 mb-1">Court Coverage</h3>
										<p className="text-gray-600 text-sm">Services across Delhi, Noida, and Ghaziabad courts</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Sidebar */}
					<div className="space-y-6">
						{/* Services */}
						<div className="bg-white rounded-2xl shadow-lg p-6">
							<h3 className="text-xl font-bold text-gray-800 mb-4">Our Services</h3>
							<ul className="space-y-3">
								{practiceArea.services.map((service, index) => (
									<li key={index} className="flex items-center space-x-3">
										<div className="w-2 h-2 bg-brand rounded-full"></div>
										<span className="text-gray-700">{service}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Contact CTA */}
						<div className="bg-brand rounded-2xl p-6 text-white text-center">
							<h3 className="text-xl font-bold mb-3">Need Legal Help?</h3>
							<p className="text-white/90 mb-4">Get expert consultation for your legal matter</p>
							<Link 
								to="/contact" 
								className="inline-block bg-white text-brand px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
							>
								Contact Us
							</Link>
						</div>

						{/* Back to Practice Areas */}
						<div className="bg-white rounded-2xl shadow-lg p-6 text-center">
							<Link 
								to="/" 
								className="inline-flex items-center space-x-2 text-brand hover:text-brand/80 transition-colors"
							>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
								</svg>
								<span>Back to Practice Areas</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PracticeAreaDetail 