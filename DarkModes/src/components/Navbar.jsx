import "./styles/Navbar.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"
const Navbar = ({ setDarkMode, darkMode }) => {
  return (
    <nav className="navbar">
      <div className="right">
        <ul className="ul-nav-right">
          <li className="li-nav-right">Home</li>
          <li className="li-nav-right">About</li>
          <li className="li-nav-right">
            <a
              href="mailto:kevinduhamelh@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="left">
        <ul className="ul-navbar-right">
          <li className="li-navbar-icon">
            <a
              href="https://www.linkedin.com/in/kevin-duhamel-hayes"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin color="var(--dark-color)" size={45} />
            </a>
          </li>
          <li className="li-navbar-icon">
            <a
              href="https://github.com/kevinduhamelhayes"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub color="var(--dark-color)" size={45} />
            </a>
          </li>
          <li>
            <button
              className="btn-darkmode"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
