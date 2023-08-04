import "./styles/Navbar.css"
const Navbar = ({ setDarkMode, darkMode }) => {
  return (
    <nav className="navbar">
      <div className="right">
        <ul className="ul-nav-right">
          <li className="li-nav-right">Home</li>
          <li className="li-nav-right">About</li>
          <li className="li-nav-right">Contact</li>
        </ul>
      </div>
      <div className="left">
        <button className="btn-darkmode" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
