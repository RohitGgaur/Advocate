import { Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Team from './Component/Team'
import Contact from './Component/Contact'
import Blog from './Component/Blog'
import PracticeAreaDetail from './Component/PracticeAreaDetail'
import WelcomePopup from './Component/WelcomePopup'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/practice-area/:id" element={<PracticeAreaDetail />} />
        </Routes>
      </main>
      <WelcomePopup />
    </div>
  )
}

export default App
