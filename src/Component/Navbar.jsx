import { Link, NavLink } from 'react-router-dom'
import logoImg from '../assets/adv1.jpg'

function Navbar() {
	return (
		<header className="bg-white sticky top-0 z-50 shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<Link to="/" className="flex items-center gap-2">
						<img src={logoImg} alt="Logo" className="h-8 w-8 rounded-full object-cover" />
						<span className="text-xl font-semibold text-gray-800">Advocate</span>
					</Link>

					<nav className="hidden md:flex items-center gap-6 text-sm font-medium">
						<NavLink to="/" end className={({ isActive }) => `hover:text-brand ${isActive ? 'text-brand' : 'text-gray-700'}`}>Home</NavLink>
						<NavLink to="/about" className={({ isActive }) => `hover:text-brand ${isActive ? 'text-brand' : 'text-gray-700'}`}>About</NavLink>
						<NavLink to="/team" className={({ isActive }) => `hover:text-brand ${isActive ? 'text-brand' : 'text-gray-700'}`}>Team</NavLink>
						<NavLink to="/blog" className={({ isActive }) => `hover:text-brand ${isActive ? 'text-brand' : 'text-gray-700'}`}>Blog</NavLink>
						<NavLink to="/contact" className={({ isActive }) => `hover:text-brand ${isActive ? 'text-brand' : 'text-gray-700'}`}>Contact</NavLink>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Navbar 