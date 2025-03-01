import "./styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      {/* Enlaces de navegación */}
      <nav className="footer-left">
        <ul className="footer-nav">
          <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</li>
          <li onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>About</li>
          <li>
            <a href="mailto:kevinduhamelh@gmail.com" target="_blank" rel="noopener noreferrer">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Crédito del footer */}
      <div className="footer-right">
        <p>Lovingly created by <span>Kevin Duhamel</span></p>
      </div>
    </footer>
  )
}

export default Footer

