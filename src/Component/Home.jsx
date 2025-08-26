import heroImg from '../assets/Adv photos/e34dd712-b8ed-4a0a-b4c3-5008ade41fd7.jpg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

// Import all photos from the Adv photos folder
import photo1 from '../assets/Adv photos/0b1aa852-5596-46af-b9bc-7eaf8d344286.jpg'
import photo2 from '../assets/Adv photos/0d321f48-4faa-4453-a6c9-2b65b62ca34f.jpg'
import photo3 from '../assets/Adv photos/0e09e9db-eadc-45f0-b5b8-ba2f2119124a.jpg'
import photo4 from '../assets/Adv photos/0f5ca8a5-cf4a-47c2-b788-f4eca5a4a859.jpg'
import photo5 from '../assets/Adv photos/19a78edd-929d-4383-8dd0-7febab8ed5df.jpg'
import photo6 from '../assets/Adv photos/1e8e9664-4cf5-4b2b-8165-b8514fba6848.jpg'
import photo7 from '../assets/Adv photos/277e71d1-444d-428d-9d3e-5c44258cb78a.jpg'
import photo8 from '../assets/Adv photos/33880aad-b7f8-408b-b487-bbe2fa2d4cc2.jpg'
import photo9 from '../assets/Adv photos/3c861e77-c005-4c02-88f7-660cd8dd863a.jpg'
import photo10 from '../assets/Adv photos/3ec1a0af-3f0d-43bc-8cd7-c688c246fe37.jpg'
import photo11 from '../assets/Adv photos/3ec3ab00-4c9b-4f0e-9100-e9747af3dcbc.jpg'
import photo12 from '../assets/Adv photos/4f591e18-242c-4ffb-86b5-6946b8dca0b2.jpg'
import photo13 from '../assets/Adv photos/77e7eaab-6486-4d19-b24f-8174ef94abf9.jpg'
import photo14 from '../assets/Adv photos/8b4c97b2-b96c-4baf-9dd0-4129a2df06be.jpg'
import photo15 from '../assets/Adv photos/985b2dea-1873-4360-8eed-117691ecb0c4.jpg'
import photo16 from '../assets/Adv photos/9f45aafd-bd4a-4c66-9914-c834574d4446.jpg'
import photo17 from '../assets/Adv photos/a771106c-ae16-4446-9ea5-0972ed351c09.jpg'
import photo18 from '../assets/Adv photos/afd8955a-bcc0-4556-83db-728be3c194c0.jpg'
import photo19 from '../assets/Adv photos/c6c368f1-47e7-499b-9c4a-2929c470ab43.jpg'
import photo20 from '../assets/Adv photos/cd2ae01c-f8c7-4ff9-b468-d39e665863a0.jpg'
import photo21 from '../assets/Adv photos/e34dd712-b8ed-4a0a-b4c3-5008ade41fd7.jpg'
import photo22 from '../assets/Adv photos/ffec3bae-15ad-47cd-858a-5b6daac8d04f.jpg'

function Home() {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

	const practiceAreas = [
		{
			id: 1,
			title: "CRIMINAL LAW",
			description: "Criminal law pertains to crimes, their prosecution, and the punishment of individuals who commit them. At Judicioworks, we specialise in criminal law, offering expert legal representation to individuals facing criminal charges in Delhi, Noida, and Ghaziabad. Our experienced criminal defence attorneys are dedicated to protecting the rights of our clients and ensuring fair treatment throughout the legal process. We handle a wide range of criminal cases, including rape, dowry death, dowry harassment, traffic challans, drug offenses, assault, theft, white-collar crimes, and juvenile offenses, among others. With our comprehensive understanding of criminal law and commitment to personalised attention, we strive to achieve the best possible outcomes for our clients.",
			image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
			readMore: "Read More"
		},
		{
			id: 2,
			title: "CIVIL LAW",
			description: "We specialise in civil law, offering comprehensive legal services to individuals and businesses involved in civil disputes in Delhi, Noida, and Ghaziabad. Civil law encompasses a broad range of legal matters, including contracts, property disputes, family law, personal injury claims, and more. Our skilled civil attorneys are committed to providing effective representation and personalised solutions tailored to meet the unique needs of each client. Whether you are seeking to resolve a contract dispute, navigate a divorce, or pursue compensation for a personal injury, our firm is here to guide you through every step of the legal process.",
			image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
			readMore: "Read More"
		},
		{
			id: 3,
			title: "FAMILY LAW",
			description: "We understand the sensitive nature of family and matrimonial law matters and provide compassionate yet strategic legal representation to clients facing such challenges in Delhi, Noida, and Ghaziabad. Our experienced family law attorneys help individuals navigate through family disputes, including divorce, child custody, alimony, adoption, and domestic violence issues. We prioritise the well-being and best interests of our clients and their families, offering sound legal advice, negotiation skills, and courtroom advocacy to achieve favourable outcomes.",
			image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
			readMore: "Read More"
		},
		{
			id: 4,
			title: "REAL ESTATE LAW",
			description: "Our firm offers comprehensive legal services in real estate law, including matters related to the Real Estate (Regulation and Development) Act (RERA) and consumer courts in Delhi, Noida, and Ghaziabad. Our dedicated attorneys specialise in navigating real estate transactions, property disputes, and consumer protection issues. We provide expert guidance and representation to protect your rights and interests, from drafting and reviewing contracts to resolving disputes through negotiation, mediation, or litigation.",
			image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
			readMore: "Read More"
		},
		{
			id: 5,
			title: "CLAIM PETITIONS",
			description: "We specialise in handling a wide range of claim petitions, including railway claims and motor accident claims in Delhi, Noida, and Ghaziabad. Our experienced legal team works diligently to ensure that our clients receive fair compensation for their losses. Whether you've been injured in a railway accident or a motor vehicle collision, we provide expert legal representation every step of the way, from gathering evidence to negotiating with insurance companies or representing you in court.",
			image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
			readMore: "Read More"
		},
		{
			id: 6,
			title: "COMMERCIAL LITIGATION",
			description: "We specialise in commercial litigation, covering matters such as recovery cases, cheque bounce issues, and arbitration disputes in Delhi, Noida, and Ghaziabad. Our experienced advocates navigate the complexities of commercial disputes, providing strategic legal solutions tailored to your specific needs. Whether you're seeking to recover outstanding debts, resolve cheque bounce issues, or engage in arbitration proceedings, we effectively represent your interests.",
			image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
			readMore: "Read More"
		},
		{
			id: 7,
			title: "CONSUMER PROTECTION LAW",
			description: "We understand the importance of protecting consumer rights and ensuring fair treatment in the marketplace in Delhi, Ghaziabad, and Noida. Our firm handles consumer matters, including disputes related to product defects, unfair trade practices, and deficient services. We advocate for the rights of consumers, holding businesses accountable for their actions, and provide expert legal representation to seek redress for issues with faulty products, deceptive advertising, or unsatisfactory services.",
			image: "https://images.unsplash.com/photo-1554224154-26032cdc0c0f?w=400&h=300&fit=crop",
			readMore: "Read More"
		},
		{
			id: 8,
			title: "LABOUR AND EMPLOYMENT LAW",
			description: "We recognize the complexities involved in navigating labour and employment laws for both employers and employees in Delhi, Ghaziabad, Noida, and Greater Noida. Our firm provides comprehensive legal services tailored to address a wide range of labour and employment matters. Whether you are an employer seeking guidance on compliance with employment regulations or an employee facing issues such as wrongful termination, discrimination, or unpaid wages, our experienced advocates assist you in protecting your rights and interests.",
			image: "https://images.unsplash.com/photo-1521791136064-7986c745021b?w=400&h=300&fit=crop",
			readMore: "Read More"
		},
		{
			id: 9,
			title: "CONVEYANCING AND COURT MARRIAGES",
			description: "We offer comprehensive legal services in conveyancing, legal advice, and marriage registration, including court marriage facilitation in Delhi, Ghaziabad, Noida, and Greater Noida. Our skilled advocates provide guidance in property transactions, ensuring smooth processes and addressing any legal complexities. Additionally, we offer legal advice across various areas of law and facilitate marriage registrations, including court marriages, ensuring compliance with legal formalities and procedures.",
			image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
			readMore: "Read More"
		},
		{
			id: 10,
			title: "WRIT AND SPECIAL LEAVE PETITIONS",
			description: "We specialise in handling Writ Petitions and Special Leave Petitions (SLPs) before various judicial forums, including High Courts and the Supreme Court of India. Our experienced advocates draft, file, and argue writ petitions and SLPs, seeking legal remedies and constitutional reliefs. Whether it's challenging governmental actions, asserting fundamental rights, or seeking appellate relief, we provide strategic legal representation to achieve favourable outcomes.",
			image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
			readMore: "Read More"
		}
	]

	// Array of all photos for the founder section
	const founderPhotos = [
		photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10,
		photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20, photo21, photo22
	]

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % Math.ceil(practiceAreas.length / 4))
		}, 20000)

		return () => clearInterval(timer)
	}, [practiceAreas.length])

	// Timer for photo slider
	useEffect(() => {
		const photoTimer = setInterval(() => {
			setCurrentPhotoIndex((prev) => (prev + 1) % founderPhotos.length)
		}, 3000) // Change photo every 3 seconds

		return () => clearInterval(photoTimer)
	}, [founderPhotos.length])

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % Math.ceil(practiceAreas.length / 4))
	}

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + Math.ceil(practiceAreas.length / 4)) % Math.ceil(practiceAreas.length / 4))
	}

	// Photo slider navigation
	const nextPhoto = () => {
		setCurrentPhotoIndex((prev) => (prev + 1) % founderPhotos.length)
	}

	const prevPhoto = () => {
		setCurrentPhotoIndex((prev) => (prev - 1 + founderPhotos.length) % founderPhotos.length)
	}

	return (
		<>
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
					<div className="space-y-6">
						<h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
							Welcome to Judicioworks Advocates and Associates
						</h1>
						<p className="text-white/90 text-lg">
							where legal excellence meets client satisfaction. Our firm is dedicated to providing comprehensive legal solutions tailored to meet the diverse needs of our clients in Delhi-NCR, with a focus on Ghaziabad and Noida.
						</p>
						<div className="flex gap-3">
							<a href="/contact" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-brand font-medium hover:bg-gray-100 transition">Get Consultation</a>
							<a href="/team" className="inline-flex items-center justify-center rounded-md border border-white px-5 py-2.5 text-white font-medium hover:bg-white/10 transition">Our Team</a>
						</div>
					</div>
					<div className="w-full">
						<img
							src={heroImg}
							alt="Law and Justice"
							className="w-full h-80 sm:h-[28rem] object-cover rounded-xl shadow"
						/>
					</div>
				</div>
			</section>

			{/* Practice Areas Section */}
			<section className="bg-brand py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-center text-white mb-12">PRACTICE AREAS</h2>
					
					<div className="relative">
						{/* Navigation Buttons */}
						<button
							onClick={prevSlide}
							className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-brand p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
						>
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
							</svg>
						</button>
						
						<button
							onClick={nextSlide}
							className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-brand p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
						>
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</button>

						{/* Slider Container */}
						<div className="overflow-hidden">
							<div 
								className="flex transition-transform duration-500 ease-in-out"
								style={{ transform: `translateX(-${currentSlide * 100}%)` }}
							>
								{Array.from({ length: Math.ceil(practiceAreas.length / 4) }, (_, slideIndex) => (
									<div key={slideIndex} className="flex gap-6 min-w-full">
										{practiceAreas.slice(slideIndex * 4, slideIndex * 4 + 4).map((area) => (
											<div key={area.id} className="flex-1 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
												<div className="relative">
													<img 
														src={area.image} 
														alt={area.title}
														className="w-full h-40 object-cover"
													/>
													<div className="absolute top-4 left-4 bg-brand text-white px-3 py-1 rounded-full text-sm font-medium">
														{area.title.split(' ').slice(0, 2).join(' ')}
													</div>
												</div>
												<div className="p-4">
													<h3 className="text-lg font-semibold text-gray-800 mb-2">{area.title}</h3>
													<p className="text-gray-600 mb-3 leading-relaxed text-sm line-clamp-3">
														{area.description.substring(0, 120)}...
													</p>
													<Link 
														to={`/practice-area/${area.id}`}
														className="inline-block bg-brand text-white px-4 py-2 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-300 text-sm"
													>
														{area.readMore}
													</Link>
												</div>
											</div>
										))}
									</div>
								))}
							</div>
						</div>

						{/* Dots Indicator */}
						<div className="flex justify-center mt-8 space-x-2">
							{Array.from({ length: Math.ceil(practiceAreas.length / 4) }, (_, index) => (
								<button
									key={index}
									onClick={() => setCurrentSlide(index)}
									className={`w-3 h-3 rounded-full transition-all duration-300 ${
										index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
									}`}
								/>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Our Founder Section */}
			<section className="py-20 relative overflow-hidden">
				{/* Crystal Green Background with gradient */}
				<div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 opacity-90"></div>
				<div className="absolute inset-0 bg-gradient-to-tr from-green-300/30 to-blue-400/30"></div>
				
				{/* Animated background elements */}
				<div className="absolute inset-0">
					<div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
					<div className="absolute top-40 right-20 w-24 h-24 bg-white/20 rounded-full animate-bounce"></div>
					<div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/15 rounded-full animate-ping"></div>
					<div className="absolute bottom-40 right-1/3 w-20 h-20 bg-white/25 rounded-full animate-pulse"></div>
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Section Header */}
					<div className="text-center mb-16">
						<h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
							Our Founder
						</h2>
						<div className="w-24 h-1 bg-white mx-auto rounded-full animate-scale-in"></div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						{/* Founder Information */}
						<div className="space-y-8 animate-fade-in-left">
							<div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-2xl">
								<h3 className="text-3xl font-bold text-white mb-4">
									Advocate Rishabh Malhotra
								</h3>
								<p className="text-white/90 text-lg leading-relaxed mb-6">
									Founder and Principal Advocate at Judicioworks Advocates and Associates. 
									With years of experience in legal practice, Advocate Rishabh Malhotra 
									has established a reputation for excellence, integrity, and dedication 
									to client success.
								</p>
								<div className="space-y-4">
									<div className="flex items-center space-x-3">
										<div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
										<span className="text-white/90">Specialized in Criminal & Civil Law</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
										<span className="text-white/90">Expert in Family & Real Estate Law</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
										<span className="text-white/90">Committed to Client Success</span>
									</div>
								</div>
							</div>
						</div>

						{/* Photo Slider */}
						<div className="relative animate-fade-in-right">
							<div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
								{/* Main Photo Display */}
								<div className="relative h-full">
									<img
										src={founderPhotos[currentPhotoIndex]}
										alt={`Founder Photo ${currentPhotoIndex + 1}`}
										className="w-full h-full object-cover transition-all duration-700 ease-in-out transform scale-105"
									/>
									{/* Overlay gradient */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
								</div>

								{/* Navigation Buttons */}
								<button
									onClick={prevPhoto}
									className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
								>
									<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
									</svg>
								</button>
								
								<button
									onClick={nextPhoto}
									className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
								>
									<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
									</svg>
								</button>

								{/* Photo Counter */}
								<div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
									{currentPhotoIndex + 1} / {founderPhotos.length}
								</div>
							</div>

							{/* Thumbnail Navigation */}
							<div className="mt-6 flex justify-center space-x-2">
								{founderPhotos.slice(0, 8).map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentPhotoIndex(index)}
										className={`w-3 h-3 rounded-full transition-all duration-300 ${
											index === currentPhotoIndex ? 'bg-white w-8' : 'bg-white/50'
										}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</>
	)
}

export default Home 