import "./styles/Navbar.css"
const Navbar = () => {
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
        <ul className="ul-nav- left">
          <li className="li-nav-left">
            Dark Mode
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
