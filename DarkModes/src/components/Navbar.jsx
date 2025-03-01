import { useState, useEffect } from "react"
import "./styles/Navbar.css"
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa"

const Navbar = ({ setDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false) // Cierra el menú móvil al hacer clic
    }
  }

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="navbar-logo">
        <span>Kevin Duhamel</span>
      </div>

      {/* Botón menú móvil */}
      <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Navegación */}
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <ul className="nav-list">
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li>
            <a href="mailto:kevinduhamelh@gmail.com" target="_blank" rel="noopener noreferrer">
              Contact
            </a>
          </li>
        </ul>

        {/* Redes y Dark Mode */}
        <div className="nav-icons">
          <a href="https://www.linkedin.com/in/kevin-duhamel-hayes" target="_blank" rel="noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/kevinduhamelhayes" target="_blank" rel="noreferrer">
            <FaGithub size={30} />
          </a>
          <button className="btn-darkmode" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun size={25} /> : <FaMoon size={25} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

